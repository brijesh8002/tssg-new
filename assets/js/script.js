// load header
fetch("./assets/include/header.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;

    // after loading header, attach events
    initNavbar();
  });

// load footer
fetch("./assets/include/footer.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  });

// navbar functions
function initNavbar() {
  // mobile menu
  window.toggleMenu = function () {
    document.getElementById("navLinks").classList.toggle("active");
  };

  // dropdown click (mobile)
  const tourLink = document.querySelector(".tour-link");
  // const tourIcon = document.querySelector(".tour-link i");
  if (tourLink) {
    tourLink.addEventListener("click", function () {
      document.querySelector(".tour-drop").classList.toggle("active");

    });
  }
}



const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});


// hero section
// <!-- EYES FOLLOW CURSOR -->


const vx7Eyes = document.querySelectorAll('.vx7-eye-ball');

document.addEventListener('mousemove', (e)=>{

  vx7Eyes.forEach((eye)=>{

    const rect = eye.parentElement.getBoundingClientRect();

    const eyeX = rect.left + rect.width / 2;
    const eyeY = rect.top + rect.height / 2;

    const angle = Math.atan2(e.clientY - eyeY, e.clientX - eyeX);

    const moveX = Math.cos(angle) * 3;
    const moveY = Math.sin(angle) * 3;

    eye.style.transform = `translate(${moveX}px, ${moveY}px)`;

  });

});





    // /* CARD DATA CHANGE */

const vx7CardData = [

  {
    icon:'bi-cart3',
    title:'Ecommerce Development',
    desc:'Sell online with ease. Robust stores launched for your brand.',
    stat1:'250+',
    statText1:'STORES',
    stat2:'2X',
    statText2:'SALES'
  },

  {
    icon:'bi-code-slash',
    title:'Website Development',
    desc:'Modern responsive websites built for startups and businesses.',
    stat1:'500+',
    statText1:'WEBSITES',
    stat2:'99%',
    statText2:'SATISFACTION'
  },

  {
    icon:'bi-phone',
    title:'Mobile App Design',
    desc:'Premium mobile experiences crafted for Android and iOS users.',
    stat1:'120+',
    statText1:'APPS',
    stat2:'4.9★',
    statText2:'RATINGS'
  },

  {
    icon:'bi-bar-chart',
    title:'Digital Marketing',
    desc:'Scale your brand visibility and grow faster with smart campaigns.',
    stat1:'10M+',
    statText1:'REACH',
    stat2:'5X',
    statText2:'GROWTH'
  }

];

let vx7Current = 0;

const vx7Card = document.querySelector('.vx7-service-card');

function vx7UpdateCard(){

  vx7Current++;

  if(vx7Current >= vx7CardData.length){
    vx7Current = 0;
  }

  const data = vx7CardData[vx7Current];

  /* ANIMATION */
  vx7Card.classList.remove('vx7-card-animate');

  void vx7Card.offsetWidth;

  vx7Card.classList.add('vx7-card-animate');

  /* UPDATE DATA */
  document.getElementById('vx7CardIcon').className = `bi ${data.icon}`;

  document.getElementById('vx7CardTitle').innerText = data.title;

  document.getElementById('vx7CardDesc').innerText = data.desc;

  document.getElementById('vx7Stat1').innerText = data.stat1;

  document.getElementById('vx7StatText1').innerText = data.statText1;

  document.getElementById('vx7Stat2').innerText = data.stat2;

  document.getElementById('vx7StatText2').innerText = data.statText2;

}

/* CHANGE EVERY 3 SEC */
setInterval(vx7UpdateCard, 5000);




/* =========================
   ULTRA PREMIUM CURSOR
========================= */

const vx12Cursor = document.querySelector('.vx12-cursor');

const vx12Dots = document.querySelectorAll('.vx12-dot');

/* MOUSE POSITION */
let mouseX = 0;
let mouseY = 0;

/* CURSOR POSITION */
let cursorX = 0;
let cursorY = 0;

/* TRACK MOUSE */
window.addEventListener('mousemove',(e)=>{

  mouseX = e.clientX;
  mouseY = e.clientY;

});

/* SMOOTH CURSOR ANIMATION */
function vx12AnimateCursor(){

  cursorX += (mouseX - cursorX) * 0.18;
  cursorY += (mouseY - cursorY) * 0.18;

  vx12Cursor.style.left = `${cursorX}px`;
  vx12Cursor.style.top = `${cursorY}px`;

  requestAnimationFrame(vx12AnimateCursor);

}

vx12AnimateCursor();

/* DOT TRAIL */
vx12Dots.forEach((dot,index)=>{

  let x = 0;
  let y = 0;

  function animateDot(){

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

/* HOVER ITEMS */
const vx12Items = document.querySelectorAll(
  'h1,h2,h3,h4,h5,h6,p,a,button,span,.tour-card'
);

/* HOVER EFFECT */
vx12Items.forEach((item)=>{

  item.classList.add('vx12-hover');

  item.addEventListener('mouseenter',()=>{

    vx12Cursor.classList.add('active');

    item.classList.add('active');

    if(
      item.classList.contains('tour-card') ||
      item.tagName === 'A' ||
      item.tagName === 'BUTTON'
    ){
      item.classList.add('vx12-card-active');
    }

  });

  item.addEventListener('mouseleave',()=>{

    vx12Cursor.classList.remove('active');

    item.classList.remove('active');

    item.classList.remove('vx12-card-active');

  });

});

/* CLICK EFFECT */
window.addEventListener('mousedown',()=>{

  vx12Cursor.style.transform =
  'translate(-50%, -50%) scale(.75)';

});

window.addEventListener('mouseup',()=>{

  vx12Cursor.style.transform =
  'translate(-50%, -50%) scale(1)';

});