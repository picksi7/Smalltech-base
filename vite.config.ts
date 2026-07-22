import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import fs from "fs";

// https://vitejs.dev/config/
// Кастомный домен smalltech.ontico.ru обслуживается из корня,
// поэтому base всегда "/". Файл public/CNAME сохраняет привязку домена при каждом деплое.
export default defineConfig(({ mode }) => ({
  base: "/",
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: [
      "react",
      "react-dom",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
      "@tanstack/react-query",
      "@tanstack/query-core",
    ],
  },
  ssgOptions: {
    // Маршруты для статической генерации
    includedRoutes() {
      return [
        "/",
        "/manifesto",
        "/research",
        "/community",
        "/join",
        "/partnership",
        "/materials",
      ];
    },
    onFinished() {
      const dist = path.resolve(__dirname, "dist");

      // Per-page <title> в статике. react-helmet-async@1.3.0 внутри
      // vite-react-ssg@0.9-beta не эмитит <title> в пререндер (в рантайме
      // document.title ставится верно, а в сыром HTML остаётся общий title).
      // og:title в статику попадает корректно по каждой странице — берём его
      // и проставляем как <title>, чтобы JS-независимые боты видели свой заголовок.
      for (const file of fs.readdirSync(dist)) {
        if (!file.endsWith(".html")) continue;
        const filePath = path.join(dist, file);
        let html = fs.readFileSync(filePath, "utf8");
        const og = html.match(/<meta[^>]+property="og:title"[^>]+content="([^"]*)"/i);
        if (!og || !og[1]) continue;
        const title = `<title>${og[1]}</title>`;
        html = /<title>[\s\S]*?<\/title>/i.test(html)
          ? html.replace(/<title>[\s\S]*?<\/title>/i, title)
          : html.replace(/<\/head>/i, `${title}</head>`);
        fs.writeFileSync(filePath, html);
      }

      // Копируем index.html как 404.html для deep links на GitHub Pages
      // (после простановки title, чтобы 404 получил заголовок главной).
      if (fs.existsSync(`${dist}/index.html`)) {
        fs.copyFileSync(`${dist}/index.html`, `${dist}/404.html`);
      }
    },
  },
}));
