(function(){
var mb=document.querySelector('.mb'),nav=document.getElementById('menu');
mb.addEventListener('click',function(){var o=nav.classList.toggle('open');mb.setAttribute('aria-expanded',o)});
nav.addEventListener('click',function(e){if(e.target.closest('a')){nav.classList.remove('open');mb.setAttribute('aria-expanded','false')}});
/* aktywna pozycja menu i dolny pasek na telefonie */
var linki=[].slice.call(nav.querySelectorAll('a[href^="#"]'));
var sek=linki.map(function(a){return document.querySelector(a.getAttribute('href'))});
var pas=document.getElementById('pasek');
function akt(){var y=scrollY+140,i=-1;sek.forEach(function(s,k){if(s&&s.offsetTop<=y)i=k});linki.forEach(function(a,k){a.classList.toggle('on',k===i)});
 pas.classList.toggle('on',scrollY>innerHeight*.8&&scrollY+innerHeight<document.body.scrollHeight-260)}
addEventListener('scroll',akt,{passive:true});akt();
/* powiększenie zdjęć wejść */
var lb=document.getElementById('lb'),li=lb.querySelector('img');
document.addEventListener('click',function(e){var b=e.target.closest('[data-zdj]');if(!b)return;li.src=b.dataset.zdj;li.alt=b.querySelector('img').alt;lb.classList.add('on')});
function zamknij(){lb.classList.remove('on')}
lb.addEventListener('click',function(e){if(e.target!==li)zamknij()});
addEventListener('keydown',function(e){if(e.key==='Escape')zamknij()});
document.getElementById('zapytanie').addEventListener('submit',function(e){e.preventDefault();this.querySelector('.ok').style.display='block'});
/* mapa po przewinięciu */
var m=document.getElementById('mapa');
if('IntersectionObserver' in window){new IntersectionObserver(function(en,o){if(en[0].isIntersecting){m.innerHTML='<iframe title="Mapa dojazdu do kancelarii" loading="lazy" src="'+m.dataset.src+'"></iframe>';o.disconnect()}},{rootMargin:'300px'}).observe(m)}
})();
