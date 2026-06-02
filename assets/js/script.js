/* ==========================================
   LOAD HEADER
========================================== */

fetch("./assets/include/header.html")
  .then((res) => res.text())
  .then((data) => {
    const headerEl = document.getElementById("header");

    if (headerEl) {
      headerEl.innerHTML = data;
      initNavbar();
    }
  })
  .catch((err) => console.log("Header Load Error:", err));

/* ==========================================
   LOAD FOOTER
========================================== */

fetch("./assets/include/footer.html")
  .then((res) => res.text())
  .then((data) => {
    const footerEl = document.getElementById("footer");

    if (footerEl) {
      footerEl.innerHTML = data;
    }
  })
  .catch((err) => console.log("Footer Load Error:", err));

/* ==========================================
   NAVBAR
========================================== */

function initNavbar() {
  window.toggleMenu = function () {
    const navLinks = document.getElementById("navLinks");

    if (navLinks) {
      navLinks.classList.toggle("active");
    }
  };

  const tourLink = document.querySelector(".tour-link");
  const tourDrop = document.querySelector(".tour-drop");

  if (tourLink && tourDrop) {
    tourLink.addEventListener("click", function () {
      tourDrop.classList.toggle("active");
    });
  }
}

/* ==========================================
   STICKY HEADER
========================================== */

function initStickyHeader() {
  const header = document.getElementById("header");

  if (!header) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
  });
}

/* ==========================================
   EYES FOLLOW CURSOR
========================================== */

function initEyesFollow() {
  const eyes = document.querySelectorAll(".vx7-eye-ball");

  if (!eyes.length) return;

  document.addEventListener("mousemove", (e) => {
    eyes.forEach((eye) => {
      if (!eye.parentElement) return;

      const rect = eye.parentElement.getBoundingClientRect();

      const eyeX = rect.left + rect.width / 2;
      const eyeY = rect.top + rect.height / 2;

      const angle = Math.atan2(
        e.clientY - eyeY,
        e.clientX - eyeX
      );

      const moveX = Math.cos(angle) * 3;
      const moveY = Math.sin(angle) * 3;

      eye.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
  });
}

/* ==========================================
   SERVICE CARD
========================================== */

function initServiceCard() {
  const card = document.querySelector(".vx7-service-card");

  if (!card) return;

  const cardData = [
    {
      icon: "bi-cart3",
      title: "Ecommerce Development",
      desc: "Sell online with ease. Robust stores launched for your brand.",
      stat1: "250+",
      statText1: "STORES",
      stat2: "2X",
      statText2: "SALES",
    },
    {
      icon: "bi-code-slash",
      title: "Website Development",
      desc: "Modern responsive websites built for startups and businesses.",
      stat1: "500+",
      statText1: "WEBSITES",
      stat2: "99%",
      statText2: "SATISFACTION",
    },
    {
      icon: "bi-phone",
      title: "Mobile App Design",
      desc: "Premium mobile experiences crafted for Android and iOS users.",
      stat1: "120+",
      statText1: "APPS",
      stat2: "4.9★",
      statText2: "RATINGS",
    },
    {
      icon: "bi-bar-chart",
      title: "Digital Marketing",
      desc: "Scale your brand visibility and grow faster with smart campaigns.",
      stat1: "10M+",
      statText1: "REACH",
      stat2: "5X",
      statText2: "GROWTH",
    },
  ];

  let current = 0;

  function updateCard() {
    current++;

    if (current >= cardData.length) {
      current = 0;
    }

    const data = cardData[current];

    const icon = document.getElementById("vx7CardIcon");
    const title = document.getElementById("vx7CardTitle");
    const desc = document.getElementById("vx7CardDesc");
    const stat1 = document.getElementById("vx7Stat1");
    const statText1 = document.getElementById("vx7StatText1");
    const stat2 = document.getElementById("vx7Stat2");
    const statText2 = document.getElementById("vx7StatText2");

    if (
      !icon ||
      !title ||
      !desc ||
      !stat1 ||
      !statText1 ||
      !stat2 ||
      !statText2
    ) {
      return;
    }

    card.classList.remove("vx7-card-animate");
    void card.offsetWidth;
    card.classList.add("vx7-card-animate");

    icon.className = `bi ${data.icon}`;
    title.innerText = data.title;
    desc.innerText = data.desc;
    stat1.innerText = data.stat1;
    statText1.innerText = data.statText1;
    stat2.innerText = data.stat2;
    statText2.innerText = data.statText2;
  }

  setInterval(updateCard, 5000);
}

/* ==========================================
   PREMIUM CURSOR
========================================== */

function initPremiumCursor() {
  const cursor = document.querySelector(".vx12-cursor");

  if (!cursor) return;

  const dots = document.querySelectorAll(".vx12-dot");

  let mouseX = 0;
  let mouseY = 0;

  let cursorX = 0;
  let cursorY = 0;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.18;
    cursorY += (mouseY - cursorY) * 0.18;

    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;

    requestAnimationFrame(animateCursor);
  }

  animateCursor();

  dots.forEach((dot, index) => {
    let x = 0;
    let y = 0;

    function animateDot() {
      x += (mouseX - x) * (0.12 - index * 0.008);
      y += (mouseY - y) * (0.12 - index * 0.008);

      dot.style.left = `${x}px`;
      dot.style.top = `${y}px`;

      dot.style.opacity = 1 - index * 0.1;

      dot.style.transform = `
        translate(-50%, -50%)
        scale(${1 - index * 0.08})
      `;

      requestAnimationFrame(animateDot);
    }

    animateDot();
  });

  const items = document.querySelectorAll(
    "h1,h2,h3,h4,h5,h6,p,a,button,span,.tour-card"
  );

  items.forEach((item) => {
    item.classList.add("vx12-hover");

    item.addEventListener("mouseenter", () => {
      cursor.classList.add("active");

      item.classList.add("active");

      if (
        item.classList.contains("tour-card") ||
        item.tagName === "A" ||
        item.tagName === "BUTTON"
      ) {
        item.classList.add("vx12-card-active");
      }
    });

    item.addEventListener("mouseleave", () => {
      cursor.classList.remove("active");

      item.classList.remove("active");
      item.classList.remove("vx12-card-active");
    });
  });

  window.addEventListener("mousedown", () => {
    cursor.style.transform =
      "translate(-50%, -50%) scale(.75)";
  });

  window.addEventListener("mouseup", () => {
    cursor.style.transform =
      "translate(-50%, -50%) scale(1)";
  });
}

/* ==========================================
   INIT ALL
========================================== */

document.addEventListener("DOMContentLoaded", () => {
  initStickyHeader();
  initEyesFollow();
  initServiceCard();
  initPremiumCursor();
});