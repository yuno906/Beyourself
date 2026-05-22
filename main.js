// Mobile menu
function toggleMenu(){
  document.getElementById('burger').classList.toggle('open');
  document.getElementById('navLinks').classList.toggle('open');
}

// Shared nav scroll effect
window.addEventListener('scroll',()=>{
  document.getElementById('nav')?.classList.toggle('scrolled',window.scrollY>30);
});

// Reveal on scroll
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('vis')}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(e=>io.observe(e));
