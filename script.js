const yearEl=document.getElementById('year');if(yearEl)yearEl.textContent=new Date().getFullYear();
const WHATSAPP_NUMBER='900000000000';const WA_MSG=encodeURIComponent('Merhaba Buğra, haftalık içerik paketi hakkında görüşmek istiyorum.');
const waBtn=document.getElementById('whatsappBtn');if(waBtn){waBtn.addEventListener('click',()=>{window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${WA_MSG}`,'_blank');});}
const menuBtn=document.getElementById('menuBtn');const nav=document.querySelector('.nav nav');if(menuBtn&&nav){menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));}
const style=document.createElement('style');style.innerHTML=`.nav nav.open{position:fixed;inset:60px 16px auto 16px;background:#fff;border:1px solid #e8e8ec;border-radius:12px;padding:12px;display:grid;gap:10px}`;document.head.appendChild(style);
