/* ── CLOCK ── */
function updateClock(){const n=new Date(),h=n.getHours(),m=String(n.getMinutes()).padStart(2,'0');document.getElementById('clock').textContent=h+':'+m;}
updateClock();setInterval(updateClock,10000);

/* ── NAVIGATION ── */
let current='pg-splash',hist=[];
function goTo(id){
  const c=document.getElementById(current),n=document.getElementById(id);
  if(!n||id===current)return;
  c.classList.remove('active');c.classList.add('exit-left');
  n.classList.add('active');
  setTimeout(()=>c.classList.remove('exit-left'),350);
  hist.push(current);current=id;
}
function goBack(){
  if(!hist.length)return;
  const p=hist.pop(),c=document.getElementById(current),b=document.getElementById(p);
  c.classList.remove('active');b.classList.remove('exit-left');b.classList.add('active');
  current=p;
}
function setNav(btn,id){
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  goTo(id);
}

/* ── LOGIN ── */
document.getElementById('btn-login').addEventListener('click',function(){
  const u=document.getElementById('inp-user').value.trim(),
        p=document.getElementById('inp-pass').value.trim(),
        e=document.getElementById('login-error');
  if(u==='demo'&&p==='1234'){e.style.display='none';goTo('pg-home');}
  else{e.style.display='block';}
});
document.getElementById('inp-pass').addEventListener('keydown',e=>{if(e.key==='Enter')document.getElementById('btn-login').click();});

/* ── CALENDAR ── */
const avail=[2,3,7,8,9,14,15,16,17,22,23,24,28,29,30],
      times=['9:00','9:30','10:00','10:30','11:00','11:30','16:00','16:30','17:00'];
let selDay=null,selSlot=null;
function buildCal(){
  const cal=document.getElementById('cal');
  ['L','M','X','J','V','S','D'].forEach(d=>{const h=document.createElement('div');h.className='cal-day header';h.textContent=d;cal.appendChild(h);});
  for(let i=0;i<2;i++){const e=document.createElement('div');e.className='cal-day';cal.appendChild(e);}
  for(let d=1;d<=31;d++){
    const el=document.createElement('div'),ia=avail.includes(d),ip=d<10;
    el.className='cal-day'+(ip?' past':ia?' available':'');
    el.textContent=d;
    if(ia&&!ip)el.addEventListener('click',()=>selectDay(d,el));
    cal.appendChild(el);
  }
}
function selectDay(d,el){
  document.querySelectorAll('.cal-day.selected').forEach(x=>{x.classList.remove('selected');x.classList.add('available');});
  el.classList.add('selected');el.classList.remove('available');
  selDay=d;selSlot=null;
  const ss=document.getElementById('slots-section'),sc=document.getElementById('slots');
  sc.innerHTML='';
  times.filter(()=>Math.random()>.3).forEach(t=>{
    const b=document.createElement('button');b.className='slot';b.textContent=t;
    b.addEventListener('click',()=>selectSlot(t,b));sc.appendChild(b);
  });
  ss.style.display='block';
  document.getElementById('btn-confirm').style.display='none';
  document.getElementById('confirm-banner').style.display='none';
}
function selectSlot(t,el){
  document.querySelectorAll('.slot.selected').forEach(x=>x.classList.remove('selected'));
  el.classList.add('selected');selSlot=t;
  document.getElementById('btn-confirm').style.display='block';
}
function confirmCita(){
  const b=document.getElementById('confirm-banner');
  b.style.display='block';
  document.getElementById('confirm-text').textContent=selDay+' de julio · '+selSlot+' h · Mr. Oído Barcelona';
  document.getElementById('btn-confirm').style.display='none';
  document.getElementById('slots-section').style.display='none';
  document.querySelectorAll('.cal-day.selected').forEach(x=>{x.classList.remove('selected');x.classList.add('available');});
  selDay=null;selSlot=null;
}

/* ── SOPORTE ── */
function toggleProb(id){
  const c=document.getElementById(id),s=c.querySelector('.prob-steps'),o=c.classList.contains('open');
  document.querySelectorAll('.prob-card.open').forEach(x=>{x.classList.remove('open');x.querySelector('.prob-steps').classList.remove('show');});
  if(!o){c.classList.add('open');s.classList.add('show');}
}

/* ── AUDÍFONOS ── */
function selectProg(btn){
  document.querySelectorAll('.prog-btn.active').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
}

buildCal();
setTimeout(()=>goTo('pg-login'),2300);
