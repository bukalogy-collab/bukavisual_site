// Yıl
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// WhatsApp
const WHATSAPP_NUMBER = '900000000000';
const WA_MSG = encodeURIComponent('Merhaba Buğra, haftalık içerik paketi hakkında görüşmek istiyorum.');
const wa = document.getElementById('whatsappBtn');
if (wa) wa.addEventListener('click', () => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${WA_MSG}`, '_blank'));

// Hamburger menü
(function () {
  const btn = document.getElementById('menuBtn');
  const nav = document.getElementById('siteNav');
  if (!btn || !nav) return;

  const closeMenu = () => {
    nav.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    document.documentElement.style.overflow = '';
  };
  const openMenu = () => {
    nav.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
    document.documentElement.style.overflow = 'hidden';
  };

  btn.addEventListener('click', (e) => {
    e.preventDefault(); e.stopPropagation();
    nav.classList.contains('open') ? closeMenu() : openMenu();
  });
  nav.addEventListener('click', (e) => { if (e.target.tagName === 'A') closeMenu(); });
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && e.target !== btn && nav.classList.contains('open')) closeMenu();
  });
  window.addEventListener('resize', () => { if (window.innerWidth > 820) closeMenu(); });
})();
