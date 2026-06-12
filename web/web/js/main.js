AOS.init({duration:680,easing:'ease-out-cubic',once:true,offset:60});

/* ── NAV SHRINK ON SCROLL ── */
(function(){
  const nav=document.querySelector('nav');
  window.addEventListener('scroll',()=>{
    nav.classList.toggle('scrolled',window.scrollY>60);
  },{passive:true});
})();

/* ── HERO FLOATING PARTICLES ── */
(function(){
  const hero=document.querySelector('.hero');
  if(!hero)return;
  for(let i=0;i<14;i++){
    const p=document.createElement('div');
    p.className='particle';
    const size=Math.random()*6+3;
    p.style.cssText=`width:${size}px;height:${size}px;background:rgba(30,80,160,${Math.random()*.12+.04});left:${Math.random()*100}%;bottom:${Math.random()*40}%;animation-duration:${Math.random()*4+5}s;animation-delay:${Math.random()*5}s`;
    hero.appendChild(p);
  }
})();

new Swiper('.swiper-hero',{
  slidesPerView:1,loop:true,
  autoplay:{delay:4200,disableOnInteraction:false},
  pagination:{el:'.swiper-pagination-hero',clickable:true},
  effect:'fade',fadeEffect:{crossFade:true},speed:900,
});

new Swiper('.swiper-test',{
  slidesPerView:1,spaceBetween:24,loop:true,
  autoplay:{delay:5000,disableOnInteraction:false},
  pagination:{el:'.swiper-pagination',clickable:true},
  navigation:{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev'},
  breakpoints:{640:{slidesPerView:2},900:{slidesPerView:3}}
});

new Swiper('.swiper-logos',{
  slidesPerView:2,spaceBetween:16,loop:true,
  autoplay:{delay:2500,disableOnInteraction:false},
  speed:700,
  breakpoints:{480:{slidesPerView:3},768:{slidesPerView:4},1024:{slidesPerView:5}}
});

function goTo(id){document.getElementById(id).scrollIntoView({behavior:'smooth'});}

(function(){
  const links=[
    {id:'srv',btn:0},{id:'why',btn:1},
    {id:'test',btn:2},{id:'faq',btn:3},{id:'cita',btn:4}
  ];
  const btns=document.querySelectorAll('.nav-link');
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        const m=links.find(l=>l.id===e.target.id);
        if(m){btns.forEach(b=>b.classList.remove('active'));if(btns[m.btn])btns[m.btn].classList.add('active');}
      }
    });
  },{rootMargin:'-40% 0px -55% 0px'});
  links.forEach(l=>{const el=document.getElementById(l.id);if(el)obs.observe(el);});
})();

function toggleFaq(btn){
  const a=btn.nextElementSibling,o=btn.classList.contains('open');
  document.querySelectorAll('.faq-q.open').forEach(b=>{b.classList.remove('open');b.nextElementSibling.classList.remove('show');});
  if(!o){btn.classList.add('open');a.classList.add('show');}
}

(function(){
  const bar=document.getElementById('scroll-bar');
  window.addEventListener('scroll',()=>{
    const pct=(window.scrollY/(document.body.scrollHeight-window.innerHeight))*100;
    bar.style.width=Math.min(pct,100)+'%';
  },{passive:true});
})();

(function(){
  const els=document.querySelectorAll('[data-count]');
  if(!els.length)return;
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(!e.isIntersecting)return;
      obs.unobserve(e.target);
      const el=e.target,end=+el.dataset.count,
            pre=el.dataset.prefix||'',suf=el.dataset.suffix||'',
            dur=1400,step=16;
      let start=0,t=null;
      const tick=()=>{
        start+=end/(dur/step);
        if(start>=end){el.textContent=pre+end+suf;return;}
        el.textContent=pre+Math.round(start)+suf;
        t=setTimeout(tick,step);
      };
      tick();
    });
  },{threshold:0.5});
  els.forEach(el=>obs.observe(el));
})();

(function(){
  const cards=document.querySelectorAll('.srv-card,.why-card,.prof-card');
  cards.forEach(c=>{c.style.opacity='0';c.style.transform='translateY(28px)';c.style.transition='opacity .5s ease, transform .5s ease';});
  const obs=new IntersectionObserver(entries=>{
    entries.forEach((e,i)=>{
      if(!e.isIntersecting)return;
      obs.unobserve(e.target);
      setTimeout(()=>{e.target.style.opacity='1';e.target.style.transform='translateY(0)';},
        parseInt(e.target.dataset.aosDelay||0));
    });
  },{threshold:0.12});
  cards.forEach(c=>obs.observe(c));
})();

function submitForm(){
  const n=document.getElementById('f-name').value.trim(),
        t=document.getElementById('f-tel').value.trim(),
        e=document.getElementById('f-email').value.trim(),
        m=document.getElementById('f-motivo').value,
        f=document.getElementById('f-franja').value,
        err=document.getElementById('form-error');
  if(!n||!t||!e||!m||!f){err.style.display='block';return;}
  err.style.display='none';
  document.getElementById('form-body').style.display='none';
  document.getElementById('form-ok').style.display='block';
}
