const heroCluster = document.getElementById("hero-cluster");
const projectModal = document.getElementById("project-modal");
const projectWindowTemplate = projectModal?.querySelector(".project-window-template");
let projectWindowZ = 300;

function clearDesktopIconFocus() {
  document.querySelectorAll(".desktop-icon").forEach((icon) => {
    if (icon instanceof HTMLElement) {
      icon.blur();
      icon.classList.remove("is-hovered");
    }
  });
}

const projectContent = {
  r7: {
    title: "Информация о: R7MINER",
    name: "R7MINER",
    company: "Майнинговая компания (топ-5) / 2025-2026",
    intro:
      "Развивала event-направление компании: вела участие в отраслевых выставках, запускала клиентские мероприятия и собирала спецпроекты под бизнес-задачи.",
    metrics:
      "5 выставок → 3 клиентских мероприятия → 50 VIP-подарков за 30 дней → 10+ подрядчиков в координации",
    detailItems: [
      "Вела проекты полного цикла: от идеи и концепции до реализации и пост-аналитики.",
      "Организовала участие компании в крупных отраслевых выставках, включая международные площадки (The Trends, Blockchain Forum Dubai, Crypto Summit и т.д.).",
      "Координировала застройку стендов, подрядчиков, логистику и тайминг мероприятий.",
      "Работала с внутренними командами: маркетинг, продажи, руководство, спикеры.",
      "Готовила презентации, клиентские материалы и сопровождала коммуникацию с гостями.",
      "Запустила проект новогодних подарков для клиентов: концепция, производство, упаковка и логистика 50 комплектов за месяц.",
      "Оптимизировала подготовку мероприятий с использованием AI-инструментов.",
    ],
    thumb: "./assets/career-r7miner.svg",
    preview: "./assets/r7miner/r7-01-wide.jpg",
    gallery: [
      { src: "./assets/r7miner/r7-01-wide.jpg", layout: "full" },
      { src: "./assets/r7miner/r7-pair-01.jpg" },
      { src: "./assets/r7miner/r7-pair-02.jpg" },
      { src: "./assets/r7miner/r7-gif-01.gif", layout: "full" },
      { src: "./assets/r7miner/r7-single-02.jpg", layout: "full" },
      { src: "./assets/r7miner/r7-gif-02.gif", layout: "full" },
      { src: "./assets/r7miner/r7-pair-03.jpg" },
      { src: "./assets/r7miner/r7-pair-04.jpg" },
      { src: "./assets/r7miner/r7-gif-05.gif", layout: "pair" },
      { src: "./assets/r7miner/r7-pair-05.jpg" },
      { src: "./assets/r7miner/r7-gif-06.gif", layout: "full" },
    ],
  },
  region: {
    title: "Информация о: РЕГИОН СТАЛЬ",
    name: "РЕГИОН СТАЛЬ",
    company: "Металлоторгующая компания (топ-3 СПб / оборот 5 млрд.) / 2024-2025",
    intro:
      "Работала на стыке HR и операционного управления: выстраивала найм, адаптацию и внутренние процессы филиала в период роста команды, позже участвовала в запуске обучающей программы компании.",
    metrics:
      "Рост команды 8 → 25 сотрудников → 50+ обученных сотрудников → онбординг -30% по времени → 25+ обучающих видео за месяц",
    detailItems: [
      "Вела полный цикл найма",
      "Проводила очное обучение по продажам и продукту",
      "Внедрила HR-ботов в Telegram: ответы на частые вопросы, вводная информация и обучение",
      "Контролировала административные процессы филиала",
      "Смонтировала 20+ видео средней длительностью 25 минут за месяц",
      "Собрала единый визуальный стиль видеокурса",
    ],
    thumb: "./assets/career-region-stal.svg",
    preview: "./assets/region-stal/region-1.jpg",
    gallery: [
      { src: "./assets/region-stal/region-1.jpg", layout: "full" },
      { src: "./assets/region-stal/region-2.gif", layout: "pair" },
      { src: "./assets/region-stal/region-pair-extra-2.png", layout: "pair" },
      { src: "./assets/region-stal/region-pair-1-3.png", layout: "pair" },
      { src: "./assets/region-stal/region-pair-2-3.gif", layout: "pair" },
      { src: "./assets/region-stal/region-5.gif", layout: "full" },
      { src: "./assets/region-stal/region-6.gif", layout: "full" },
      { src: "./assets/region-stal/region-7.gif?v=20260418-2", layout: "full" },
      { src: "./assets/region-stal/region-8.gif", layout: "full" },
    ],
  },
  newmedia: {
    title: "Информация о: NEW MEDIA LAB",
    name: "NEW MEDIA LAB",
    company: "Рекламное агентство (стартап) / 2021-2023",
    intro:
      "Развивала студенческое рекламное агентство: выстроила визуальный язык, наладила процессы команды и участвовала в запуске кейс-чемпионата.",
    metrics:
      "400+ диджитал материалов → 100+ привлеченных участников → 20+ макетов на печать → 2 сайта → 1 гайдлайн",
    detailItems: [
      "Разработала логотип и визуальную систему агентства",
      "Создавала контент для соцсетей, оформила сайт и digital-материалы",
      "Инициировала и внедрила систему работы команды: роли, процессы, публикации, ответственность",
      "Координировала дизайнеров, копирайтеров и таргетологов",
      "Разработала айдентику кейс-чемпионата за одну ночь",
    ],
    thumb: "./assets/career-new-media-lab.svg",
    preview: "./assets/nml/nml-1.png",
    gallery: [
      { src: "./assets/nml/nml-1.png", layout: "full" },
      { src: "./assets/nml/nml-2.png", layout: "full" },
      { src: "./assets/nml/nml-3.gif", layout: "full" },
      { src: "./assets/nml/nml-4.png", layout: "pair" },
      { src: "./assets/nml/nml-5.png", layout: "pair" },
      { src: "./assets/nml/nml-6.png", layout: "full" },
      { src: "./assets/nml/nml-7.png", layout: "full" },
      { src: "./assets/nml/nml-8.png", layout: "full" },
      { src: "./assets/nml/nml-9.gif", layout: "full" },
      {
        type: "card",
        title: "Media Case Club",
        subtitle: "Айдентика за одну ночь",
        text: "Организация кейс-чемпионата и запуск визуальной системы проекта",
      },
      { src: "./assets/nml/mcc/mcc-1.png", layout: "full" },
      { src: "./assets/nml/mcc/mcc-2.png", layout: "full" },
      { src: "./assets/nml/mcc/mcc-3a.png", layout: "pair" },
      { src: "./assets/nml/mcc/mcc-3b.png", layout: "pair" },
      { src: "./assets/nml/mcc/mcc-4.png", layout: "full" },
      { src: "./assets/nml/mcc/mcc-5.png", layout: "full" },
      { src: "./assets/nml/mcc/mcc-6.jpg", layout: "full" },
      { src: "./assets/nml/mcc/mcc-7.gif", layout: "full" },
      { src: "./assets/nml/mcc/mcc-8.jpg", layout: "full" },
      { src: "./assets/nml/mcc/mcc-9.gif", layout: "full" },
    ],
  },
  fresh: {
    title: "Информация о: FRESH AUTO",
    name: "FRESH AUTO",
    company: "Автомобильный маркетплейс (топ-3)",
    intro:
      "Работала in-house дизайнером в крупной компании: вела визуальные задачи для бренда и подразделений, запускала материалы для внутренних и внешних коммуникаций.",
    metrics:
      "20+ макетов к печати → 20+ шаблонов презентаций → 1 бренд-проект подразделения → участие в ребрендинге коллаборации",
    detailItems: [
      "Самостоятельно вела проект по созданию системы шаблонов презентаций для всех отделов компании",
      "Разрабатывала печатные материалы: баннеры, POS-материалы, носители для офлайн-задач",
      "Создавала дизайн корпоративного мерча",
      "Разрабатывала визуалы для оклейки автомобилей",
      "Обновляла визуальную концепцию подразделения Fresh Service: коммуникация, носители, единый стиль",
      "Участвовала в доработке визуальных материалов для Fresh x Dubrovskiy Syndicate",
    ],
    thumb: "./assets/career-fresh-auto.svg",
    preview: "./assets/fresh/fresh-1.png",
    gallery: [
      { src: "./assets/fresh/fresh-1.png", layout: "full" },
      { src: "./assets/fresh/fresh-2.png", layout: "full" },
      { src: "./assets/fresh/fresh-3.gif", layout: "full" },
      { src: "./assets/fresh/fresh-4.png", layout: "full" },
      { src: "./assets/fresh/fresh-5.png", layout: "full" },
      { src: "./assets/fresh/fresh-6.png", layout: "full" },
      { src: "./assets/fresh/fresh-7.png", layout: "full" },
      { src: "./assets/fresh/fresh-8.png", layout: "full" },
      { src: "./assets/fresh/fresh-9.gif", layout: "full" },
    ],
  },
  rassvet: {
    title: "Information about: RASSVET.DIGITAL",
    name: "RASSVET.DIGITAL",
    company: "Agency Project",
    intro:
      "Работала над визуальной системой проекта и ключевыми креативами для digital-продвижения. Фокус был на узнаваемости и аккуратной типографике.",
    details: "Type: Art Direction > Visual Identity > Social Assets > Presentation Materials",
    thumb: "./assets/project-rassvet.svg",
    preview: "./assets/elements/kam-k-transparent.png",
  },
  sence: {
    title: "Информация о: SENCE",
    name: "SENCE",
    company: "Бутик-агентство полного цикла (стажировка) / 2023",
    intro:
      "Занималась оценкой SMM и дизайн-концепциями. Монтировала рилсы, делала дизайн для соцсетей. Один из рилсов, смонтированный мной, набрал 54к просмотров!",
    hideMetrics: true,
    hideDetails: true,
    thumb: "./assets/project-sence.svg",
    preview: "./assets/sence/sence-pair-1-left.png",
    gallery: [
      { src: "./assets/sence/sence-pair-1-left.png", layout: "pair" },
      { src: "./assets/sence/sence-pair-1-right.png", layout: "pair" },
      { src: "./assets/sence/sence-pair-2-left.png", layout: "pair" },
      { src: "./assets/sence/sence-pair-2-right.gif", layout: "pair" },
      { src: "./assets/sence/sence-pair-3-left.gif", layout: "pair" },
      { src: "./assets/sence/sence-pair-3-right.png", layout: "pair" },
      { src: "./assets/sence/sence-pair-4-left.png", layout: "pair" },
      { src: "./assets/sence/sence-pair-4-right.png", layout: "pair" },
      { src: "./assets/sence/sence-5.gif", layout: "full" },
    ],
  },
  bitrix: {
    title: "Информация о: BITRIX.24",
    name: "Bitrix.24",
    company: "CRM-система",
    intro:
      "Работала с презентациями для Bitrix24. Собрала визуальный нарратив через AI-персонажа, который сопровождал историю на каждом слайде. Разработано более 50+ версий пресонажа",
    hideMetrics: true,
    hideDetails: true,
    thumb: "./assets/project-bitrix.svg",
    preview: "./assets/bitrix/slider-1/1.png",
    sliders: [
      [
        "./assets/bitrix/slider-1/1.png",
        "./assets/bitrix/slider-1/2.png",
        "./assets/bitrix/slider-1/3.png",
        "./assets/bitrix/slider-1/4.png",
        "./assets/bitrix/slider-1/5.png",
        "./assets/bitrix/slider-1/6.png",
        "./assets/bitrix/slider-1/7.png",
        "./assets/bitrix/slider-1/8.png",
        "./assets/bitrix/slider-1/9.png",
        "./assets/bitrix/slider-1/10.png",
        "./assets/bitrix/slider-1/11.png",
        "./assets/bitrix/slider-1/12.png",
        "./assets/bitrix/slider-1/13.png",
        "./assets/bitrix/slider-1/14.png",
        "./assets/bitrix/slider-1/15.png",
        "./assets/bitrix/slider-1/16.png",
        "./assets/bitrix/slider-1/17.png",
      ],
      [
        "./assets/bitrix/slider-2/1.png",
        "./assets/bitrix/slider-2/2.png",
        "./assets/bitrix/slider-2/3.png",
        "./assets/bitrix/slider-2/4.png",
        "./assets/bitrix/slider-2/5.png",
        "./assets/bitrix/slider-2/6.png",
        "./assets/bitrix/slider-2/7.png",
        "./assets/bitrix/slider-2/8.png",
        "./assets/bitrix/slider-2/9.png",
        "./assets/bitrix/slider-2/10.png",
      ],
    ],
  },
  citydrive: {
    title: "Information about: СИТИДРАЙВ",
    name: "СИТИДРАЙВ",
    company: "Campaign Creative",
    intro:
      "Участвовала в создании рекламных визуалов для спецпроектов и сезонных кампаний. Прорабатывала адаптации под разные носители.",
    details: "Type: Campaign Visuals > Key Visual Adaptation > Performance Creatives",
    thumb: "./assets/project-citydrive.svg",
    preview: "./assets/elements/kam-a-transparent.png",
  },
  phoenix: {
    title: "Information about: ФЕНИКС ОНЛАЙН",
    name: "ФЕНИКС ОНЛАЙН",
    company: "Ecom Direction",
    intro:
      "Проектировала визуальную подачу для онлайн-направления: от промо-баннеров до графики для лендингов и коммуникаций с аудиторией.",
    details: "Type: E-commerce Visuals > Landing Assets > Ads Graphics > Creative Support",
    thumb: "./assets/project-phoenix.svg",
    preview: "./assets/elements/kam-k-transparent.png",
  },
  "edu-bbe": {
    title: "Information about: Bang Bang Education",
    name: "Bang Bang Education",
    company: "Образование",
    intro: "Курс по визуальным коммуникациям и арт-дирекшену. Прокачала системность в работе с идеей, композицией и презентацией решений.",
    details: "Type: Education > Design Systems > Art Direction > Portfolio Practice",
    thumb: "./assets/edu-bbe.svg",
    preview: "./assets/edu-bbe.svg",
  },
  "edu-bitrix": {
    title: "Information about: Bitrix.24",
    name: "Bitrix.24",
    company: "Образовательный модуль",
    intro: "Практика по продуктовым и бизнес-процессам, работа с кейсами и структурированием задач в команде.",
    details: "Type: Education > Product Thinking > Team Workflow > Case Studies",
    thumb: "./assets/edu-bitrix.svg",
    preview: "./assets/edu-bitrix.svg",
  },
  "edu-mads": {
    title: "Information about: Mads",
    name: "Mads",
    company: "Курс",
    intro: "Интенсив по креативному мышлению, рекламным форматам и нестандартной подаче идей.",
    details: "Type: Education > Creative Strategy > Ad Thinking > Brand Communication",
    thumb: "./assets/edu-mads.svg",
    preview: "./assets/edu-mads.svg",
  },
  "edu-egor": {
    title: "Information about: Егор Панковский",
    name: "Егор Панковский",
    company: "Наставничество",
    intro: "Работа с реальными задачами и персональным фидбеком по визуальному языку и портфолио.",
    details: "Type: Mentorship > Portfolio Review > Visual Direction",
    thumb: "./assets/edu-egor.svg",
    preview: "./assets/edu-egor.svg",
  },
  "edu-tatiana": {
    title: "Information about: Татьяна Щелокова",
    name: "Татьяна Щелокова",
    company: "Наставничество",
    intro: "Усилила навык построения цельных визуальных концепций и подачи в проектных кейсах.",
    details: "Type: Mentorship > Concept Development > Presentation Skills",
    thumb: "./assets/edu-tatiana.svg",
    preview: "./assets/edu-tatiana.svg",
  },
  "edu-ohdschool": {
    title: "Information about: Ohdschool",
    name: "Ohdschool",
    company: "Обучение",
    intro: "Практические задания по визуальному сторителлингу, композиции и типографике для digital-проектов.",
    details: "Type: Education > Visual Storytelling > Typography > Composition",
    thumb: "./assets/edu-ohdschool.svg",
    preview: "./assets/edu-ohdschool.svg",
  },
  "edu-cherkasov": {
    title: "Information about: cherkasov.co",
    name: "cherkasov.co",
    company: "Курс",
    intro: "Фокус на визуальной простоте и точности, работа над выразительным и современным стилем.",
    details: "Type: Education > Visual Craft > Branding > UI Aesthetics",
    thumb: "./assets/edu-cherkasov.svg",
    preview: "./assets/edu-cherkasov.svg",
  },
  "edu-mikhail": {
    title: "Information about: Михаил Гребенюк",
    name: "Михаил Гребенюк",
    company: "Интенсив",
    intro: "Изучение бизнес-контекста проектов и навыка превращать сложную информацию в понятный визуал.",
    details: "Type: Education > Business Thinking > Communication > Design Decisions",
    thumb: "./assets/edu-mikhail.svg",
    preview: "./assets/edu-mikhail.svg",
  },
  "edu-liza": {
    title: "Information about: Лиза Ланглиб",
    name: "Лиза Ланглиб",
    company: "Практика",
    intro: "Работа с персональными задачами, фидбек по визуальным решениям и позиционированию кейсов.",
    details: "Type: Mentorship > Personal Brand > Portfolio Structuring",
    thumb: "./assets/edu-liza.svg",
    preview: "./assets/edu-liza.svg",
  },
  "project-reklama": {
    title: "Information about: Реклама / конкурс",
    name: "Реклама / конкурс",
    company: "Достижение",
    intro: "Конкурсный проект в рекламной категории с акцентом на идею, креатив и финальную презентацию.",
    details: "Type: Competition > Creative Concept > Pitch > Visual Communication",
    thumb: "./assets/project-reklama.svg",
    preview: "./assets/project-reklama.svg",
  },
  "project-mediacase": {
    title: "Информация о: MEDIA CASE CLUB / КОНКУРС",
    name: "MEDIA CASE CLUB / КОНКУРС",
    company: "Для 2050.lab — национального центра промышленного дизайна и инноваций.",
    intro:
      "Собрали стратегию digital-присутствия для 2050.lab: от глубокой аналитики рынка до визуальной системы контента и креативных механик продвижения. Проект занял 2 место.",
    hideMetrics: true,
    hideDetails: true,
    thumb: "./assets/project-media-case.svg",
    preview: "./assets/mcc-contest/mcc-1.gif",
    gallery: [
      { src: "./assets/mcc-contest/mcc-1.gif", layout: "full" },
      { type: "slider", group: 0 },
      { src: "./assets/mcc-contest/mcc-pair-3-left.png", layout: "pair" },
      { src: "./assets/mcc-contest/mcc-pair-3-right.png", layout: "pair" },
      { src: "./assets/mcc-contest/mcc-4.png", layout: "full" },
      { src: "./assets/mcc-contest/mcc-pair-5-left.jpg", layout: "pair" },
      { src: "./assets/mcc-contest/mcc-pair-5-right.jpg", layout: "pair" },
      { src: "./assets/mcc-contest/mcc-6.gif", layout: "full" },
    ],
    sliders: [Array.from({ length: 43 }, (_, i) => `./assets/mcc-contest/slider-2/${i + 1}.png`)],
  },
  "project-okei": {
    title: "Information about: О’кей",
    name: "О’кей",
    company: "Проект",
    intro: "Коммуникационные креативы и визуальные адаптации под рекламные и digital-каналы.",
    details: "Type: Retail Campaign > Key Visual > Digital Adaptation",
    thumb: "./assets/project-okei.svg",
    preview: "./assets/project-okei.svg",
  },
  "project-telegram": {
    title: "Information about: Telegram",
    name: "Telegram",
    company: "Площадка",
    intro: "Серия материалов и концептов для публикаций: дизайн карточек, визуальные рубрики и контент-подача.",
    details: "Type: Social Content > Channel Design > Visual Templates",
    thumb: "./assets/project-telegram.svg",
    preview: "./assets/project-telegram.svg",
  },
  "project-cv": {
    title: "Information about: CV",
    name: "CV",
    company: "Личный проект",
    intro: "Сборка визуального резюме в формате интерактивной mindmap-страницы с акцентом на опыт и достижения.",
    details: "Type: Personal Project > Web Design > Interaction > Portfolio",
    thumb: "./assets/project-cv.svg",
    preview: "./assets/project-cv.svg",
  },
  "project-eco": {
    title: "Information about: ЭКО БРЕЛОК",
    name: "ЭКО БРЕЛОК",
    company: "Авторский элемент",
    intro:
      "Символ про осознанность и переработку как часть личной визуальной системы. Использую как эмоциональный маркер в карте проектов.",
    details: "Type: Personal Symbol > Visual Metaphor > Sustainable Theme > Story Element",
    thumb: "./assets/project-eco.png",
    preview: "./assets/project-eco.png",
  },
};

function bringProjectWindowToFront(windowElement) {
  projectWindowZ += 1;
  windowElement.style.zIndex = String(projectWindowZ);
}

function removeProjectWindowAfterAnimation(windowElement, callback) {
  if (windowElement.classList.contains("is-closing")) {
    return;
  }

  windowElement.classList.add("is-closing");
  let isFinalized = false;

  const finalize = () => {
    if (isFinalized) {
      return;
    }
    isFinalized = true;
    windowElement.removeEventListener("transitionend", onTransitionEnd);
    windowElement.removeEventListener("animationend", onAnimationEnd);
    if (windowElement.isConnected) {
      windowElement.remove();
    }
    if (callback) {
      callback();
    }
  };

  const onTransitionEnd = (event) => {
    if (event.target !== windowElement) {
      return;
    }
    finalize();
  };

  const onAnimationEnd = (event) => {
    if (event.target !== windowElement) {
      return;
    }
    finalize();
  };

  windowElement.addEventListener("transitionend", onTransitionEnd);
  windowElement.addEventListener("animationend", onAnimationEnd);
  window.setTimeout(finalize, 320);
}

function closeProjectWindow(windowElement) {
  removeProjectWindowAfterAnimation(windowElement, () => {
    const hasOpenWindows = Boolean(projectModal?.querySelector(".project-window:not(.project-window-template)"));
    if (!hasOpenWindows) {
      projectModal?.classList.remove("is-open");
      projectModal?.setAttribute("aria-hidden", "true");
    }

    const activeElement = document.activeElement;
    if (activeElement instanceof HTMLElement) {
      activeElement.blur();
    }
    clearDesktopIconFocus();
  });
}

function closeAllProjectWindows() {
  const openWindows = projectModal?.querySelectorAll(".project-window:not(.project-window-template)");
  if (!openWindows?.length) {
    return;
  }

  let pending = openWindows.length;
  openWindows.forEach((windowElement) => {
    removeProjectWindowAfterAnimation(windowElement, () => {
      pending -= 1;
      if (pending > 0) {
        return;
      }

      projectModal?.classList.remove("is-open");
      projectModal?.setAttribute("aria-hidden", "true");

      const activeElement = document.activeElement;
      if (activeElement instanceof HTMLElement) {
        activeElement.blur();
      }
      clearDesktopIconFocus();
    });
  });
}

function positionProjectWindowAt(windowElement, clientX, clientY) {
  const rect = windowElement.getBoundingClientRect();
  const margin = 20;
  const minX = margin + rect.width / 2;
  const maxX = window.innerWidth - margin - rect.width / 2;
  const minY = margin + rect.height / 2;
  const maxY = window.innerHeight - margin - rect.height / 2;

  const clampedX = Math.max(minX, Math.min(maxX, clientX));
  const clampedY = Math.max(minY, Math.min(maxY, clientY));
  windowElement.style.setProperty("--modal-left", `${clampedX}px`);
  windowElement.style.setProperty("--modal-top", `${clampedY}px`);
}

function positionProjectWindowRandomly(windowElement) {
  const rect = windowElement.getBoundingClientRect();
  const margin = 20;
  const minX = margin + rect.width / 2;
  const maxX = window.innerWidth - margin - rect.width / 2;
  const minY = margin + rect.height / 2;
  const maxY = window.innerHeight - margin - rect.height / 2;
  const fallbackX = window.innerWidth / 2;
  const fallbackY = window.innerHeight / 2;

  const randomX = maxX > minX ? minX + Math.random() * (maxX - minX) : fallbackX;
  const randomY = maxY > minY ? minY + Math.random() * (maxY - minY) : fallbackY;
  positionProjectWindowAt(windowElement, randomX, randomY);
}

function enableProjectWindowDrag(windowElement) {
  const closeButton = windowElement.querySelector(".project-window-close");
  windowElement.addEventListener("pointerdown", (event) => {
    if (event.button !== 0) {
      return;
    }

    if (event.target instanceof HTMLElement && event.target.closest(".project-slider")) {
      return;
    }

    if (closeButton && event.target instanceof HTMLElement && event.target.closest(".project-window-close")) {
      return;
    }

    const rect = windowElement.getBoundingClientRect();
    const startCenterX = rect.left + rect.width / 2;
    const startCenterY = rect.top + rect.height / 2;
    const startX = event.clientX;
    const startY = event.clientY;
    let dragActive = false;
    let holdTimer = null;

    const startDrag = () => {
      if (dragActive) {
        return;
      }
      dragActive = true;
      event.preventDefault();
      bringProjectWindowToFront(windowElement);
      windowElement.classList.add("is-dragging");
      windowElement.setPointerCapture(event.pointerId);
    };

    const handleMove = (moveEvent) => {
      if (!dragActive && event.pointerType === "touch") {
        if (Math.abs(moveEvent.clientX - startX) > 6 || Math.abs(moveEvent.clientY - startY) > 6) {
          if (holdTimer !== null) {
            window.clearTimeout(holdTimer);
            holdTimer = null;
          }
        }
        return;
      }

      if (!dragActive) {
        startDrag();
      }

      const nextX = startCenterX + (moveEvent.clientX - startX);
      const nextY = startCenterY + (moveEvent.clientY - startY);
      positionProjectWindowAt(windowElement, nextX, nextY);
    };

    const handleUp = () => {
      if (holdTimer !== null) {
        window.clearTimeout(holdTimer);
        holdTimer = null;
      }
      windowElement.classList.remove("is-dragging");
      windowElement.removeEventListener("pointermove", handleMove);
      windowElement.removeEventListener("pointerup", handleUp);
      windowElement.removeEventListener("pointercancel", handleUp);
    };

    if (event.pointerType === "touch") {
      holdTimer = window.setTimeout(() => {
        holdTimer = null;
        startDrag();
      }, 140);
    } else {
      startDrag();
    }

    windowElement.addEventListener("pointermove", handleMove);
    windowElement.addEventListener("pointerup", handleUp);
    windowElement.addEventListener("pointercancel", handleUp);
  });
}

function openProjectModal(projectId) {
  if (!projectModal || !projectWindowTemplate) {
    return;
  }

  const data = projectContent[projectId];
  if (!data) {
    return;
  }

  const windowElement = projectWindowTemplate.cloneNode(true);
  windowElement.classList.remove("project-window-template");
  windowElement.classList.add("is-opening");
  windowElement.classList.add(`project-${projectId}`);
  const title = windowElement.querySelector(".project-window-title");
  const name = windowElement.querySelector(".js-project-name");
  const company = windowElement.querySelector(".js-project-company");
  const intro = windowElement.querySelector(".js-project-intro");
  const metrics = windowElement.querySelector(".js-project-metrics");
  const pointsList = windowElement.querySelector(".js-project-points");
  const gallery = windowElement.querySelector(".js-project-gallery");
  const thumb = windowElement.querySelector(".js-project-thumb");
  const closeButton = windowElement.querySelector(".project-window-close");
  const metricsSection = windowElement.querySelector(".project-section-metrics");
  const detailsSection = windowElement.querySelector(".project-section-details");

  const localizedTitle = (data.title || "").replace(/^Information about:/, "Информация о:");
  const localizedDetails = (data.details || "").replace(/^Type:/, "Тип:");
  const metricsText = data.metrics || localizedDetails || "";
  const showMetrics = !data.hideMetrics && Boolean(metricsText);
  const showDetails = !data.hideDetails;
  const detailItems = Array.isArray(data.detailItems) ? data.detailItems : [];
  const galleryItems = Array.isArray(data.gallery) && data.gallery.length > 0
    ? data.gallery
    : (data.preview ? [data.preview] : []);
  const sliderItems = Array.isArray(data.slider) && data.slider.length > 0 ? data.slider : [];
  const sliderGroups = Array.isArray(data.sliders)
    ? data.sliders.filter((group) => Array.isArray(group) && group.length > 0)
    : (sliderItems.length > 0 ? [sliderItems] : []);
  const hasExplicitGallery = Array.isArray(data.gallery) && data.gallery.length > 0;
  const shouldRenderGalleryWithSliders = Boolean(data.renderGalleryWithSliders);

  if (title) title.textContent = localizedTitle || data.title;
  if (name) name.textContent = data.name;
  if (company) company.textContent = data.company;
  if (intro) intro.textContent = data.intro;
  if (metricsSection) metricsSection.hidden = !showMetrics;
  if (metrics) metrics.textContent = showMetrics ? metricsText : "";
  if (detailsSection) detailsSection.hidden = !showDetails;
  if (thumb) thumb.setAttribute("src", data.thumb);
  if (pointsList && showDetails) {
    pointsList.innerHTML = "";
    if (detailItems.length > 0) {
      detailItems.forEach((item) => {
        const cleanItem = String(item).trim().replace(/[.!?…]+$/u, "");
        const li = document.createElement("li");
        li.className = "project-details-item";
        li.textContent = cleanItem;
        pointsList.appendChild(li);
      });
    } else {
      const li = document.createElement("li");
      li.className = "project-details-item";
      li.textContent = "Подробное описание проекта скоро будет добавлено";
      pointsList.appendChild(li);
    }
  }
  const isGifFile = (src) => /\.(gif)(\?.*)?$/i.test(src);
  const reorderGalleryItems = (items) => {
    const ordered = [];
    const deferredGifs = [];
    let photoParity = 0; // 0 = row closed, 1 = one photo in row

    items.forEach((src) => {
      if (isGifFile(src)) {
        if (photoParity === 1) {
          deferredGifs.push(src);
        } else {
          ordered.push(src);
        }
        return;
      }

      ordered.push(src);
      photoParity = (photoParity + 1) % 2;

      if (photoParity === 0 && deferredGifs.length > 0) {
        ordered.push(...deferredGifs);
        deferredGifs.length = 0;
      }
    });

    if (deferredGifs.length > 0) {
      ordered.push(...deferredGifs);
    }

    return ordered;
  };

  if (gallery) {
    gallery.innerHTML = "";
    const buildSlider = (slides, sliderOrdinal = 1) => {
      const slider = document.createElement("section");
      slider.className = "project-slider";
      slider.setAttribute("aria-label", "Слайдер презентации");

      const track = document.createElement("div");
      track.className = "project-slider-track";

      const totalSlides = slides.length;
      const trackItems =
        totalSlides > 1
          ? [slides[totalSlides - 1], ...slides, slides[0]]
          : [...slides];

      trackItems.forEach((src, idx) => {
        const slide = document.createElement("figure");
        slide.className = "project-slider-slide";
        const img = document.createElement("img");
        img.className = "project-slider-image";
        img.src = src;
        img.alt = `${data.name} — слайдер ${sliderOrdinal}, слайд ${idx + 1}`;
        img.loading = "lazy";
        slide.appendChild(img);
        track.appendChild(slide);
      });

      const prevButton = document.createElement("button");
      prevButton.type = "button";
      prevButton.className = "project-slider-button is-prev";
      prevButton.setAttribute("aria-label", "Предыдущий слайд");
      prevButton.textContent = "‹";

      const nextButton = document.createElement("button");
      nextButton.type = "button";
      nextButton.className = "project-slider-button is-next";
      nextButton.setAttribute("aria-label", "Следующий слайд");
      nextButton.textContent = "›";

      let activeIndex = totalSlides > 1 ? 1 : 0;
      let isAnimating = false;
      let wheelBuffer = 0;
      let wheelUnlockTimer = null;
      let wheelLocked = false;
      let pointerStartX = 0;
      let pointerIsDown = false;

      const setTrackPosition = (animate = true) => {
        if (animate) {
          track.style.transition = "";
        } else {
          track.style.transition = "none";
        }
        track.style.transform = `translateX(-${activeIndex * 100}%)`;
        if (!animate) {
          track.getBoundingClientRect();
          track.style.transition = "";
        }
      };

      const stepBy = (direction) => {
        if (totalSlides <= 1 || isAnimating) {
          return false;
        }
        isAnimating = true;
        activeIndex += direction;
        setTrackPosition(true);
        return true;
      };

      prevButton.addEventListener("click", () => stepBy(-1));
      nextButton.addEventListener("click", () => stepBy(1));

      track.addEventListener("transitionend", (event) => {
        if (event.target !== track || event.propertyName !== "transform") {
          return;
        }
        if (totalSlides <= 1) {
          isAnimating = false;
          return;
        }

        if (activeIndex === 0) {
          activeIndex = totalSlides;
          setTrackPosition(false);
        } else if (activeIndex === totalSlides + 1) {
          activeIndex = 1;
          setTrackPosition(false);
        }
        isAnimating = false;
      });

      slider.addEventListener(
        "wheel",
        (event) => {
          const horizontalIntent =
            Math.abs(event.deltaX) > 8 &&
            Math.abs(event.deltaX) >= Math.abs(event.deltaY) * 0.35;

          if (!horizontalIntent) {
            return;
          }

          event.preventDefault();
          if (wheelLocked) {
            return;
          }
          wheelBuffer += event.deltaX;
          if (Math.abs(wheelBuffer) < 55) {
            return;
          }
          let moved = false;
          if (wheelBuffer > 0) {
            moved = stepBy(1);
          } else {
            moved = stepBy(-1);
          }
          wheelBuffer = 0;
          if (moved) {
            wheelLocked = true;
            if (wheelUnlockTimer) {
              window.clearTimeout(wheelUnlockTimer);
            }
            wheelUnlockTimer = window.setTimeout(() => {
              wheelLocked = false;
              wheelBuffer = 0;
            }, 420);
          }
        },
        { passive: false }
      );

      slider.addEventListener("pointerleave", () => {
        wheelBuffer = 0;
      });

      slider.addEventListener("pointerdown", (event) => {
        pointerIsDown = true;
        pointerStartX = event.clientX;
      });

      slider.addEventListener("pointerup", (event) => {
        if (!pointerIsDown) {
          return;
        }
        pointerIsDown = false;
        const diffX = event.clientX - pointerStartX;
        if (Math.abs(diffX) < 40) {
          return;
        }
        if (diffX < 0) {
          stepBy(1);
        } else {
          stepBy(-1);
        }
      });

      slider.addEventListener("pointercancel", () => {
        pointerIsDown = false;
      });

      slider.append(track, prevButton, nextButton);
      setTrackPosition(false);
      return slider;
    };

    if (hasExplicitGallery || sliderGroups.length === 0 || shouldRenderGalleryWithSliders) {
      const normalizedItems = galleryItems.map((item) =>
        typeof item === "string" ? { src: item } : item
      );
      const hasCustomLayouts = normalizedItems.some((item) => item.layout);
      const displayItems = hasCustomLayouts
        ? normalizedItems
        : reorderGalleryItems(normalizedItems.map((item) => item.src)).map((src) => ({ src }));

      displayItems.forEach((item, index) => {
        if (item.type === "card") {
          const card = document.createElement("article");
          card.className = "project-gallery-note";
          const cardTitle = document.createElement("h4");
          cardTitle.className = "project-gallery-note-title";
          cardTitle.textContent = item.title || "Проект";
          const cardSubtitle = document.createElement("p");
          cardSubtitle.className = "project-gallery-note-subtitle";
          cardSubtitle.textContent = item.subtitle || "";
          const cardText = document.createElement("p");
          cardText.className = "project-gallery-note-text";
          cardText.textContent = item.text || "";
          card.append(cardTitle, cardSubtitle, cardText);
          gallery.appendChild(card);
          return;
        }
        if (item.type === "slider") {
          const sliderIndex = Number.isInteger(item.group) ? item.group : 0;
          const sliderGroup = sliderGroups[sliderIndex];
          if (sliderGroup && sliderGroup.length > 0) {
            gallery.appendChild(buildSlider(sliderGroup, sliderIndex + 1));
          }
          return;
        }

        const src = item.src;
        const img = document.createElement("img");
        img.className = "project-gallery-image";
        if (isGifFile(src)) {
          img.classList.add("is-gif");
        }
        if (index === 0 || item.layout === "full") {
          img.classList.add("is-featured");
        }
        if (src.includes("r7-gif-04.gif")) {
          img.classList.add("is-portrait");
        }
        if (item.layout === "pair") {
          img.classList.add("is-pair");
        }
        img.src = src;
        img.alt = `${data.name} — фото ${index + 1}`;
        img.loading = "lazy";
        gallery.appendChild(img);
      });
    }

    if (sliderGroups.length > 0 && (!hasExplicitGallery || shouldRenderGalleryWithSliders)) {
      sliderGroups.forEach((group, groupIndex) => {
        gallery.appendChild(buildSlider(group, groupIndex + 1));
      });
    }
  }
  if (closeButton) {
    closeButton.addEventListener("click", () => closeProjectWindow(windowElement));
  }

  windowElement.addEventListener("pointerdown", () => {
    bringProjectWindowToFront(windowElement);
  });

  projectModal.appendChild(windowElement);
  enableProjectWindowDrag(windowElement);
  bringProjectWindowToFront(windowElement);
  projectModal.classList.add("is-open");
  projectModal.setAttribute("aria-hidden", "false");

  window.requestAnimationFrame(() => {
    positionProjectWindowRandomly(windowElement);
    const handleOpenAnimationEnd = (event) => {
      if (event.target !== windowElement) {
        return;
      }
      windowElement.classList.remove("is-opening");
      windowElement.removeEventListener("animationend", handleOpenAnimationEnd);
    };
    windowElement.addEventListener("animationend", handleOpenAnimationEnd);
  });
}

document.addEventListener("pointerdown", (event) => {
  const openWindows = projectModal?.querySelectorAll(".project-window:not(.project-window-template)");
  if (!openWindows?.length) {
    return;
  }

  const target = event.target;
  if (!(target instanceof HTMLElement)) {
    return;
  }

  if (target.closest(".project-window")) {
    return;
  }

  if (target.closest(".desktop-icon")) {
    return;
  }

  closeAllProjectWindows();
});

if (heroCluster) {
  const maxShift = 10;
  const careerIcons = heroCluster.querySelectorAll(".desktop-icon");
  const magneticRadius = 150;
  const magneticPull = 10;

  // Reset stored drag offsets after layout updates so icons start in their CSS positions.
  careerIcons.forEach((icon) => {
    icon.style.setProperty("--drag-x", "0px");
    icon.style.setProperty("--drag-y", "0px");
    delete icon.dataset.dragX;
    delete icon.dataset.dragY;
    delete icon.dataset.dragMoved;
  });

  function updateShift(event) {
    const rect = heroCluster.getBoundingClientRect();
    const relativeX = (event.clientX - rect.left) / rect.width - 0.5;
    const relativeY = (event.clientY - rect.top) / rect.height - 0.5;

    heroCluster.style.setProperty("--p-x", `${relativeX * maxShift}px`);
    heroCluster.style.setProperty("--p-y", `${relativeY * maxShift}px`);
  }

  function resetShift() {
    heroCluster.style.setProperty("--p-x", "0px");
    heroCluster.style.setProperty("--p-y", "0px");
  }

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function resetMagnet(icon) {
    icon.style.setProperty("--mx", "0px");
    icon.style.setProperty("--my", "0px");
  }

  function updateMagnet(icon, event) {
    if (icon.classList.contains("is-dragging")) {
      return;
    }

    const rect = icon.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = event.clientX - centerX;
    const dy = event.clientY - centerY;
    const distance = Math.hypot(dx, dy);

    if (distance > magneticRadius) {
      resetMagnet(icon);
      return;
    }

    const strength = 1 - distance / magneticRadius;
    const moveX = clamp((dx / magneticRadius) * magneticPull * strength * 3.2, -magneticPull, magneticPull);
    const moveY = clamp((dy / magneticRadius) * magneticPull * strength * 3.2, -magneticPull, magneticPull);
    icon.style.setProperty("--mx", `${moveX.toFixed(2)}px`);
    icon.style.setProperty("--my", `${moveY.toFixed(2)}px`);
  }

  heroCluster.addEventListener("pointermove", updateShift);
  heroCluster.addEventListener("pointerleave", resetShift);
  heroCluster.addEventListener("blur", resetShift);

  careerIcons.forEach((icon) => {
    // Disable keyboard focus on icons to avoid persistent focus ring after ESC.
    icon.setAttribute("tabindex", "-1");

    icon.addEventListener("pointerdown", (event) => {
      if (event.button !== 0) {
        return;
      }

      const startX = event.clientX;
      const startY = event.clientY;
      const baseX = Number.parseFloat(icon.dataset.dragX || "0");
      const baseY = Number.parseFloat(icon.dataset.dragY || "0");
      let hasMoved = false;

      icon.classList.add("is-dragging");
      icon.setPointerCapture(event.pointerId);

      const handleMove = (moveEvent) => {
        const offsetX = baseX + (moveEvent.clientX - startX);
        const offsetY = baseY + (moveEvent.clientY - startY);

        if (Math.abs(moveEvent.clientX - startX) > 3 || Math.abs(moveEvent.clientY - startY) > 3) {
          hasMoved = true;
        }

        icon.dataset.dragX = offsetX.toFixed(2);
        icon.dataset.dragY = offsetY.toFixed(2);
        icon.style.setProperty("--drag-x", `${offsetX.toFixed(2)}px`);
        icon.style.setProperty("--drag-y", `${offsetY.toFixed(2)}px`);
      };

      const handleUp = () => {
        icon.classList.remove("is-dragging");
        icon.removeEventListener("pointermove", handleMove);
        icon.removeEventListener("pointerup", handleUp);
        icon.removeEventListener("pointercancel", handleUp);

        if (hasMoved) {
          icon.dataset.dragMoved = "1";
          window.setTimeout(() => {
            delete icon.dataset.dragMoved;
          }, 180);
        }
      };

      icon.addEventListener("pointermove", handleMove);
      icon.addEventListener("pointerup", handleUp);
      icon.addEventListener("pointercancel", handleUp);
    });

    icon.addEventListener("pointermove", (event) => updateMagnet(icon, event));
    icon.addEventListener("pointerenter", () => {
      icon.classList.add("is-hovered");
    });
    icon.addEventListener("pointerleave", () => resetMagnet(icon));
    icon.addEventListener("pointerleave", () => {
      icon.classList.remove("is-hovered");
    });
    icon.addEventListener("pointercancel", () => resetMagnet(icon));
    icon.addEventListener("pointercancel", () => {
      icon.classList.remove("is-hovered");
    });
    icon.addEventListener("click", () => {
      if (icon.dataset.dragMoved === "1") {
        delete icon.dataset.dragMoved;
        return;
      }

      const projectId = icon.dataset.project;
      if (projectId === "project-telegram") {
        icon.classList.remove("is-hovered");
        resetMagnet(icon);
        window.open("https://t.me/kamillamukhametshina", "_blank", "noopener,noreferrer");
        return;
      }

      if (projectId) {
        openProjectModal(projectId);
      }
    });
    icon.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") {
        return;
      }

      event.preventDefault();
      const projectId = icon.dataset.project;
      if (projectId === "project-telegram") {
        icon.classList.remove("is-hovered");
        resetMagnet(icon);
        window.open("https://t.me/kamillamukhametshina", "_blank", "noopener,noreferrer");
        return;
      }

      if (projectId) {
        openProjectModal(projectId);
      }
    });
  });

  window.addEventListener("blur", () => {
    careerIcons.forEach((icon) => {
      resetMagnet(icon);
      icon.classList.remove("is-hovered");
    });
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    clearDesktopIconFocus();

    const openWindows = projectModal?.querySelectorAll(".project-window:not(.project-window-template)");
    if (!openWindows?.length) {
      return;
    }

    let topWindow = null;
    let maxZ = -Infinity;
    openWindows.forEach((windowElement) => {
      const z = Number.parseInt(window.getComputedStyle(windowElement).zIndex || "0", 10);
      if (z >= maxZ) {
        maxZ = z;
        topWindow = windowElement;
      }
    });

    if (topWindow) {
      closeProjectWindow(topWindow);
      window.setTimeout(() => {
        clearDesktopIconFocus();
      }, 0);
    }
  }
});

window.addEventListener("resize", () => {
  const openWindows = projectModal?.querySelectorAll(".project-window:not(.project-window-template)");
  openWindows?.forEach((windowElement) => {
    const rect = windowElement.getBoundingClientRect();
    positionProjectWindowAt(windowElement, rect.left + rect.width / 2, rect.top + rect.height / 2);
  });
});
