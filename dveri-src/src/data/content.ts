// Public assets are served from Vite's BASE_URL (the site can be deployed
// under a sub-path, e.g. GitHub Pages /dveri/), so plain "/images/..."
// strings would resolve to the domain root and 404 — always go through this.
export function asset(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
}

// ЗАГЛУШКА ДЛЯ ДЕМО: перед показом заказчику замените телефон/WhatsApp
// на реальные контакты компании.
export const CONTACT = {
  phoneDisplay: "+996 700 00-00-00",
  phoneHref: "tel:+996700000000",
  whatsappNumber: "996700000000",
  defaultMessage: "Здравствуйте! Хочу узнать про двери ВЕРЕЯ.",
  get whatsappHref() {
    return waLink(this.defaultMessage);
  },
  city: "Бишкек",
  address: "просп. Чуй, шоурум по записи",
  hours: "Пн–Сб, 10:00–19:00",
};

export function waLink(message: string) {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { label: "Коллекции", href: "#collections" },
  { label: "Отделки", href: "#materials" },
  { label: "Калькулятор", href: "#calculator" },
  { label: "Как заказать", href: "#process" },
  { label: "Интерьеры", href: "#gallery" },
  { label: "Отзывы", href: "#testimonials" },
  { label: "Вопросы", href: "#faq" },
];

export const STATS = [
  { value: 500, suffix: "+", label: "дверей установлено в Бишкеке" },
  { value: 14, suffix: "", label: "коллекций отделки на выбор" },
  { value: 5, suffix: " лет", label: "гарантии на полотно и фурнитуру" },
  { value: 48, suffix: " ч", label: "на выезд замерщика по городу" },
];

export type Collection = {
  id: string;
  title: string;
  finish: string;
  thickness: string;
  image: string;
  badge?: "Новинка" | "Хит" | "Премиум" | "Дизайн";
  priceFrom: number;
};

export const COLLECTIONS: Collection[] = [
  {
    id: "classic",
    title: "Классика",
    finish: "Эмаль слоновая кость",
    thickness: "40 мм",
    image: asset("/images/door-1.jpg"),
    priceFrom: 42900,
  },
  {
    id: "walnut",
    title: "Орех Гранд",
    finish: "Шпон натурального ореха",
    thickness: "40 мм",
    image: asset("/images/door-2.jpg"),
    badge: "Хит",
    priceFrom: 51300,
  },
  {
    id: "loft",
    title: "Лофт Сталь",
    finish: "Металлокаркас + стекло",
    thickness: "44 мм",
    image: asset("/images/door-3.jpg"),
    badge: "Новинка",
    priceFrom: 68400,
  },
  {
    id: "minimal",
    title: "Минимал",
    finish: "Светлый дуб, скрытая коробка",
    thickness: "40 мм",
    image: asset("/images/door-4.jpg"),
    priceFrom: 47800,
  },
  {
    id: "wenge",
    title: "Венге Люкс",
    finish: "Венге + сатинированное стекло",
    thickness: "40 мм",
    image: asset("/images/door-5.jpg"),
    badge: "Премиум",
    priceFrom: 73600,
  },
  {
    id: "reeded",
    title: "Рейка",
    finish: "Рифлёный дуб, поворотная ось",
    thickness: "45 мм",
    image: asset("/images/door-6.jpg"),
    badge: "Дизайн",
    priceFrom: 81200,
  },
];

export function formatSom(value: number) {
  return `${value.toLocaleString("ru-RU")} сом`;
}

export const CALCULATOR = {
  installFee: 4200,
  trimFee: 1800,
};

export const MATERIALS = [
  { name: "Слоновая кость", hex: "#EDE6D8" },
  { name: "Тёплый беж", hex: "#D8C4A8" },
  { name: "Молочный дуб", hex: "#E4D9C4" },
  { name: "Серый камень", hex: "#B7B0A3" },
  { name: "Орех", hex: "#6B4A34" },
  { name: "Венге", hex: "#3B2A22" },
  { name: "Графит", hex: "#2E2B28" },
  { name: "Оливковый мат", hex: "#5C6650" },
];

export const PROCESS_STEPS = [
  {
    index: "01",
    title: "Замер",
    text: "Выезжаем на объект в течение 48 часов, снимаем точные размеры проёмов — без наценки за выезд.",
  },
  {
    index: "02",
    title: "Проект",
    text: "Подбираем коллекцию, отделку и фурнитуру под ваш интерьер, показываем визуализацию.",
  },
  {
    index: "03",
    title: "Производство",
    text: "Собираем полотно под ваши размеры на собственном производстве — 3–5 недель.",
  },
  {
    index: "04",
    title: "Установка",
    text: "Монтируем «под ключ», настраиваем доводчики и фурнитуру, убираем за собой.",
  },
];

export const TESTIMONIALS = [
  {
    quote: "Двери подошли миллиметр в миллиметр — не думали, что так бывает с проёмами в старом доме.",
    author: "Айгуль Т.",
    context: "ЖК «Тумар», Бишкек",
  },
  {
    quote: "Через полгода эксплуатации ни скрипа, ни провисания. Стоило переплаты за материал.",
    author: "Марат С.",
    context: "частный дом, Аламедин",
  },
  {
    quote: "Показали визуализацию до заказа — сомнений в выборе отделки не осталось.",
    author: "Студия «Форма»",
    context: "дизайн-проект квартиры",
  },
];

export const FAQ_ITEMS = [
  {
    q: "Сколько ждать двери после замера?",
    a: "3–5 недель на производство под ваши размеры плюс один день на монтаж. Для типовых проёмов возможен ускоренный срок — уточняем при замере.",
  },
  {
    q: "Работаете ли с нестандартными проёмами?",
    a: "Да, каждое полотно собирается по индивидуальным размерам с отклонением до 0.5 см. Это касается и старых домов с неровными проёмами.",
  },
  {
    q: "Что входит в стоимость?",
    a: "Полотно, коробка, наличники, фурнитура, выезд замерщика и монтаж «под ключ» — без скрытых доплат.",
  },
  {
    q: "Даёте ли гарантию?",
    a: "5 лет на полотно и фурнитуру. При нормальной эксплуатации дверь не поведёт и петли не разболтаются.",
  },
  {
    q: "Можно ли увидеть образцы вживую?",
    a: "Да — в шоуруме в Бишкеке по записи, либо привозим образцы отделки прямо на замер.",
  },
];

export const BRAND = {
  name: "ВЕРЕЯ",
  tagline: "Ателье межкомнатных дверей",
};
