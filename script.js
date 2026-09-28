
const menuBtn=document.getElementById('menuBtn');
const nav=document.getElementById('mainNav');
if(menuBtn) menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('nav .has-sub > button').forEach(btn=>btn.addEventListener('click',e=>{if(window.innerWidth<=850){e.preventDefault();btn.parentElement.classList.toggle('open')}}));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>{if(window.innerWidth<=850)nav.classList.remove('open')}));
