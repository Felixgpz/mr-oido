/* ── DEMO DATA ── */
const pacientes = [
  {
    id:1, nombre:'Antonio Rodríguez', edad:78, perfil:'Tercera edad',
    perdida:'Moderada-severa bilateral (55–70 dB)', audifono:'Oticon Real 1', marca:'Oticon',
    estado:'activo', ultimaVisita:'2026-04-10', proxRevision:'2027-04-10',
    ajusteRemoto:false, color:'av-blue',
    notas:'Prefiere citas por la mañana. Contacto familiar: hijo Jordi · 620 XXX XXX.',
    historial:[
      {fecha:'2026-04-10', texto:'Revisión anual. Audición estable. Sin cambios en programación.'},
      {fecha:'2025-10-03', texto:'Cambio de filtros y limpieza. Se ajusta ganancia para ambientes ruidosos.'},
      {fecha:'2025-04-08', texto:'Entrega y adaptación del Oticon Real 1. Primera semana con 4h/día.'},
    ]
  },
  {
    id:2, nombre:'Sandra Martínez', edad:41, perfil:'Adulto activo',
    perdida:'Leve-moderada oído derecho (35–45 dB)', audifono:'Phonak Audéo Life R', marca:'Phonak',
    estado:'activo', ultimaVisita:'2026-05-22', proxRevision:'2027-05-22',
    ajusteRemoto:true, color:'av-sky',
    notas:'Solicita ajuste remoto en lugar de visita presencial siempre que sea posible.',
    historial:[
      {fecha:'2026-05-22', texto:'Ajuste remoto vía app myPhonak. Reducción de reverberación en reuniones.'},
      {fecha:'2026-01-14', texto:'Revisión semestral. Satisfecha con el rendimiento. Sin incidencias.'},
      {fecha:'2025-07-09', texto:'Adaptación Phonak Audéo Life R. Período de prueba 30 días.'},
    ]
  },
  {
    id:3, nombre:'Carles Font', edad:65, perfil:'Tercera edad',
    perdida:'Severa bilateral (75–85 dB)', audifono:'Signia Pure Charge&Go IX', marca:'Signia',
    estado:'pendiente', ultimaVisita:'2025-11-20', proxRevision:'2026-05-20',
    ajusteRemoto:false, color:'av-navy',
    notas:'Revisión anual vencida. Pendiente de contactar para concretar cita.',
    historial:[
      {fecha:'2025-11-20', texto:'Ajuste de potencia. Se sube ganancia en frecuencias 2–4 kHz.'},
      {fecha:'2025-05-15', texto:'Revisión anual. Audiometría sin cambios significativos.'},
      {fecha:'2024-11-08', texto:'Entrega Signia Pure Charge&Go IX. Satisfecho con discreción.'},
    ]
  },
  {
    id:4, nombre:'Rosa Torres', edad:65, perfil:'Tercera edad',
    perdida:'Moderada bilateral (45–60 dB)', audifono:'Widex Moment Sheer', marca:'Widex',
    estado:'activo', ultimaVisita:'2026-03-18', proxRevision:'2027-03-18',
    ajusteRemoto:false, color:'av-gold',
    notas:'Muy contenta con el sonido natural del Widex. Sin quejas.',
    historial:[
      {fecha:'2026-03-18', texto:'Revisión anual. Audiometría estable. Sin cambios.'},
      {fecha:'2025-09-05', texto:'Limpieza y cambio de domo. Todo en orden.'},
      {fecha:'2025-03-20', texto:'Primera revisión post-adaptación. Período de adaptación completado.'},
    ]
  },
  {
    id:5, nombre:'Miquel Ferrer', edad:55, perfil:'Adulto activo',
    perdida:'Leve oído izquierdo (30–40 dB)', audifono:'Oticon More 1 (prueba)', marca:'Oticon',
    estado:'prueba', ultimaVisita:'2026-06-05', proxRevision:'2026-06-30',
    ajusteRemoto:true, color:'av-orange',
    notas:'En período de prueba de 30 días. Próxima revisión al final del período.',
    historial:[
      {fecha:'2026-06-05', texto:'Inicio período de prueba con Oticon More 1. Primera semana de adaptación.'},
      {fecha:'2026-05-28', texto:'Audiometría diagnóstica. Pérdida leve confirmada en oído izquierdo.'},
    ]
  },
  {
    id:6, nombre:'Lucía Puig', edad:6, perfil:'Niños / Familia',
    perdida:'Moderada-severa bilateral (60–70 dB) — pérdida congénita', audifono:'Oticon Play PX', marca:'Oticon',
    estado:'activo', ultimaVisita:'2026-05-10', proxRevision:'2026-11-10',
    ajusteRemoto:false, color:'av-green',
    notas:'Ayudas PUA tramitadas y aprobadas. Contacto: padres — Montse 635 XXX XXX.',
    historial:[
      {fecha:'2026-05-10', texto:'Revisión semestral. Comprensión del habla mejora en colegio.'},
      {fecha:'2025-11-08', texto:'Ajuste de programas por crecimiento del canal auditivo.'},
      {fecha:'2025-05-20', texto:'Entrega y primera adaptación. Padres muy involucrados.'},
    ]
  },
  {
    id:7, nombre:'Pere Sala', edad:72, perfil:'Tercera edad',
    perdida:'Moderada bilateral (50–65 dB)', audifono:'ReSound Nexia', marca:'ReSound',
    estado:'activo', ultimaVisita:'2026-04-28', proxRevision:'2027-04-28',
    ajusteRemoto:true, color:'av-blue',
    notas:'Usa la app ReSound Smart 3D. Hace ajustes de volumen él mismo sin problema.',
    historial:[
      {fecha:'2026-04-28', texto:'Ajuste remoto. Se añade programa para TV con streaming directo.'},
      {fecha:'2025-10-15', texto:'Revisión anual. Audiometría estable.'},
      {fecha:'2025-04-30', texto:'Entrega ReSound Nexia. Contento con la conectividad Bluetooth.'},
    ]
  },
  {
    id:8, nombre:'Montserrat Vila', edad:68, perfil:'Tercera edad',
    perdida:'Severa-profunda oído derecho (80–90 dB)', audifono:'Starkey Evolv AI', marca:'Starkey',
    estado:'pendiente', ultimaVisita:'2025-12-02', proxRevision:'2026-06-02',
    ajusteRemoto:false, color:'av-navy',
    notas:'Revisión semestral vencida. Llamar esta semana.',
    historial:[
      {fecha:'2025-12-02', texto:'Revisión semestral. Se sube potencia. Mejoría notable en comprensión.'},
      {fecha:'2025-06-18', texto:'Ajuste programas: calle, casa, música. Muy satisfecha.'},
      {fecha:'2025-01-14', texto:'Entrega Starkey Evolv AI. Primer audífono, período de adaptación gradual.'},
    ]
  },
];

const hoy = new Date('2026-06-12');
const citas = [
  {id:1, pacId:3, fecha:'2026-06-13', hora:'9:30',  motivo:'Revisión anual',       estado:'confirmada'},
  {id:2, pacId:8, fecha:'2026-06-13', hora:'11:00', motivo:'Revisión semestral',   estado:'pendiente'},
  {id:3, pacId:5, fecha:'2026-06-16', hora:'10:00', motivo:'Seguimiento prueba',   estado:'confirmada'},
  {id:4, pacId:2, fecha:'2026-06-18', hora:'9:00',  motivo:'Ajuste remoto',        estado:'pendiente'},
  {id:5, pacId:7, fecha:'2026-06-20', hora:'11:30', motivo:'Ajuste de audífono',   estado:'pendiente'},
  {id:6, pacId:1, fecha:'2026-06-25', hora:'10:30', motivo:'Revisión anual',       estado:'pendiente'},
  {id:7, pacId:6, fecha:'2026-06-05', hora:'9:00',  motivo:'Revisión semestral',   estado:'realizada'},
  {id:8, pacId:4, fecha:'2026-05-22', hora:'10:00', motivo:'Revisión anual',       estado:'realizada'},
  {id:9, pacId:2, fecha:'2026-05-22', hora:'11:00', motivo:'Ajuste remoto',        estado:'realizada'},
  {id:10,pacId:1, fecha:'2026-04-10', hora:'9:30',  motivo:'Revisión anual',       estado:'realizada'},
  {id:11,pacId:7, fecha:'2026-04-28', hora:'10:00', motivo:'Ajuste de audífono',   estado:'realizada'},
  {id:12,pacId:3, fecha:'2026-06-08', hora:'11:30', motivo:'Revisión anual',       estado:'cancelada'},
];

const actividad = [
  {color:'green', txt:'Cita realizada con Lucía Puig', tiempo:'Hace 1 semana'},
  {color:'blue',  txt:'Ajuste remoto completado — Sandra Martínez', tiempo:'Hace 3 semanas'},
  {color:'orange',txt:'Revisión vencida — Montserrat Vila', tiempo:'Hace 10 días'},
  {color:'green', txt:'Período de prueba iniciado — Miquel Ferrer', tiempo:'Hace 1 semana'},
  {color:'blue',  txt:'Revisión anual realizada — Pere Sala', tiempo:'Hace 6 semanas'},
];

/* ── UTILS ── */
function fmtFecha(iso){
  const [y,m,d]=iso.split('-');
  return `${d}/${m}/${y}`;
}
function getPac(id){return pacientes.find(p=>p.id===id);}
function pillHtml(estado){return `<span class="pill ${estado}">${estado.charAt(0).toUpperCase()+estado.slice(1)}</span>`;}

/* ── LOGIN ── */
document.getElementById('btn-login').addEventListener('click', doLogin);
document.getElementById('l-pass').addEventListener('keydown', e=>{if(e.key==='Enter')doLogin();});

function doLogin(){
  const u=document.getElementById('l-user').value.trim();
  const p=document.getElementById('l-pass').value.trim();
  const err=document.getElementById('l-error');
  if(u==='admin'&&p==='1234'){
    err.style.display='none';
    document.getElementById('login-screen').classList.add('hidden');
    document.getElementById('app').classList.add('visible');
    init();
  } else {
    err.style.display='block';
  }
}

document.getElementById('btn-logout').addEventListener('click',()=>{
  document.getElementById('app').classList.remove('visible');
  document.getElementById('login-screen').classList.remove('hidden');
  document.getElementById('l-pass').value='';
});

/* ── NAVIGATION ── */
const pages={
  dashboard:{title:'Dashboard',sub:'Resumen general de la clínica'},
  pacientes:{title:'Pacientes',sub:'Gestión de la base de datos de pacientes'},
  citas:{title:'Citas',sub:'Agenda y seguimiento de visitas'},
};

document.querySelectorAll('.sb-btn').forEach(btn=>{
  btn.addEventListener('click',()=>showPage(btn.dataset.page,btn));
});
document.querySelectorAll('[data-goto]').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const target=btn.dataset.goto;
    const sbBtn=document.querySelector(`.sb-btn[data-page="${target}"]`);
    showPage(target,sbBtn);
  });
});

function showPage(id, btn){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('pg-'+id).classList.add('active');
  document.querySelectorAll('.sb-btn').forEach(b=>b.classList.remove('active'));
  if(btn)btn.classList.add('active');
  document.getElementById('page-title').textContent=pages[id].title;
  document.getElementById('page-sub').textContent=pages[id].sub;
}

/* ── INIT ── */
function init(){
  renderToday();
  renderDashboard();
  renderPacientes();
  renderCitas();
  renderModal();
}

function renderToday(){
  const dias=['domingo','lunes','martes','miércoles','jueves','viernes','sábado'];
  const meses=['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
  document.getElementById('today-lbl').textContent=`${dias[hoy.getDay()]}, ${hoy.getDate()} de ${meses[hoy.getMonth()]}`;
}

/* ── DASHBOARD ── */
function renderDashboard(){
  const proximas=citas.filter(c=>c.estado==='pendiente'||c.estado==='confirmada').sort((a,b)=>a.fecha.localeCompare(b.fecha)).slice(0,5);
  const tbody=document.getElementById('dash-citas-body');
  tbody.innerHTML=proximas.map(c=>{
    const pac=getPac(c.pacId);
    return `<tr>
      <td>${fmtFecha(c.fecha)}</td>
      <td>${c.hora}</td>
      <td><div class="pac-row"><div class="pac-av ${pac.color}">${pac.nombre[0]}</div><span class="pac-name">${pac.nombre}</span></div></td>
      <td>${c.motivo}</td>
      <td>${pillHtml(c.estado)}</td>
    </tr>`;
  }).join('');

  const al=document.getElementById('actividad-list');
  al.innerHTML=actividad.map(a=>`
    <div class="act-item">
      <div class="act-dot ${a.color}"></div>
      <div><div class="act-txt">${a.txt}</div><div class="act-time">${a.tiempo}</div></div>
    </div>`).join('');
}

/* ── PACIENTES ── */
function renderPacientes(filtroNombre='',filtroEstado='',filtroPerfil=''){
  let lista=pacientes;
  if(filtroNombre)lista=lista.filter(p=>p.nombre.toLowerCase().includes(filtroNombre.toLowerCase()));
  if(filtroEstado)lista=lista.filter(p=>p.estado===filtroEstado);
  if(filtroPerfil)lista=lista.filter(p=>p.perfil===filtroPerfil);

  document.getElementById('pac-tbody').innerHTML=lista.map(p=>`
    <tr>
      <td><div class="pac-row"><div class="pac-av ${p.color}">${p.nombre[0]}</div><div><div class="pac-name">${p.nombre}</div><div class="pac-sub">${p.marca}</div></div></div></td>
      <td>${p.edad} años</td>
      <td>${p.perfil}</td>
      <td style="font-size:12px">${p.audifono}</td>
      <td>${fmtFecha(p.ultimaVisita)}</td>
      <td>${pillHtml(p.estado)}</td>
      <td><button class="btn-ficha" onclick="openDrawer(${p.id})">Ver ficha</button></td>
    </tr>`).join('');
}

document.getElementById('search-pac').addEventListener('input',function(){
  renderPacientes(this.value,document.getElementById('filter-estado').value,document.getElementById('filter-perfil').value);
});
document.getElementById('filter-estado').addEventListener('change',function(){
  renderPacientes(document.getElementById('search-pac').value,this.value,document.getElementById('filter-perfil').value);
});
document.getElementById('filter-perfil').addEventListener('change',function(){
  renderPacientes(document.getElementById('search-pac').value,document.getElementById('filter-estado').value,this.value);
});

/* ── CITAS ── */
function renderCitas(filtro=''){
  let lista=filtro?citas.filter(c=>c.estado===filtro):citas;
  lista=[...lista].sort((a,b)=>b.fecha.localeCompare(a.fecha));
  document.getElementById('citas-tbody').innerHTML=lista.map(c=>{
    const pac=getPac(c.pacId);
    return `<tr>
      <td>${fmtFecha(c.fecha)}</td>
      <td>${c.hora}</td>
      <td><div class="pac-row"><div class="pac-av ${pac.color}" style="width:28px;height:28px;font-size:11px">${pac.nombre[0]}</div><span class="pac-name">${pac.nombre}</span></div></td>
      <td>${c.motivo}</td>
      <td>${pillHtml(c.estado)}</td>
      <td><button class="btn-ficha" onclick="openDrawer(${pac.id})">Ficha</button></td>
    </tr>`;
  }).join('');
}

document.getElementById('filter-citas').addEventListener('change',function(){renderCitas(this.value);});

/* ── DRAWER (FICHA PACIENTE) ── */
function openDrawer(id){
  const p=getPac(id);
  document.getElementById('dr-nombre').textContent=p.nombre;
  document.getElementById('dr-badge').textContent=p.perfil;
  document.getElementById('drawer-body').innerHTML=`
    <div class="dr-section">
      <h4>Datos personales</h4>
      <div class="dr-row"><span>Edad</span><span>${p.edad} años</span></div>
      <div class="dr-row"><span>Perfil</span><span>${p.perfil}</span></div>
      <div class="dr-row"><span>Estado</span><span>${pillHtml(p.estado)}</span></div>
    </div>
    <div class="dr-section">
      <h4>Audiología</h4>
      <div class="dr-row"><span>Pérdida auditiva</span><span style="max-width:200px;text-align:right">${p.perdida}</span></div>
      <div class="dr-row"><span>Audífono</span><span>${p.audifono}</span></div>
      <div class="dr-row"><span>Marca</span><span>${p.marca}</span></div>
      <div class="dr-row"><span>Ajuste remoto</span><span>${p.ajusteRemoto?'✅ Sí':'—'}</span></div>
    </div>
    <div class="dr-section">
      <h4>Visitas</h4>
      <div class="dr-row"><span>Última visita</span><span>${fmtFecha(p.ultimaVisita)}</span></div>
      <div class="dr-row"><span>Próxima revisión</span><span>${fmtFecha(p.proxRevision)}</span></div>
    </div>
    <div class="dr-section">
      <h4>Historial de visitas</h4>
      ${p.historial.map(h=>`<div class="dr-hist-item"><div class="dr-hist-date">${fmtFecha(h.fecha)}</div><div class="dr-hist-txt">${h.texto}</div></div>`).join('')}
    </div>
    <div class="dr-section">
      <h4>Notas</h4>
      <div class="dr-nota">${p.notas}</div>
    </div>`;
  document.getElementById('drawer').classList.add('open');
  document.getElementById('drawer-overlay').classList.add('show');
}

function closeDrawer(){
  document.getElementById('drawer').classList.remove('open');
  document.getElementById('drawer-overlay').classList.remove('show');
}

document.getElementById('drawer-overlay').addEventListener('click',closeDrawer);
document.getElementById('btn-close-drawer').addEventListener('click',closeDrawer);

/* ── MODAL NUEVA CITA ── */
function renderModal(){
  const sel=document.getElementById('m-pac');
  pacientes.forEach(p=>{
    const o=document.createElement('option');
    o.value=p.id;o.textContent=p.nombre;
    sel.appendChild(o);
  });
  const today=hoy.toISOString().split('T')[0];
  document.getElementById('m-fecha').value=today;
  document.getElementById('m-fecha').min=today;
}

document.getElementById('btn-nueva-cita').addEventListener('click',()=>{
  document.getElementById('modal-cita').classList.add('open');
  document.getElementById('modal-overlay').classList.add('show');
  document.getElementById('m-ok').style.display='none';
  document.getElementById('m-err').style.display='none';
});

function closeModal(){
  document.getElementById('modal-cita').classList.remove('open');
  document.getElementById('modal-overlay').classList.remove('show');
}

document.getElementById('modal-overlay').addEventListener('click',closeModal);
document.getElementById('btn-close-modal').addEventListener('click',closeModal);

document.getElementById('btn-guardar-cita').addEventListener('click',()=>{
  const pacId=+document.getElementById('m-pac').value;
  const fecha=document.getElementById('m-fecha').value;
  const hora=document.getElementById('m-hora').value;
  const motivo=document.getElementById('m-motivo').value;
  const err=document.getElementById('m-err');
  const ok=document.getElementById('m-ok');

  if(!pacId||!fecha){err.style.display='block';return;}
  err.style.display='none';

  const nueva={id:citas.length+1,pacId,fecha,hora,motivo,estado:'pendiente'};
  citas.push(nueva);
  renderDashboard();
  renderCitas(document.getElementById('filter-citas').value);

  ok.style.display='flex';
  setTimeout(closeModal, 1600);
});
