// Nav scroll effect
window.addEventListener('scroll',()=>{
  document.getElementById('nav')?.classList.toggle('scrolled',window.scrollY>30);
});

// Reveal on scroll
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('vis')}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(e=>io.observe(e));

// Mobile hamburger menu
(function(){
  const nav = document.getElementById('nav');
  if(!nav) return;

  // Create burger button
  const burger = document.createElement('button');
  burger.className = 'burger';
  burger.setAttribute('aria-label','Menü öffnen');
  burger.innerHTML='<span></span><span></span><span></span>';
  nav.appendChild(burger);

  // Create mobile menu overlay
  const menu = document.createElement('div');
  menu.className = 'mobile-menu';
  menu.innerHTML = `
    <a href="index.html">Home</a>
    <a href="index.html#angebote">Angebote</a>
    <a href="index.html#firmen">Firmen</a>
    <a href="veranstaltungen.html">Events</a>
    <a href="shop.html">Shop</a>
    <a href="index.html#preise">Preise</a>
    <a href="index.html#stimmen">Stimmen</a>
    <a href="kontakt.html" class="mob-cta">Gratis Gespräch →</a>
  `;
  document.body.appendChild(menu);

  let open = false;
  function toggle(){
    open = !open;
    burger.classList.toggle('open', open);
    menu.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
    burger.setAttribute('aria-label', open ? 'Menü schliessen' : 'Menü öffnen');
  }

  burger.addEventListener('click', toggle);
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', ()=>{
    if(open) toggle();
  }));
})();
