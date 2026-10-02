// Тексты страницы «Исследование и программа». Как править — в файле README.md рядом.
// Числа здесь тоже правятся вручную: сайт ничего не пересчитывает сам.

type Tier = "must-cover" | "secondary";

export const research = {
  // Первый экран
  hero: {
    chip: "аналитический отчёт · апрель 2026",
    title: "Что болит у {{smalltech и midtech}} команд",
    description:
      "Исследование аудитории шести крупнейших ИТ-конференций: 468 анкет, 3 глубинных кастдева, 979 аналитических единиц. Цель — понять, о чём должна быть программа следующей конференции, чтобы ответить на самые острые боли инженерных команд.",
    stats: [
      { value: "468", label: "анкет собрано", hint: "после очистки и дедупликации" },
      { value: "346", label: "приоритетная когорта", hint: "smalltech / midtech (73.9%)" },
      { value: "979", label: "аналитических единиц", hint: "боли, вопросы, запросы" },
      { value: "316", label: "уникальных респондентов", hint: "в тематизированном слое" },
    ],
  },

  // 01 · Как собирались данные
  methodology: {
    eyebrow: "01 · механика исследования",
    title: "Как собирались и обрабатывались данные",
    description:
      "Три типа источников: анкетные опросы участников конференций, глубинные кастдевы с CTO и Head of Engineering, и открытые ответы на вопросы о сложных профессиональных задачах.",
    reach: {
      title: "Reach",
      formula: "70% × доля уникальных респондентов + 30% × доля аналитических единиц",
      description: "Насколько широко тема распространена в когорте.",
    },
    intensity: {
      title: "Intensity",
      formula: "45% тип сигнала + 35% срочность + 15% current acute + 5% unmet question",
      description: "Насколько остро ощущается боль.",
    },
    score: {
      title: "Pain Priority Score",
      formula: "50% × Reach + 35% × Intensity + 15% × широта между конференциями",
      description: "Итоговый приоритет темы для программы.",
    },
    sourcesTitle: "источники данных",
    // Справа от числа в каждой карточке источника
    sourceCountSuffix: "анкет",
    sources: [
      { name: "DevOpsConf", date: "янв 2026", count: "67" },
      { name: "AiConf", date: "янв 2026", count: "54" },
      { name: "GolangConf", date: "янв 2026", count: "88" },
      { name: "TeamLead Conf", date: "фев 2026", count: "130" },
      { name: "HighLoad++", date: "фев 2026", count: "129" },
      { name: "CustDev", date: "апр 2026", count: "11" },
    ],
  },

  // 02 · Когорты
  cohorts: {
    eyebrow: "02 · когортный анализ",
    title: "Кто составляет приоритетную когорту",
    description:
      "Smalltech/midtech — компании с ИТ-штатом менее 1500 человек. Эта когорта составила 73.9% всей выборки и формирует основной сигнал для программы.",
    // Подпись после поясняющей строки в карточке («ИТ-штат до 300 анкет»)
    noteSuffix: "анкет",
    // Поля `pct` (длина полоски, в процентах) и `dim` (приглушённая карточка) — оформление, их не менять.
    items: [
      { name: "Smalltech", count: "~180", note: "ИТ-штат до 300", pct: 52 },
      { name: "Midtech", count: "~166", note: "ИТ-штат 300–1500", pct: 48 },
      { name: "Enterprise", count: "122", note: "ИТ-штат 1500+", pct: 35, dim: true },
    ],
  },

  // 03 · Рейтинг болей
  pains: {
    eyebrow: "03 · рейтинг болей",
    title: "12 тематических кластеров по силе боли",
    description:
      "Каждая тема оценивается по охвату когорты, силе боли и широте присутствия между конференциями. Топ-6 формируют must-cover ядро программы.",
    // Первые шесть — «ядро», они же выводятся в блоке «Шесть обязательных треков» ниже.
    // Поля `rank` (место) и `tier` (must-cover или secondary) — оформление, их не менять.
    items: [
      { rank: 1, name: "Engineering Economics", description: "стоимость, ресурсы, эффективность", score: 54.9, respondents: 96, reach: "24.5%", tier: "must-cover" as Tier },
      { rank: 2, name: "Delivery & Processes", description: "поставка, процессы, качество", score: 54.4, respondents: 87, reach: "22.5%", tier: "must-cover" as Tier },
      { rank: 3, name: "Legacy & Migration", description: "модернизация, миграции", score: 52.6, respondents: 65, reach: "17.2%", tier: "must-cover" as Tier },
      { rank: 4, name: "Platform & DevOps", description: "инфраструктура, observability", score: 51.0, respondents: 78, reach: "20.6%", tier: "must-cover" as Tier },
      { rank: 5, name: "Architecture & Scalability", description: "системный дизайн, рост нагрузки", score: 50.9, respondents: 65, reach: "16.8%", tier: "must-cover" as Tier },
      { rank: 6, name: "Leadership & Org Design", description: "лидерство, команды, оргдизайн", score: 50.5, respondents: 60, reach: "15.8%", tier: "must-cover" as Tier },
      { rank: 7, name: "AI in Production", description: "прикладной AI, не хайп", score: 48.8, respondents: 65, reach: "17.6%", tier: "secondary" as Tier },
      { rank: 8, name: "Cross-functional Alignment", description: "коммуникация, выравнивание", score: 47.4, respondents: 56, reach: "14.3%", tier: "secondary" as Tier },
      { rank: 9, name: "Security & Compliance", description: "безопасность, соответствие", score: 46.2, respondents: 43, reach: "11.2%", tier: "secondary" as Tier },
      { rank: 10, name: "Learning & Maturity", description: "рост, зрелость, экспертиза", score: 45.9, respondents: 51, reach: "13.4%", tier: "secondary" as Tier },
      { rank: 11, name: "Data & Knowledge Systems", description: "данные, знания, поиск", score: 45.9, respondents: 48, reach: "12.5%", tier: "secondary" as Tier },
      { rank: 12, name: "People, Hiring & Career", description: "найм, рост, карьера", score: 45.8, respondents: 42, reach: "11.0%", tier: "secondary" as Tier },
    ],
  },

  // 04 · Обязательные треки (карточки строятся из первых шести болей выше)
  mustCover: {
    eyebrow: "04 · must-cover детально",
    title: "Шесть обязательных треков ядра",
    description:
      "Стоимость изменений, delivery, legacy, platform/devops, архитектура и лидерство образуют основу программы. AI усиливает её, но не подменяет.",
    respondentsLabel: "resp.",
    reachLabel: "reach",
    tierLabel: "tier",
    tierValue: "must",
  },

  // Форматы выступлений
  formats: {
    eyebrow: "форматирование опыта",
    title: "Разные боли требуют разных сценических форм",
    description:
      "Программа не должна состоять только из докладов. Там, где нужны маршруты и ошибки, работают case study и war story. Там, где нет одного правильного ответа — панели и AMA.",
    cardLabel: "формат",
    items: [
      { name: "Case study", scope: "migration, architecture, AI, platform", text: "Показывает реальный путь команды, последовательность решений и цену ошибки." },
      { name: "War story / failure talk", scope: "legacy, delivery, leadership", text: "Позволяет разбирать тупики, откаты, сопротивление и ошибки без полировки reality gap." },
      { name: "Panel discussion", scope: "leadership, AI, security, alignment", text: "Подходит темам, где нет одного правильного рецепта и важны сравнительные практики." },
      { name: "Workshop / clinic", scope: "observability, testing, AI quality, process setup", text: "Даёт участнику конкретный инструмент, фреймворк или метод разбора ситуации." },
      { name: "AMA / office hours", scope: "migration, platform, leadership", text: "Закрывает незакрытые вопросы и помогает дожать сложные нюансы без лишней сцены." },
      { name: "Benchmark / patterns talk", scope: "efficiency, org design, delivery", text: "Нужен там, где аудитории важны ориентиры, зрелостные модели и сопоставимые паттерны." },
    ],
  },

  // 05 · Решения для комитета
  decisions: {
    eyebrow: "05 · решения для комитета",
    title: "Что делать программному комитету дальше",
    balanceTitle: "Рекомендуемый баланс программы",
    // Поле `value` — доля в процентах, она же длина полоски. Поле `accent` — оформление.
    balance: [
      { name: "Must-cover ядро", value: 60, accent: true },
      { name: "Important secondary", value: 30 },
      { name: "Экспериментальные форматы", value: 10 },
    ],
    actionsTitle: "4 ключевых действия",
    actions: [
      "Собирать CFP не вокруг хайповых технологий, а вокруг инженерных и организационных сценариев боли.",
      "Приоритизировать кейсы компаний, которые росли под ограничениями, а не только зрелые enterprise-истории.",
      "Требовать от спикеров ответа на вопрос «что команда делала, где ошиблась и что теперь работает».",
      "Сбалансировать программу так, чтобы технические треки не существовали отдельно от лидерства, стоимости и delivery-логики.",
    ],
    quote:
      "«Сильная программа — это последовательность решений от боли команды к полезному формату, а не список модных технологических ярлыков.»",
  },

  // Кнопки внизу страницы
  buttons: {
    community: "Узнать о сообществе",
    join: "Внести вклад в программу",
  },
};
