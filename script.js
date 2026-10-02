// ---------- Texts (English / Arabic) ----------
const I18N = {
  en: {
    title: "Dose Cafe | Specialty Coffee",
    nav_about: "About", nav_menu: "Menu", nav_visit: "Visit",
    hero_title: "Your daily dose,<br>measured right.",
    hero_text: "Browse the menu, then tell your waiter what you would like. We will bring it to your table.",
    hero_btn1: "View the menu", hero_btn2: "Find us",
    about_title: "Coffee, taken seriously",
    f1_t: "Single-origin beans", f1_d: "Sourced from small farms and rotated every season, so the cup is never the same twice.",
    f2_t: "Roasted weekly", f2_d: "Small batches, roasted in the week you drink them. Fresh beans, clean flavour.",
    f3_t: "Made to your dose", f3_d: "Choose small, medium or large and the shot is dialled in for that size.",
    menu_title: "Menu", menu_note: "Ready to order? Just call your waiter.",
    visit_title: "Visit us",
    addr_t: "Address", addr_v: "Al Gezira Towers, Sadat Academy St., Corniche El Maadi, Cairo", map_t: "Open in Google Maps",
    hours_t: "Hours", hours_v: "Daily, 8:00 AM to 2:00 AM",
    contact_t: "Phone",
    footer: "© 2026 Dose Cafe. All rights reserved.",
    currency: "EGP", sizes: { S: "S", M: "M", L: "L" },
    sizeLabel: { S: "Small", M: "Medium", L: "Large" }, toggle: "عربي", toggleLabel: "Switch to Arabic"
  },
  ar: {
    title: "Dose Cafe | دوز كافيه",
    nav_about: "عنّا", nav_menu: "المنيو", nav_visit: "زورنا",
    hero_title: "جرعتك اليومية،<br>بمقاس مظبوط.",
    hero_text: "تصفّح المنيو، ثم أخبر الويتر بما تود طلبه، وسنوصله إلى طاولتك.",
    hero_btn1: "شاهد المنيو", hero_btn2: "اعرف مكاننا",
    about_title: "القهوة كما يجب أن تكون",
    f1_t: "حبوب من مصدر واحد", f1_d: "من مزارع صغيرة، ونغيّرها كل موسم، فلا يتكرر الكوب مرتين.",
    f2_t: "تحميص أسبوعي", f2_d: "دفعات صغيرة تُحمَّص في نفس أسبوع شربك لها. حبوب طازجة ونكهة نقية.",
    f3_t: "بجرعتك أنت", f3_d: "اختر صغير أو وسط أو كبير، ونضبط الشوت على حسب الحجم.",
    menu_title: "المنيو", menu_note: "جاهز للطلب؟ ناد الويتر فقط.",
    visit_title: "زورنا",
    addr_t: "العنوان", addr_v: "أبراج الجزيرة، شارع أكاديمية السادات، كورنيش المعادي، القاهرة", map_t: "افتح في خرائط جوجل",
    hours_t: "المواعيد", hours_v: "يوميًا من 8:00 ص إلى 2:00 ص",
    contact_t: "التليفون",
    footer: "© 2026 Dose Cafe. جميع الحقوق محفوظة.",
    currency: "ج.م", sizes: { S: "ص", M: "و", L: "ك" },
    sizeLabel: { S: "صغير", M: "وسط", L: "كبير" }, toggle: "EN", toggleLabel: "التحويل إلى الإنجليزية"
  }
};

// ---------- Placeholder menu ----------
// Replace names, descriptions and prices when the real menu is ready.
// name / desc are [English, Arabic]. "price" is for size S; M and L add SIZE_EXTRA.
// fixed: true = single size (no S/M/L buttons).
const SIZE_EXTRA = { S: 0, M: 10, L: 20 };

const MENU = [
  { cat: ["Hot coffee", "قهوة ساخنة"], items: [
    { name: ["Espresso", "إسبريسو"],        desc: ["Double shot, dense and sweet with a caramel finish.", "شوت مزدوج، كثيف وحلو بنهاية كراميل."], price: 55 },
    { name: ["Americano", "أمريكانو"],      desc: ["Espresso lengthened with hot water.", "إسبريسو مخفف بالماء الساخن."], price: 60 },
    { name: ["Flat White", "فلات وايت"],    desc: ["Two shots, silky steamed milk.", "شوتان مع حليب مبخّر ناعم."], price: 80 },
    { name: ["Cappuccino", "كابتشينو"],     desc: ["Equal parts espresso, milk and foam.", "أجزاء متساوية من الإسبريسو والحليب والرغوة."], price: 80 },
    { name: ["Spanish Latte", "سبانش لاتيه"], desc: ["Espresso, milk and a touch of condensed milk.", "إسبريسو وحليب مع لمسة من اللبن المكثف."], price: 95 }
  ]},
  { cat: ["Cold coffee", "قهوة باردة"], items: [
    { name: ["Iced Latte", "آيس لاتيه"],    desc: ["Espresso over cold milk and ice.", "إسبريسو على حليب بارد وثلج."], price: 85 },
    { name: ["Cold Brew", "كولد برو"],      desc: ["Steeped for 18 hours, smooth and low in acidity.", "منقوع لمدة 18 ساعة، ناعم وقليل الحموضة."], price: 90 },
    { name: ["Iced Mocha", "آيس موكا"],     desc: ["Espresso, chocolate and milk over ice.", "إسبريسو وشوكولاتة وحليب على الثلج."], price: 100 },
    { name: ["Affogato", "أفوجاتو"],        desc: ["Vanilla ice cream drowned in a hot espresso shot.", "آيس كريم فانيليا مع شوت إسبريسو ساخن."], price: 95 }
  ]},
  { cat: ["Not coffee", "مشروبات أخرى"], items: [
    { name: ["Matcha Latte", "ماتشا لاتيه"], desc: ["Ceremonial-grade matcha with steamed milk.", "ماتشا فاخرة مع حليب مبخّر."], price: 95 },
    { name: ["Hot Chocolate", "هوت شوكليت"], desc: ["Dark chocolate melted into milk.", "شوكولاتة داكنة ذائبة في الحليب."], price: 80 },
    { name: ["Fresh Lemon Mint", "ليمون بالنعناع"], desc: ["Squeezed to order, lightly sweet.", "عصير طازج، حلاوته خفيفة."], price: 60 },
    { name: ["Karkade", "كركديه"],          desc: ["Hibiscus, served hot or iced.", "يُقدَّم ساخنًا أو باردًا."], price: 50 }
  ]},
  { cat: ["Bakery", "مخبوزات"], items: [
    { name: ["Butter Croissant", "كرواسون بالزبدة"], desc: ["Baked every morning.", "يُخبز كل صباح."], price: 55, fixed: true },
    { name: ["Pistachio Cookie", "كوكيز بالفستق"],   desc: ["Soft centre, crisp edge.", "قلب طري وحواف مقرمشة."], price: 50, fixed: true },
    { name: ["Basque Cheesecake", "باسك تشيز كيك"],  desc: ["Burnt top, creamy inside.", "وجه محروق وقلب كريمي."], price: 120, fixed: true },
    { name: ["Brownie", "براوني"],           desc: ["Dense and fudgy.", "كثيف ومشبع بالشوكولاتة."], price: 65, fixed: true }
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
  MENU.forEach((group, i) => {
    const b = document.createElement("button");
    b.className = "tab";
    b.type = "button";
    b.textContent = group.cat[L()];
    b.setAttribute("role", "tab");
    b.setAttribute("aria-selected", i === current);
    b.addEventListener("click", () => { current = i; renderTabs(); renderItems(); });
    tabsEl.appendChild(b);
  });
}

function renderItems() {
  const t = I18N[lang];
  gridEl.innerHTML = "";
  MENU[current].items.forEach(item => {
    let size = "S";
    const card = document.createElement("article");
    card.className = "item";
    card.innerHTML = `
      <h3>${item.name[L()]}</h3>
      <p>${item.desc[L()]}</p>
      <div class="row">
        <span class="price"></span>
        <div class="sizes"></div>
      </div>`;
    const priceEl = card.querySelector(".price");
    const sizesEl = card.querySelector(".sizes");
    const updatePrice = () => {
      priceEl.textContent = (item.price + (item.fixed ? 0 : SIZE_EXTRA[size])) + " " + t.currency;
    };

    if (!item.fixed) {
      Object.keys(SIZE_EXTRA).forEach(s => {
        const sb = document.createElement("button");
        sb.className = "size";
        sb.type = "button";
        sb.textContent = t.sizes[s];
        sb.setAttribute("aria-label", t.sizeLabel[s]);
        sb.setAttribute("aria-pressed", s === size);
        sb.addEventListener("click", () => {
          size = s;
          sizesEl.querySelectorAll(".size").forEach(x => x.setAttribute("aria-pressed", x === sb));
          updatePrice();
        });
        sizesEl.appendChild(sb);
      });
    }
    updatePrice();
    gridEl.appendChild(card);
  });
}

applyLang();
