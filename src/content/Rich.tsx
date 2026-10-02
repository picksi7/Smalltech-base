import { Fragment, type ReactNode } from "react";

/**
 * Показывает строку из файлов с текстами, превращая простую разметку в выделения.
 * Страницы вызывают его только для тех строк, где выделение есть сейчас.
 *
 *   *текст*        курсив
 *   **текст**      светлый полужирный
 *   ==текст==      светлый (ярче основного текста)
 *   {{текст}}      цветной градиентный акцент
 *   {{**текст**}}  цветной градиентный акцент, полужирный
 *   &nbsp;         неразрывный пробел
 */
const TOKEN = /\{\{\*\*(.+?)\*\*\}\}|\{\{(.+?)\}\}|\*\*(.+?)\*\*|==(.+?)==|\*(.+?)\*/g;

const Rich = ({ text }: { text: string }) => {
  const source = text.replace(/&nbsp;/g, "\u00a0");
  const parts: ReactNode[] = [];
  let last = 0;
  let key = 0;

  for (const match of source.matchAll(TOKEN)) {
    const index = match.index ?? 0;
    if (index > last) parts.push(source.slice(last, index));
    const [, gradientBold, gradient, bold, light, italic] = match;
    if (gradientBold !== undefined) {
      parts.push(<span key={key++} className="text-gradient-amber font-semibold">{gradientBold}</span>);
    } else if (gradient !== undefined) {
      parts.push(<span key={key++} className="text-gradient-amber">{gradient}</span>);
    } else if (bold !== undefined) {
      parts.push(<span key={key++} className="text-foreground font-semibold">{bold}</span>);
    } else if (light !== undefined) {
      parts.push(<span key={key++} className="text-foreground">{light}</span>);
    } else if (italic !== undefined) {
      parts.push(<em key={key++} className="text-foreground">{italic}</em>);
    }
    last = index + match[0].length;
  }
  if (last < source.length) parts.push(source.slice(last));

  return (
    <>
      {parts.map((part, i) => (
        <Fragment key={i}>{part}</Fragment>
      ))}
    </>
  );
};

export default Rich;
