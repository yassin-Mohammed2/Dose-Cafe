// Placeholder menu: replace names, descriptions and prices when the real menu is ready.
// "price" is the price for size S; M and L add the extras below (EGP).
const SIZE_EXTRA = { S: 0, M: 10, L: 20 };

const MENU = {
  "Hot coffee": [
    { name: "Espresso",   desc: "Double shot, dense and sweet with a caramel finish.", price: 55 },
    { name: "Americano",  desc: "Espresso lengthened with hot water.",                 price: 60 },
    { name: "Flat White", desc: "Two shots, silky steamed milk.",                      price: 80 },
    { name: "Cappuccino", desc: "Equal parts espresso, milk and foam.",                price: 80 },
    { name: "Spanish Latte", desc: "Espresso, milk and a touch of condensed milk.",    price: 95 }
  ],
  "Cold coffee": [
    { name: "Iced Latte",  desc: "Espresso over cold milk and ice.",                   price: 85 },
    { name: "Cold Brew",   desc: "Steeped for 18 hours, smooth and low in acidity.",   price: 90 },
    { name: "Iced Mocha",  desc: "Espresso, chocolate and milk over ice.",             price: 100 },
    { name: "Affogato",    desc: "Vanilla ice cream drowned in a hot espresso shot.",  price: 95 }
  ],
  "Not coffee": [
    { name: "Matcha Latte", desc: "Ceremonial-grade matcha with steamed milk.",        price: 95 },
    { name: "Hot Chocolate", desc: "Dark chocolate melted into milk.",                 price: 80 },
    { name: "Fresh Lemon Mint", desc: "Squeezed to order, lightly sweet.",             price: 60 },
    { name: "Karkade",     desc: "Hibiscus, served hot or iced.",                      price: 50 }
  ],
  "Bakery": [
    { name: "Butter Croissant", desc: "Baked every morning.",                          price: 55, fixed: true },
    { name: "Pistachio Cookie", desc: "Soft centre, crisp edge.",                      price: 50, fixed: true },
    { name: "Basque Cheesecake", desc: "Burnt top, creamy inside.",                    price: 120, fixed: true },
    { name: "Brownie",     desc: "Dense and fudgy.",                                   price: 65, fixed: true }
  ]
};

const tabsEl = document.getElementById("tabs");
const gridEl = document.getElementById("grid");
const orderEl = document.getElementById("order");
const orderText = document.getElementById("orderText");
let order = [];
let current = Object.keys(MENU)[0];

function renderTabs() {
  tabsEl.innerHTML = "";
  Object.keys(MENU).forEach(cat => {
    const b = document.createElement("button");
    b.className = "tab";
    b.type = "button";
    b.textContent = cat;
    b.setAttribute("role", "tab");
    b.setAttribute("aria-selected", cat === current);
    b.addEventListener("click", () => { current = cat; renderTabs(); renderItems(); });
    tabsEl.appendChild(b);
  });
}

function renderItems() {
  gridEl.innerHTML = "";
  MENU[current].forEach(item => {
    let size = "S";
    const card = document.createElement("article");
    card.className = "item";
    card.innerHTML = `
      <h3>${item.name}</h3>
      <p>${item.desc}</p>
      <div class="row">
        <span class="price"></span>
        <div class="sizes"></div>
      </div>
      <button class="add" type="button">Add to order</button>`;
    const priceEl = card.querySelector(".price");
    const sizesEl = card.querySelector(".sizes");
    const priceNow = () => item.price + (item.fixed ? 0 : SIZE_EXTRA[size]);
    const updatePrice = () => { priceEl.textContent = priceNow() + " EGP"; };

    if (!item.fixed) {
      Object.keys(SIZE_EXTRA).forEach(s => {
        const sb = document.createElement("button");
        sb.className = "size";
        sb.type = "button";
        sb.textContent = s;
        sb.setAttribute("aria-label", "Size " + s);
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

    card.querySelector(".add").addEventListener("click", () => {
      order.push({ name: item.name, size: item.fixed ? "" : size, price: priceNow() });
      renderOrder();
    });
    gridEl.appendChild(card);
  });
}

function renderOrder() {
  if (!order.length) { orderEl.hidden = true; return; }
  const total = order.reduce((sum, o) => sum + o.price, 0);
  orderText.textContent = `${order.length} item${order.length > 1 ? "s" : ""} · ${total} EGP`;
  orderEl.hidden = false;
}

document.getElementById("clearBtn").addEventListener("click", () => { order = []; renderOrder(); });

renderTabs();
renderItems();
