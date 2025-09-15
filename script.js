// Yıl
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// WhatsApp
const WHATSAPP_NUMBER = '900000000000';
const WA_MSG = encodeURIComponent('Merhaba Buğra, haftalık içerik paketi hakkında görüşmek istiyorum.');
const waBtn = document.getElementById('whatsappBtn');
if (waBtn) {
  waBtn.addEventListener('click', () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${WA_MSG}`, '_blank');
  });
}

// Hamburger menü (tek gerçek kaynak)
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
    document.documentElement.style.overflow = 'hidden'; // arka plan kilidi
  };

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (nav.classList.contains('open')) closeMenu(); else openMenu();
  });

  // Linke tıklayınca kapat
  nav.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') closeMenu();
  });

  // Dışarı tıklayınca kapat
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && e.target !== btn && nav.classList.contains('open')) {
      closeMenu();
    }
  });

  // Desktop’a dönünce reset
  window.addEventListener('resize', () => {
    if (window.innerWidth > 820) closeMenu();
  });
})();
