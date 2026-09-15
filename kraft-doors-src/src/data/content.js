// Демо-контент для портфолио. Номер и фото — плейсхолдеры, замените перед реальным запуском.

export const WHATSAPP_NUMBER = "996700000000"; // +996 700 000 000 (демо)
export const WHATSAPP_DEFAULT_TEXT = "Здравствуйте! Хочу узнать стоимость дверей KRAFT.";

export function waLink(text = WHATSAPP_DEFAULT_TEXT) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

const unsplash = (id, w = 1600, q = 75) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export const nav = [
  { label: "Входные", href: "/vhodnye" },
  { label: "Межкомнатные", href: "/mezhkomnatnye" },
  { label: "Скрытые", href: "/skrytye" },
  { label: "Фурнитура", href: "/furnitura" },
  { label: "О нас", href: "/o-nas" },
  { label: "Контакты", href: "/kontakty" },
];

export const CONTACTS_ROUTE = "/kontakty";

export const slides = [
  {
    key: "entrance",
    route: "/vhodnye",
    nav: "Входные",
    kicker: "KRAFT · ВХОДНЫЕ",
    title: "Входные",
    tagline: "стальной каркас — тёплый периметр",
    desc: "Многослойное полотно с термомостом и скрытыми петлями. Класс защиты выше среднего, шумоизоляция и герметичный контур для зим Бишкека.",
    cta: "Смотреть каталог",
    video: "videos/entrance.mp4?v=2",
    poster: "videos/entrance-poster.jpg",
    detailVideo: "videos/entrance-detail.mp4",
    detailPoster: "videos/entrance-detail-poster.jpg",
    detailCaption: "Металлический кант и заклёпки — деталь, которая держит форму десятилетиями.",
    products: [
      {
        name: "Форт",
        desc: "Стальной каркас 2 мм, класс защиты выше среднего, три точки запирания.",
        price: "от 45 000 сом",
        image: unsplash("photo-1746966386827-6930da9346b6", 1000),
      },
      {
        name: "Гранд",
        desc: "Двустворчатая входная группа, скрытые петли, панорамное остекление.",
        price: "от 68 000 сом",
        image: unsplash("photo-1760385737098-0b555a75b2ba", 1000),
      },
      {
        name: "Минимал",
        desc: "Плоское полотно без наличников, скрытая коробка, финиш под покраску.",
        price: "от 39 000 сом",
        image: unsplash("photo-1766230091872-b54df8924d3e", 1000),
      },
      {
        name: "Резиденс",
        desc: "Авторская фурнитура, инкрустация шпоном, индивидуальный чертёж.",
        price: "от 92 000 сом",
        image: unsplash("photo-1758901810612-55ba2c317a53", 1000),
      },
    ],
  },
  {
    key: "interior",
    route: "/mezhkomnatnye",
    nav: "Межкомнатные",
    kicker: "KRAFT · МЕЖКОМНАТНЫЕ",
    title: "Межкомнатные",
    tagline: "тишина между комнатами",
    desc: "Массив и шпон ценных пород — от лаконичных филёнок до высоких порталов в пол. Каждое полотно подбирается в тон существующему полу.",
    cta: "Смотреть каталог",
    video: "videos/interior.mp4?v=2",
    poster: "videos/interior-poster.jpg",
    detailVideo: "videos/interior-detail.mp4",
    detailPoster: "videos/interior-detail-poster.jpg",
    detailCaption: "Резной массив крупным планом — фактура, которую видно только вблизи.",
    products: [
      {
        name: "Скай",
        desc: "Высокий портал в пол, скрытая коробка, минималистичная кромка.",
        price: "от 24 000 сом",
        image: unsplash("photo-1567092784576-ebca18b69af5", 1000),
      },
      {
        name: "Классик",
        desc: "Филёнчатое полотно, массив дуба, патинирование на выбор.",
        price: "от 18 500 сом",
        image: unsplash("photo-1657639744480-769229dd9c6e", 1000),
      },
      {
        name: "Лофт",
        desc: "Металлический каркас со вставками рифлёного стекла.",
        price: "от 27 000 сом",
        image: unsplash("photo-1749788873243-65087660f55c", 1000),
      },
      {
        name: "Эко",
        desc: "Шпонированное полотно, влагостойкий контур для кухни и санузла.",
        price: "от 15 900 сом",
        image: unsplash("photo-1577361066824-c87dbb8df112", 1000),
      },
    ],
  },
  {
    key: "hidden",
    route: "/skrytye",
    nav: "Скрытые",
    kicker: "KRAFT · СКРЫТЫЕ",
    title: "Скрытые",
    tagline: "дверь, которой не видно",
    desc: "Полотно заподлицо со стеной, без наличников. Для интерьеров, где важна одна цельная плоскость без единого шва.",
    cta: "Смотреть каталог",
    video: "videos/hidden.mp4?v=2",
    poster: "videos/hidden-poster.jpg",
    detailVideo: "videos/hidden-detail.mp4",
    detailPoster: "videos/hidden-detail-poster.jpg",
    detailCaption: "Ни одного наличника — коридор читается как цельная плоскость.",
    products: [
      {
        name: "Флэш",
        desc: "Полотно заподлицо со стеной, финиш под покраску в цвет стены.",
        price: "от 32 000 сом",
        image: unsplash("photo-1723470918749-e42f89207f5c", 1000),
      },
      {
        name: "Портал",
        desc: "Увеличенный проём без наличников, скрытые петли и доводчик.",
        price: "от 36 500 сом",
        image: unsplash("photo-1647960563439-0160d88ca2b7", 1000),
      },
      {
        name: "Зеркало",
        desc: "Полотно с зеркальной вставкой в тонкой алюминиевой раме.",
        price: "от 41 000 сом",
        image: unsplash("photo-1787552541486-f8fa7adbd15a", 1000),
      },
    ],
  },
  {
    key: "hardware",
    route: "/furnitura",
    nav: "Фурнитура",
    kicker: "KRAFT · ФУРНИТУРА",
    title: "Фурнитура",
    tagline: "детали, которые не подводят",
    desc: "Петли, доводчики и ручки от проверенных европейских производителей. Фурнитура, рассчитанная на десятилетия ежедневного использования.",
    cta: "Смотреть подбор",
    video: "videos/hardware.mp4",
    poster: "videos/hardware-poster.jpg",
    detailVideo: "videos/hardware-detail.mp4",
    detailPoster: "videos/hardware-detail-poster.jpg",
    detailCaption: "Винтажная бронзовая ручка — фурнитура, которая стареет красиво.",
    products: [
      {
        name: "Петли скрытые",
        desc: "Трёхмерная регулировка, ресурс 200 000 циклов, Германия.",
        price: "от 3 200 сом / компл.",
        image: unsplash("photo-1736506159893-22cca29b8018", 1000),
      },
      {
        name: "Доводчик",
        desc: "Плавное закрытие без хлопка, регулировка скорости в двух точках.",
        price: "от 4 500 сом",
        image: unsplash("photo-1621295693450-080546d2ec8e", 1000),
      },
      {
        name: "Ручки авторские",
        desc: "Латунь и сталь, индивидуальная гравировка на заказ.",
        price: "от 2 800 сом",
        image: unsplash("photo-1601149842860-b39ad3f891fb", 1000),
      },
      {
        name: "Замки секретные",
        desc: "Повышенная секретность, сертифицированная взлом-защита.",
        price: "от 6 900 сом",
        image: unsplash("photo-1736506159920-aa3701dc1ee6", 1000),
      },
    ],
  },
];

export const about = {
  key: "about",
  route: "/o-nas",
  nav: "О нас",
  kicker: "KRAFT · МАНУФАКТУРА",
  title: "О нас",
  tagline: "цех в Бишкеке, контроль на каждом этапе",
  desc: "Полный цикл производства — от сушки массива до финального монтажа. Ни одного этапа на аутсорсе.",
  cta: "Как мы работаем",
  video: "videos/about.mp4",
  poster: "videos/about-poster.jpg",
  intro:
    "KRAFT — дверная мануфактура полного цикла в Бишкеке. Мы не пересобираем чужие полуфабрикаты и не работаем с посредниками: каждое полотно проходит весь путь — от сушки массива до монтажа — на одной площадке, под одной командой.",
  quote: {
    text: "Хорошая дверь незаметна в быту: она просто не скрипит, не проседает и держит тепло. Это и есть наш критерий качества.",
    author: "Данияр У. — основатель KRAFT",
  },
};

// Full navigation cycle used by the category-hero prev/next arrows —
// the 4 product categories plus the About page, in nav order.
export const pages = [...slides, about];

export const stats = [
  { value: 14, suffix: " лет", label: "на рынке Бишкека" },
  { value: 3200, suffix: "+", label: "дверей изготовлено" },
  { value: 27, suffix: "", label: "городов доставки" },
  { value: 7, suffix: " лет", label: "гарантии на полотно" },
];

export const catalog = [
  {
    index: "01",
    title: "Входные",
    desc: "Многослойные полотна с термомостом, скрытые петли, взлом-защита класса выше среднего.",
    image: unsplash("photo-1746966386827-6930da9346b6"),
  },
  {
    index: "02",
    title: "Межкомнатные",
    desc: "Массив и шпон ценных пород, от лаконичных филёнок до высоких порталов в пол.",
    image: unsplash("photo-1766230091872-b54df8924d3e"),
  },
  {
    index: "03",
    title: "Скрытые",
    desc: "Полотно заподлицо со стеной, без наличников — дверь исчезает в интерьере.",
    image: unsplash("photo-1723470918749-e42f89207f5c"),
  },
  {
    index: "04",
    title: "Индивидуальные",
    desc: "Нестандартные габариты, авторская фурнитура, инкрустация — по чертежам архитектора.",
    image: unsplash("photo-1758901810612-55ba2c317a53"),
  },
];

export const production = [
  {
    step: "01",
    title: "Отбор материала",
    desc: "Массив выдерживается в собственной сушильной камере до 8% влажности — полотно не поведёт со временем.",
    image: unsplash("photo-1659930087003-2d64e33181f7"),
  },
  {
    step: "02",
    title: "Точная обработка",
    desc: "ЧПУ-фрезеровка с допуском 0,1 мм — филёнки, фаски и пазы под фурнитуру идут день в день с проектом.",
    image: unsplash("photo-1497219055242-93359eeed651"),
  },
  {
    step: "03",
    title: "Сборка вручную",
    desc: "Каждое полотно собирает один мастер от начала до конца — личная ответственность за результат.",
    image: unsplash("photo-1631396326646-c06a935ff3a6"),
  },
  {
    step: "04",
    title: "Контроль и монтаж",
    desc: "Проверка геометрии, тест фурнитуры, установка бригадой без субподряда — гарантия на весь узел.",
    image: unsplash("photo-1687422810663-c316494f725a"),
  },
];

export const materials = [
  { name: "Дуб натуральный", tone: "Тёплый медовый тон, выраженная текстура", image: unsplash("photo-1736506159893-22cca29b8018", 900) },
  { name: "Орех американский", tone: "Глубокий шоколадный, благородный блеск", image: unsplash("photo-1621295693450-080546d2ec8e", 900) },
  { name: "Венге", tone: "Почти чёрный, для контрастных интерьеров", image: unsplash("photo-1601149842860-b39ad3f891fb", 900) },
  { name: "Ясень беленый", tone: "Светлый, для скандинавских пространств", image: unsplash("photo-1736506159920-aa3701dc1ee6", 900) },
  { name: "Палисандр", tone: "Красно-коричневый, редкая порода", image: unsplash("photo-1628229894555-21320be9a9c5", 900) },
  { name: "Термоясень", tone: "Термообработка, устойчив к влаге", image: unsplash("photo-1677338003679-b422eb979c5d", 900) },
];

export const projects = [
  { title: "Квартира на Ахунбаева", tag: "12 дверей · межкомнатные", image: unsplash("photo-1567092784576-ebca18b69af5") },
  { title: "Частный дом, Кой-Таш", tag: "Входная группа · индивидуальный проект", image: unsplash("photo-1657639744480-769229dd9c6e") },
  { title: "Пентхаус, центр Бишкека", tag: "Скрытые двери · 9 проёмов", image: unsplash("photo-1749788873243-65087660f55c") },
  { title: "Резиденция, Ак-Кула", tag: "Межкомнатные · массив ореха", image: unsplash("photo-1577361066824-c87dbb8df112") },
  { title: "Апартаменты, Восток-5", tag: "Входная дверь · класс защиты выше среднего", image: unsplash("photo-1647960563439-0160d88ca2b7") },
];

export const reviews = [
  {
    name: "Айгерим Т.",
    role: "квартира на Ахунбаева",
    text: "Заказывали 12 межкомнатных дверей — все идеально совпали по тону с полом, хотя партии были разные. Монтаж за один день.",
  },
  {
    name: "Марат С.",
    role: "частный дом, Кой-Таш",
    text: "Входная группа держит тепло даже в -20. Отдельное спасибо за то, что показали образцы шпона на месте, а не в каталоге на экране.",
  },
  {
    name: "Дмитрий и Наталья К.",
    role: "пентхаус в центре",
    text: "Скрытые двери — то, ради чего всё затевалось. Стена как будто без единого шва. Работали аккуратно, без пыли и лишнего шума.",
  },
];

export const contact = {
  city: "Бишкек",
  hours: "Пн–Сб, 09:00–19:00",
  phone: "+996 700 00 00 00",
  instagram: "https://www.instagram.com/",
  telegram: "https://t.me/",
  image: unsplash("photo-1784118335089-09285eb70d58", 1920, 70),
};

export const footerLinks = nav;
