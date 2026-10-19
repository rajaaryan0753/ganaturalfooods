(function () {
  const SHOP = window.SHOP || {};
  const fields = {
    name: SHOP.name,
    tagline: SHOP.tagline,
    phone: SHOP.phoneDisplay,
    email: SHOP.email,
    address: SHOP.address,
    hours: SHOP.hours,
    delivery: SHOP.delivery,
    upi: SHOP.upi,
    fssai: SHOP.fssai,
  };

  document.querySelectorAll("[data-shop]").forEach((el) => {
    const value = fields[el.dataset.shop];
    if (value) el.textContent = value;
  });

  if (SHOP.name) {
    const page = document.body.dataset.page;
    document.title = page ? SHOP.name + " — " + page : SHOP.name;
  }

  document.querySelectorAll("[data-shop-link='phone']").forEach((el) => {
    if (SHOP.phoneTel) el.href = "tel:" + SHOP.phoneTel;
  });

  document.querySelectorAll("[data-shop-link='email']").forEach((el) => {
    if (SHOP.email) el.href = "mailto:" + SHOP.email;
  });

  const shopName = SHOP.name || "there";
  const generalText = "Hello " + shopName + ", I would like to place an order.";
  const waBase = SHOP.whatsapp ? "https://wa.me/" + SHOP.whatsapp : "";

  if (waBase) {
    document.querySelectorAll("[data-whatsapp]").forEach((el) => {
      el.href = waBase + "?text=" + encodeURIComponent(generalText);
    });

    document.querySelectorAll("[data-enquire]").forEach((el) => {
      const text =
        "Hello " + shopName + ", I would like to enquire about " + el.dataset.enquire + ".";
      el.href = waBase + "?text=" + encodeURIComponent(text);
    });
  }

  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.textContent = open ? "Close" : "Menu";
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.textContent = "Menu";
      });
    });
  }

  const filters = document.querySelectorAll("[data-filter]");
  const cards = document.querySelectorAll(".product[data-category]");
  const countEl = document.querySelector("[data-count]");

  function applyFilter(category) {
    let shown = 0;
    cards.forEach((card) => {
      const show = category === "all" || card.dataset.category === category;
      card.hidden = !show;
      if (show) shown += 1;
    });
    filters.forEach((btn) => {
      const on = btn.dataset.filter === category;
      btn.classList.toggle("is-on", on);
      btn.setAttribute("aria-pressed", on ? "true" : "false");
    });
    if (countEl) {
      countEl.textContent = shown + (shown === 1 ? " pack" : " packs");
    }
  }

  if (filters.length && cards.length) {
    filters.forEach((btn) => {
      btn.addEventListener("click", () => {
        const category = btn.dataset.filter;
        applyFilter(category);
        const next =
          category === "all" ? location.pathname : location.pathname + "#" + category;
        history.replaceState(null, "", next);
      });
    });

    const hash = location.hash.replace("#", "");
    const known = ["makhana", "grams", "rice", "atta", "more"];
    applyFilter(known.includes(hash) ? hash : "all");
  }

  const form = document.querySelector("#order-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!waBase) return;
      const data = new FormData(form);
      const lines = ["Hello " + shopName + ", I would like to enquire."];
      [
        ["Name", data.get("name")],
        ["Phone", data.get("phone")],
        ["City", data.get("city")],
        ["Items", data.get("items")],
        ["Message", data.get("message") || data.get("note")],
      ].forEach(([label, value]) => {
        const text = String(value || "").trim();
        if (text) lines.push(label + ": " + text);
      });
      window.open(waBase + "?text=" + encodeURIComponent(lines.join("\n")), "_blank", "noopener");
    });
  }

  const year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());
})();