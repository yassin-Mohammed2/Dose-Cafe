// ---------- Texts (English / Arabic) ----------
const I18N = {
  en: {
    title: "Dose Café | Your Bold Dose",
    nav_about: "About", nav_menu: "Menu", nav_visit: "Visit",
    hero_title: "Your daily dose,<br>measured right.",
    hero_text: "Browse the menu, then tell your waiter what you would like. We will bring it to your table.",
    hero_btn1: "View the menu", hero_btn2: "Find us",
    about_title: "Coffee, taken seriously",
    f1_t: "Single-origin beans", f1_d: "Sourced from small farms and rotated every season, so the cup is never the same twice.",
    f2_t: "Roasted weekly", f2_d: "Small batches, roasted in the week you drink them. Fresh beans, clean flavour.",
    f3_t: "Made to your dose", f3_d: "Single or double, you choose how strong your coffee goes.",
    menu_title: "Menu", menu_note: "Ready to order? Just call your waiter.",
    visit_title: "Visit us",
    addr_t: "Address", addr_v: "Al Gezira Towers, Sadat Academy St., Corniche El Maadi, Cairo", map_t: "Open in Google Maps",
    hours_t: "Hours", hours_v: "Daily, 8:00 AM to 2:00 AM",
    contact_t: "Phone",
    footer: "© 2026 Dose Café. All rights reserved.",
    currency: "EGP", toggle: "عربي", toggleLabel: "Switch to Arabic"
  },
  ar: {
    title: "Dose Café | دوز كافية",
    nav_about: "عنّا", nav_menu: "المنيو", nav_visit: "زورنا",
    hero_title: "جرعتك اليومية،<br>بمقاس مظبوط.",
    hero_text: "تصفّح المنيو، ثم أخبر الويتر بما تود طلبه، وسنوصله إلى طاولتك.",
    hero_btn1: "شاهد المنيو", hero_btn2: "اعرف مكاننا",
    about_title: "القهوة كما يجب أن تكون",
    f1_t: "حبوب من مصدر واحد", f1_d: "من مزارع صغيرة، ونغيّرها كل موسم، فلا يتكرر الكوب مرتين.",
    f2_t: "تحميص أسبوعي", f2_d: "دفعات صغيرة تُحمَّص في نفس أسبوع شربك لها. حبوب طازجة ونكهة نقية.",
    f3_t: "بجرعتك أنت", f3_d: "سنجل أو دبل، اختار قوة قهوتك بنفسك.",
    menu_title: "المنيو", menu_note: "جاهز للطلب؟ ناد الويتر فقط.",
    visit_title: "زورنا",
    addr_t: "العنوان", addr_v: "أبراج الجزيرة، شارع أكاديمية السادات، كورنيش المعادي، القاهرة", map_t: "افتح في خرائط جوجل",
    hours_t: "المواعيد", hours_v: "يوميًا من 8:00 ص إلى 2:00 ص",
    contact_t: "التليفون",
    footer: "© 2026 Dose Café. جميع الحقوق محفوظة.",
    currency: "ج.م", toggle: "EN", toggleLabel: "التحويل إلى الإنجليزية"
  }
};

// ---------- Menu ----------
// i(English, Arabic, price, [ingredients EN, ingredients AR])  -> one menu item
// sub(English, Arabic)                                          -> small heading inside a section
const i = (en, ar, price, note) => ({ name: [en, ar], price, note });
const sub = (en, ar) => ({ sub: [en, ar] });

const MENU = [
  { cat: ["Coffee", "القهوة"],
    banner: {
      title: ["The Strong Dose", "جرعة Dose القوية"],
      text: ["High-caffeine coffee for strong coffee lovers. Single or double, choose your dose.",
             "بن بكافيين عالٍ لعشاق القهوة القوية. إسبريسو سنجل أو دبل... اختار جرعتك."]
    },
    items: [
      i("Single Espresso", "إسبريسو سنجل", 45),
      i("Double Espresso", "إسبريسو دبل", 60),
      i("Americano", "أمريكانو", 60),
      i("Single Turkish Coffee", "قهوة تركي سنجل", 45),
      i("Double Turkish Coffee", "قهوة تركي دبل", 60),
      i("French Coffee", "قهوة فرنساوي", 60),
      i("Hazelnut Coffee", "قهوة بندق", 60)
  ]},
  { cat: ["Warm Drinks & Tea", "مشروبات دافئة وشاي"], items: [
      i("Latte", "لاتيه", 75),
      i("Cappuccino", "كابتشينو", 75),
      i("Flat White", "فلات وايت", 80),
      i("Hot Mocha", "هوت موكا", 90),
      i("Hot White Mocha", "هوت وايت موكا", 90),
      i("Spanish Latte", "سبانيش لاتيه", 90),
      i("Sahlab", "سحلب", 70),
      i("Hot Cider", "هوت سيدر", 65),
      sub("Tea", "الشاي"),
      i("Black Tea", "شاي أسود", 30),
      i("Green Tea", "شاي أخضر", 30)
  ]},
  { cat: ["Iced Coffee", "قهوة باردة"], items: [
      i("Iced Americano", "آيس أمريكانو", 70),
      i("Iced Latte", "آيس لاتيه", 85),
      i("Iced Spanish Latte", "آيس سبانيش لاتيه", 105),
      i("Iced Mocha", "آيس موكا", 105),
      i("Iced White Mocha", "آيس وايت موكا", 105)
  ]},
  { cat: ["Frappés", "فرابيه"], items: [
      i("Classic Frappé", "فرابيه كلاسيك", 80),
      i("Mocha Frappé", "فرابيه موكا", 85),
      i("White Mocha Frappé", "فرابيه وايت موكا", 85),
      i("Spanish Frappé", "فرابيه سبانيش", 85),
      i("Oreo Frappé", "فرابيه أوريو", 95),
      i("Lotus Frappé", "فرابيه لوتس", 95)
  ]},
  { cat: ["Milkshakes", "ميلك شيك"], items: [
      i("Vanilla Milkshake", "ميلك شيك فانيليا", 100),
      i("Chocolate Milkshake", "ميلك شيك شوكولاتة", 100),
      i("Mango Milkshake", "ميلك شيك مانجو", 100),
      i("Blueberry Milkshake", "ميلك شيك بلوبيري", 100),
      i("Strawberry Milkshake", "ميلك شيك فراولة", 100),
      i("Caramel Milkshake", "ميلك شيك كراميل", 100),
      i("Oreo Milkshake", "ميلك شيك أوريو", 110),
      i("Lotus Milkshake", "ميلك شيك لوتس", 110)
  ]},
  { cat: ["Fresh Juices", "عصائر فريش"], items: [
      i("Mint Lemonade", "ليمون بالنعناع", 65),
      i("Orange Juice", "برتقال", 65),
      i("Mango Juice", "مانجو", 80),
      i("Strawberry Juice", "فراولة", 75),
      i("Guava Juice", "جوافة", 75),
      i("Mixed Berry Juice", "ميكس بيري", 75),
      i("Kiwi Juice", "كيوي", 80)
  ]},
  { cat: ["Smoothies", "سموذي"], items: [
      i("Mint Lemon Smoothie", "سموذي ليمون بالنعناع", 65),
      i("Mango or Strawberry Smoothie", "سموذي مانجو أو فراولة", 75),
      i("Watermelon Smoothie", "سموذي بطيخ", 70),
      i("Blueberry Smoothie", "سموذي بلوبيري", 70),
      i("Passion Fruit Smoothie", "سموذي باشون فروت", 70),
      i("Kiwi Smoothie", "سموذي كيوي", 75)
  ]},
  { cat: ["Soft Drinks & Water", "سوفت ومياه"], items: [
      i("Pepsi", "بيبسي", 30),
      i("Coca-Cola", "كوكاكولا", 30),
      i("7UP", "سفن أب", 30),
      i("Sprite", "سبرايت", 30),
      i("Mineral Water", "مياه معدنية", 15)
  ]},
  { cat: ["Mojitos & Boba", "موهيتو وبوبا"], items: [
      i("Classic Mojito", "موهيتو كلاسيك", 85),
      i("Blueberry Mojito", "موهيتو بلوبيري", 100),
      i("Passion Fruit Mojito", "موهيتو باشون فروت", 100),
      i("Strawberry Mojito", "موهيتو فراولة", 100),
      i("Sunrise Mojito", "موهيتو صن رايز", 100),
      i("Blueberry Boba Mojito", "موهيتو بوبا بلوبيري", 120),
      i("Passion Fruit Boba Mojito", "موهيتو بوبا باشون فروت", 120)
  ]},
  { cat: ["Cocktails & Iced Tea", "كوكتيلات وآيس تي"], items: [
      i("Florida", "فلوريدا", 100, ["Mango · Strawberry · Guava", "مانجو · فراولة · جوافة"]),
      i("Tropical", "تروبيكال", 100, ["Banana · Pineapple · Orange · Passion Fruit", "موز · أناناس · برتقال · باشون فروت"]),
      i("Dose Cocktail", "كوكتيل دوز", 110, ["Mango · Strawberry · Banana · Cream", "مانجو · فراولة · موز · كريمة"]),
      i("Mango Passion", "مانجو باشون", 120, ["Mango · Kiwi · Passion Fruit", "مانجو · كيوي · باشون فروت"]),
      sub("Iced Tea", "آيس تي"),
      i("Passion Fruit Iced Tea", "آيس تي باشون فروت", 65),
      i("Strawberry Iced Tea", "آيس تي فراولة", 65),
      i("Peach Iced Tea", "آيس تي خوخ", 65),
      i("Mixed Iced Tea", "آيس تي ميكس", 75, ["Passion Fruit · Strawberry · Peach", "باشون فروت · فراولة · خوخ"])
  ]}
];

// ---------- Language ----------
const tabsEl = document.getElementById("tabs");
const gridEl = document.getElementById("grid");
const langBtn = document.getElementById("langBtn");
let current = 0;
let lang = pickLang();

function pickLang() {
  try {
    const saved = localStorage.getItem("dose-lang");
    if (saved === "ar" || saved === "en") return saved;
  } catch (e) {}
  return (navigator.language || "").toLowerCase().startsWith("ar") ? "ar" : "en";
}

function applyLang() {
  const t = I18N[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.title = t.title;
  document.querySelectorAll("[data-i18n]").forEach(el => { el.innerHTML = t[el.dataset.i18n]; });
  langBtn.textContent = t.toggle;
  langBtn.setAttribute("aria-label", t.toggleLabel);
  renderTabs();
  renderItems();
}

langBtn.addEventListener("click", () => {
  lang = lang === "ar" ? "en" : "ar";
  try { localStorage.setItem("dose-lang", lang); } catch (e) {}
  applyLang();
});

// ---------- Menu rendering ----------
const L = () => (lang === "ar" ? 1 : 0);

function renderTabs() {
  tabsEl.innerHTML = "";
  MENU.forEach((group, idx) => {
    const b = document.createElement("button");
    b.className = "tab";
    b.type = "button";
    b.textContent = group.cat[L()];
    b.setAttribute("role", "tab");
    b.setAttribute("aria-selected", idx === current);
    b.addEventListener("click", () => { current = idx; renderTabs(); renderItems(); });
    tabsEl.appendChild(b);
  });
}

function renderItems() {
  const t = I18N[lang];
  const group = MENU[current];
  gridEl.innerHTML = "";

  if (group.banner) {
    const b = document.createElement("div");
    b.className = "banner";
    b.innerHTML = `<strong>${group.banner.title[L()]}</strong><span>${group.banner.text[L()]}</span>`;
    gridEl.appendChild(b);
  }

  group.items.forEach(it => {
    if (it.sub) {
      const h = document.createElement("h3");
      h.className = "sub";
      h.textContent = it.sub[L()];
      gridEl.appendChild(h);
      return;
    }
    const card = document.createElement("article");
    card.className = "item";
    card.innerHTML = `
      <div class="info">
        <h3 dir="auto">${it.name[L()]}</h3>
        <span class="alt" dir="auto">${it.name[1 - L()]}</span>
        ${it.note ? `<span class="ing" dir="auto">${it.note[L()]}</span>` : ""}
      </div>
      <span class="price">${it.price}<small>${t.currency}</small></span>`;
    gridEl.appendChild(card);
  });
}

applyLang();
