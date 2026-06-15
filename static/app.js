(function(){'use strict';
 function ready(f){document.readyState!=='loading'?f():document.addEventListener('DOMContentLoaded',f);}
 ready(function(){
  var h=document.querySelector('.hdr');
  if(h){var on=function(){h.classList.toggle('scrolled',window.scrollY>8);};on();addEventListener('scroll',on,{passive:true});}
  var t=document.querySelector('.tog'),n=document.querySelector('.nav');
  if(t&&n){t.addEventListener('click',function(){var o=n.classList.toggle('open');t.setAttribute('aria-expanded',o?'true':'false');});
   n.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){n.classList.remove('open');});});}
  var fb=document.querySelector('.b-arrow button');
  if(fb){fb.addEventListener('click',function(){
   var rows=document.querySelectorAll('.bridge .b-row');if(rows.length<2)return;
   var a=rows[0].querySelector('.token'),b=rows[1].querySelector('.token');
   var tmp=a.innerHTML;a.innerHTML=b.innerHTML;b.innerHTML=tmp;
   var la=rows[0].querySelector('small'),lb=rows[1].querySelector('small');
   var t2=la.textContent;la.textContent=lb.textContent;lb.textContent=t2;
   fb.classList.toggle('flip');});}
 });
})();