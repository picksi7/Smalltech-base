// Тексты страницы «Материалы». Как править — в файле README.md рядом.
//
// Каждая запись в MEETUPS — одна встреча: её заголовок, программа, партнёры и доклады.
// Новая встреча добавляется сверху списка. В записях доклада поля `embedSrc` (видео),
// `slidesUrl` (ссылка на слайды), `url`, `id`, `kind`, `logo` — технические: их не менять.

export const MEETUPS: Meetup[] = [
  {
    id: "saint-highload-2026",
    chip: "Конференция",
    navLabel: "2026",
    title: "Свой трек на Saint HighLoad++",
    date: "22–23 июня 2026",
    city: "Санкт-Петербург",
    venue: { name: "Design District DAA" },
    intro:
      "На конференции Saint HighLoad++ 2026 мы собрали собственный трек, ориентированный на команды, которым не нужно копировать BigTech, чтобы решать свои инженерные задачи.",
    partnersLabel: "Организатор",
    partners: [{ name: "Онтико", url: "https://ontico.ru", label: "Онтико" }],
    talks: [
      {
        title:
          "«Давайте просто развернём свою LLM на 1Т параметров»: как выглядит self-hosted AI после первого миллиона запросов",
        speaker: "Сергей Нотевский, Битрикс24",
        description:
          "Грабли self-hosted AI на опыте Битрикс24: контекст, vLLM, GPU-пулы, evals, качество, стоимость и миллионы запросов в месяц. Чек-лист решений и метрик для оценки готовности к своим моделям.",
        embedSrc:
          "https://vkvideo.ru/video_ext.php?oid=-230456834&id=456239040&hash=747f0384bed7f9d730&hd=3",
        slidesUrl: "/slides/saint-highload-2026-notevskiy.pdf",
      },
      {
        title: "Почему хорошие инженеры не строят стартапы — и как это исправить",
        speaker: "Алексей Шаблюк, независимый эксперт (ex-CTO VK Cloud, Kion)",
        description:
          "Пять конкретных блокеров, которые тормозят переход инженера в фаундера: три психологических, два структурных. Карта блокеров с методикой преодоления, фреймворк минимального стека фаундера, шаблон бизнес-эксперимента до первой строчки кода.",
        embedSrc:
          "https://vkvideo.ru/video_ext.php?oid=-230456834&id=456239039&hash=bc83e640688f5d0fbe&hd=3",
        slidesUrl: "/slides/saint-highload-2026-shablyuk.pdf",
      },
      {
        title: "Безопасность AI-агентов: векторы угроз и механизмы защиты",
        speaker: "Радда Юрьева, Positive Technologies",
        description:
          "Типовые виды защиты AI-агентов и их уязвимости с точки зрения пентестера. Обход логики системных промптов, обходы ML guardrails, LLM guardrails через подбор состязательных суффиксов. Алгоритм аудита для LLM-агентов, шаблоны защит, OWASP Top-10 LLM.",
        embedSrc:
          "https://vkvideo.ru/video_ext.php?oid=-230456834&id=456239037&hash=07d71e5afc15196391&hd=3",
        slidesUrl: "/slides/saint-highload-2026-yureva.pdf",
      },
      {
        title: "Почему вам (скорее всего) не нужен локальный LLM-инференс",
        speaker: "Егор Андреев, Впрод",
        description:
          "Где именно ломается экономика локального инференса. Разбор через TCO: аренда RTX 5090 за 50–90 тыс. рублей в месяц или покупка за 300–500 тыс. Исключения: ИБ, GPU-парк в наследство, CAPEX, постоянная нагрузка. Альтернативы: API/OpenRouter, отечественные сервисы.",
        embedSrc:
          "https://vkvideo.ru/video_ext.php?oid=-230456834&id=456239036&hash=6db18ac695c76c3ea9&hd=3",
        slidesUrl: "/slides/saint-highload-2026-andreev.pdf",
      },
      {
        kind: "workshop",
        title:
          "Мастер-класс «Детские болезни доменных платформ: архитектурные ошибки, которые дорого чинить»",
        speaker: "Екатерина Лысенко, независимый эксперт",
        description:
          "Повторяющиеся архитектурные ошибки в доменных платформах: FinTech, Compliance, e-commerce, каталог и витрины. Про решения, которые сначала «ну пока так», а на этапе роста становятся очень дорогими.",
        embedSrc:
          "https://vkvideo.ru/video_ext.php?oid=-230456834&id=456239033&hash=dac64e998466dfc005&hd=3",
        slidesUrl: "/slides/saint-highload-2026-lysenko.pdf",
      },
      {
        title: "Уровни зрелости внедрения AI в процессы разработки",
        speaker: "Иван Поддубный, Вебпрактик",
        description:
          "Мировые и локальные модели оценки зрелости AI в разработке. Как честно определить, на каком уровне находится команда или компания. Что меняется в инфраструктуре, процессах и роли разработчика на каждом следующем уровне. Инструмент самооценки.",
        embedSrc:
          "https://vkvideo.ru/video_ext.php?oid=-230456834&id=456239031&hash=00d4642ee2beb79b14&hd=3",
        slidesUrl: "https://north-leshiy.github.io/ai-maturity-model-summer2026/",
        slidesLabel: "Открыть AI Maturity Model",
      },
    ],
  },
  {
    id: "vol-2",
    vol: "Vol.2",
    title: "AI и лидерство в смоллтехе",
    date: "30 января 2026",
    city: "Москва",
    venue: { name: "Ви.Tech" },
    intro:
      "Три доклада и круглый стол. Программа рассчитана на совместную работу с аудиторией: разбираем сложные кейсы, проектируем алгоритм внедрения изменений вместе.",
    partners: [
      { name: "Ви.Tech", url: "https://vitech.ru", logo: "vitech" },
      { name: "ППР — Передовые Платежные Решения", url: "https://ppr.ru", logo: "ppr" },
      { name: "Петрович-Тех", url: "https://petrovich.tech/", logo: "petrovich" },
    ],
    talks: [
      {
        title: "Как обуздать звезду: инструкция для руководителя на новом проекте",
        speaker: "Михаил Шваркунов, GRI",
        description:
          "О том, как работать с устоявшимся авторитетом, если вы — новый лид или несёте изменения в привычные процессы. Михаил предлагает свои наработки и разбирает сложные случаи вместе с участниками.",
        embedSrc:
          "https://vkvideo.ru/video_ext.php?oid=-230456834&id=456239023&hash=d871f78b52d17360&hd=3",
        slidesUrl: "https://vk.cc/cTZU7n",
      },
      {
        title: "Уровни зрелости внедрения AI в процессы",
        speaker: "Иван Поддубный, Вебпрактик",
        description:
          "Прежде чем выбрать, куда двигаться, нужно определить своё текущее местоположение. Внедрение сложных изменений сильно зависит от уровня зрелости коллектива и процессов. Вместе с Иваном учимся определять свою точку на карте и проектируем дальнейший путь.",
        embedSrc:
          "https://vkvideo.ru/video_ext.php?oid=-230456834&id=456239024&hash=c5fba70629e77644&hd=3",
        slidesUrl: "https://north-leshiy.github.io/ai-maturity-model/",
        slidesLabel: "Открыть AI Maturity Model",
      },
      {
        title: "Проект AI-Суфлёр для продаж и сервиса",
        speaker: "Дмитрий Громов, Надежда Кохтачева, Передовые Платежные Решения",
        description:
          "Доклад объединяет темы лидерства и внедрения изменений на примере масштабного и долгого пути проекта Дмитрия и Надежды. Обсуждаем, как формируется цель проекта, как бизнес принимает решения, как сформировать команду и что предусмотреть на самом старте.",
        embedSrc:
          "https://vkvideo.ru/video_ext.php?oid=-230456834&id=456239025&hash=5ba84fb72a4cb980&hd=3",
        slidesUrl: "https://vk.cc/cTZUq4",
      },
      {
        kind: "panel",
        title: "Круглый стол: Алгоритм внедрения ИИ в смоллтехе",
        description:
          "При активном участии аудитории разрабатываем алгоритм внедрения изменений на примере AI — он поможет всем причастным предусмотреть подводные камни ещё на старте и подсветить опасные места.",
        embedSrc:
          "https://vkvideo.ru/video_ext.php?oid=-230456834&id=456239027&hash=8d41cbaf20f09a3e&hd=3",
      },
    ],
  },
  {
    id: "vol-1",
    vol: "Vol.1",
    title: "Первый опыт",
    date: "26 апреля 2025",
    city: "Санкт-Петербург",
    venue: {
      name: "Предпринимательская Точка Кипения ПромТехДизайн",
      url: "https://t.me/tkpromtechdesign",
    },
    intro:
      "Первый митап смоллтехов в Санкт-Петербурге: говорим честно про перегретый рынок труда, стажировки за пределами больших корпораций и роль первого опыта.",
    partners: [
      { name: "IT HR Awards", url: "https://t.me/ithrawards", logo: "ithr" },
      { name: "Postgres Professional", url: "https://t.me/PostgresProEdu", label: "Postgres Pro" },
      { name: "ИнфоТеКС", url: "https://t.me/infotecsintern", label: "ИнфоТеКС" },
      { name: "Петрович-Тех", url: "https://petrovich.tech/", logo: "petrovich" },
      { name: "Byte", url: "https://t.me/ByteITclub", logo: "byte" },
      {
        name: "Точка Кипения ПромТехДизайн",
        url: "https://t.me/tkpromtechdesign",
        logo: "tochka",
      },
    ],
    talks: [
      {
        title: "Работа есть. Люди есть. Почему всё так плохо с рынком труда?",
        speaker: "Альберт Степанцов, Спринт-Ф",
        description:
          "Поговорим честно: рынок перегрет, вакансии и резюме не сходятся, алгоритмы буксуют, а люди теряются в потоке. Причина? Старые подходы больше не работают — и на их место пока ничего внятного не пришло.",
        embedSrc:
          "https://vkvideo.ru/video_ext.php?oid=-230456834&id=456239019&hash=5f3320be294b6088&hd=3",
        slidesUrl: "https://vk.cc/cLSgpf",
      },
      {
        title: "Стажировка и первый опыт. Куда если не Яндекс?",
        speaker: "Елизавета Егорнова, Атом",
        description:
          "Цель доклада — показать, что опыт и жизнь студента уже большой опыт. Если набор на стажировку идёт не оптом (20–30 человек разом), а локальные истории ведёт один конкретный человек со стороны организаторов — он работает более вдохновлённо и точечно.",
        embedSrc:
          "https://vkvideo.ru/video_ext.php?oid=-230456834&id=456239021&hash=56685eae02f665f3&hd=3",
      },
      {
        title: "Как тестировать на стажировке без подсказок и фреймворков",
        speaker: "Дмитрий Козлов, ИнфоТеКС",
        description:
          "Реальная история о том, как я столкнулся с отсутствием готовых инструментов, искал не самые очевидные варианты решения, победил проблемы отладки с помощью кастомного логирования и нашёл спасение в Python-библиотеке Pexpect.",
        embedSrc:
          "https://vkvideo.ru/video_ext.php?oid=-230456834&id=456239017&hash=fb496991389e7bfb&hd=3",
        slidesUrl: "https://vk.cc/cLSgio",
      },
      {
        kind: "panel",
        title: "Интерактив: «Отсобеседуй своего потенциального руководителя»",
        speaker:
          "Анна Афонина (ProIT Fest), Виталий Левченко (Wildberries), Анатолий Иванов (investing.com)",
        description:
          "Интерактивный формат, в котором аудитория задаёт вопросы потенциальным руководителям и проверяет, насколько комфортно с ними работать.",
        embedSrc:
          "https://vkvideo.ru/video_ext.php?oid=-230456834&id=456239018&hash=527cc3690e5254d9&hd=3",
      },
    ],
  },
];

// Тексты оформления страницы
export const materials = {
  hero: {
    chip: "материалы",
    title: "Записи докладов и {{презентации}}",
    description:
      "После каждого митапа сообщество выкладывает видео выступлений и слайды спикеров — чтобы важные разговоры жили дальше и были доступны всем смоллтехам, не только тем, кто был в зале.",
  },

  // Подписи внутри блоков встреч
  labels: {
    // «Митап Vol.2» — слово перед номером, если у встречи нет своей подписи `chip`
    meetupChipPrefix: "Митап",
    hostedBy: "Нас принимал",
    defaultPartnersLabel: "Партнёры митапа",
    kindTalk: "доклад",
    kindPanel: "круглый стол",
    kindWorkshop: "мастер-класс",
    defaultSlidesLabel: "Презентация",
    videoHint: "VK Video · нажмите для запуска",
  },

  // Нижний блок
  outro: {
    eyebrow: "что дальше",
    title: "Новые встречи — уже в&nbsp;работе",
    description:
      "Записи и презентации появляются здесь сразу после каждого митапа и выступления. Хотите выступить или предложить тему — напишите нам.",
  },
};

// ===== Описание формата данных (для разработчиков, на текст не влияет) =====

/** Ключ логотипа. Сами картинки подключены на странице, здесь выбирается только какая. */
export type LogoKey = "petrovich" | "vitech" | "ppr" | "ithr" | "byte" | "tochka";

export type Talk = {
  kind?: "talk" | "panel" | "workshop";
  title: string;
  speaker?: string;
  description: string;
  embedSrc: string;
  slidesUrl?: string;
  slidesLabel?: string;
};

export type Partner = {
  name: string;
  url: string;
  /** Optional image logo — when absent, we render a clean wordmark tile. */
  logo?: LogoKey;
  /** Short label shown when there is no image logo. */
  label?: string;
};

export type Meetup = {
  id: string;
  /** Version tag for meetups (Vol.1, Vol.2…). Optional for one-off events like conferences. */
  vol?: string;
  /** Overrides the header chip text. Defaults to `Митап {vol}`. */
  chip?: string;
  /** Short mono label used in the quick-nav. Defaults to `vol`. */
  navLabel?: string;
  title: string;
  date: string;
  city: string;
  venue: { name: string; url?: string };
  intro: string;
  /** Heading above the logo row. Defaults to «Партнёры митапа». */
  partnersLabel?: string;
  partners: Partner[];
  talks: Talk[];
};
