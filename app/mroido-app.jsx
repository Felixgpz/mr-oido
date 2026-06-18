const {useState,useEffect,useRef,useCallback}=React;

/* ---------- data ---------- */
const PROFILE_IMG="https://felixgpz.github.io/mr-oido/assets/images/profile-juan.jpg";

const TIPS=[
  {ic:"droplets",t:"Limpieza semanal",d:"Limpia los filtros cada 2 semanas para mantener el sonido nítido."},
  {ic:"battery-charging",t:"Carga nocturna",d:"Recarga el audífono cada noche para una jornada completa de uso."},
  {ic:"volume-2",t:"Ambientes ruidosos",d:"Activa el programa “Exterior” en reuniones o lugares concurridos."},
];
const SLOTS=["09:30","10:30","12:00","16:30","18:00"];
const PROGRAMS=[
  {k:"Normal",ic:"circle"},{k:"Música",ic:"music"},
  {k:"Exterior",ic:"trees"},{k:"Teléfono",ic:"phone"},
];
const MAINT=[
  {k:"Próximo mantenimiento",v:"3 sep 2026"},
  {k:"Último ajuste remoto",v:"28 may 2026"},
  {k:"Filtro cambiado",v:"10 abr 2026"},
];
const SUPPORT=[
  {q:"Audífono sin sonido",steps:["Comprueba que el audífono está encendido.","Verifica que el volumen no está al mínimo.","Limpia el filtro con el cepillo incluido.","Si sigue sin funcionar, contacta el centro."]},
  {q:"Cómo limpiar el audífono",steps:["Apaga el audífono antes de limpiarlo.","Usa el cepillo para limpiar la cúpula y el filtro.","Pasa un paño seco por la carcasa.","Nunca uses agua ni alcohol directamente."]},
  {q:"Cambiar la pila",steps:["Abre la tapa del compartimento de pila.","Retira la pila gastada con cuidado.","Inserta la nueva respetando la polaridad (+/-).","Cierra y espera el pitido de encendido."]},
  {q:"Audífonos al revés",steps:["El derecho tiene marca roja y el izquierdo azul.","El receptor debe quedar orientado al canal auditivo.","Si notas molestia, comprueba los colores."]},
];
const HISTORY=[
  {t:"Revisión anual",d:"10 de enero 2025"},
  {t:"Ajuste de programa",d:"4 de octubre 2024"},
  {t:"Mantenimiento y limpieza",d:"17 de junio 2024"},
  {t:"Audiometría",d:"3 de enero 2024"},
];
const NOTIFS=[
  {ic:"calendar-check",t:"Cita confirmada",b:"Tu revisión anual está confirmada para el 15 de julio a las 10:30 h en Mr. Oído Barcelona.",d:"Hace 2 horas",unread:true},
  {ic:"wrench",t:"Mantenimiento próximo",b:"Tu audífono Phonak Audéo Lumity tiene mantenimiento programado en 3 semanas.",d:"Ayer",unread:true},
  {ic:"radio",t:"Ajuste remoto completado",b:"El audioprotesista ha actualizado el programa de música de tu audífono.",d:"28 may"},
  {ic:"lightbulb",t:"Consejo semanal",b:"Recuerda limpiar el filtro de tu audífono. Una limpieza regular mejora la calidad del sonido.",d:"20 may"},
  {ic:"star",t:"¿Cómo fue tu visita?",b:"Cuéntanos tu experiencia en la última visita al centro. Tu opinión nos ayuda a mejorar.",d:"10 ene"},
];
const CHAT0=[
  {who:"sys",txt:"Ajuste remoto disponible"},
  {who:"them",txt:"Hola Juan 👋 ¿Qué tal va el nuevo programa de música que activamos la semana pasada?",t:"10:02"},
  {who:"me",txt:"Hola Marta. Se escucha mucho mejor, gracias. En la tele aún noto algo de ruido.",t:"10:05"},
  {who:"them",txt:"Perfecto. Puedo afinar el programa “Exterior” desde aquí mismo, sin que vengas al centro. ¿Te parece?",t:"10:06"},
  {who:"me",txt:"Sí, estupendo.",t:"10:07"},
  {who:"sys",txt:"Ajuste remoto aplicado a tu audífono"},
  {who:"them",txt:"Listo ✅ Pruébalo esta tarde y me cuentas. Cualquier cosa, aquí estoy.",t:"10:09"},
];
const QUICK_REPLIES=["Gracias, lo pruebo 🙏","¿Cuándo es mi próxima cita?","Quiero pedir una revisión"];

function icon(name){return window.makeIcon(name);}

/* ---------- Login ---------- */
function Login({onLogin}){
  const [u,setU]=useState(""),[p,setP]=useState(""),[err,setErr]=useState(false);
  const submit=(e)=>{e.preventDefault(); if(u.trim()==="demo"&&p.trim()==="1234"){onLogin();}else{setErr(true);}};
  return (
    <form className="login screen-anim" onSubmit={submit}>
      <img className="logo" src="https://felixgpz.github.io/mr-oido/assets/images/logo-mroido-transparent.png" alt="Mr. Oído"/>
      <div className="brand-sub">Tu centro auditivo de confianza</div>
      <div className="ver">v2.4.1</div>
      <h2 className="welcome">Bienvenido de nuevo</h2>
      <p className="welcome-sub">Accede a tu centro auditivo</p>
      {err&&<div className="err">Usuario o contraseña incorrectos</div>}
      <div className="field"><label>Usuario</label><input value={u} onChange={e=>{setU(e.target.value);setErr(false);}} placeholder="demo" autoComplete="username"/></div>
      <div className="field"><label>Contraseña</label><input type="password" value={p} onChange={e=>{setP(e.target.value);setErr(false);}} placeholder="••••" autoComplete="current-password"/></div>
      <button className="btn btn-primary" type="submit">Entrar</button>
      <div className="hint">Demo — Usuario: <b>demo</b> · Contraseña: <b>1234</b></div>
    </form>
  );
}

/* ---------- Home ---------- */
function Home({go,openOverlay}){
  const quicks=[
    {ic:"calendar-plus",t:"Pedir cita",d:"Reserva online",tab:"cita"},
    {ic:"ear",t:"Mis audífonos",d:"Control y ajustes",tab:"audifonos"},
    {ic:"message-circle",t:"Mensajes",d:"Habla con tu centro",ov:"mensajes"},
    {ic:"life-buoy",t:"Soporte",d:"Guías y ayuda",tab:"soporte"},
  ];
  return (
    <div className="scroll"><div className="screen-anim">
      <div className="home-top">
        <div>
          <h2 className="hello">Hola, Juan 👋</h2>
          <div className="hello-sub">Bienvenido a Mr. Oído</div>
        </div>
        <button className="bell" onClick={()=>openOverlay("notificaciones")} aria-label="Notificaciones">
          {icon("bell")}<span className="badge">2</span>
        </button>
      </div>
      <div className="pad" style={{paddingTop:0}}>
        <div className="appt-card">
          <img src={PROFILE_IMG} alt="Juan"/>
          <div style={{flex:1}}>
            <div className="lab">Próxima revisión</div>
            <div className="when">15 de julio · 10:30 h<br/>Mr. Oído Barcelona</div>
          </div>
          {icon("chevron-right")}
        </div>
        <div className="sec-label">¿Qué necesitas hoy?</div>
        <div className="quick-grid">
          {quicks.map(q=>(
            <button key={q.t} className="quick" onClick={()=>q.ov?openOverlay(q.ov):go(q.tab)}>
              <div className="ic">{icon(q.ic)}</div>
              <div><div className="qt">{q.t}</div></div>
              <div className="qd">{q.d}</div>
            </button>
          ))}
        </div>
        <div className="sec-label" style={{marginTop:24}}>Consejos del centro</div>
      </div>
      <div className="tips">
        {TIPS.map(t=>(
          <div className="tip" key={t.t}>
            <div className="ic">{icon(t.ic)}</div>
            <div className="tt">{t.t}</div>
            <div className="td">{t.d}</div>
          </div>
        ))}
      </div>
      <div style={{height:24}}/>
    </div></div>
  );
}

/* ---------- Cita ---------- */
function Cita(){
  const [day,setDay]=useState(null);
  const [slot,setSlot]=useState(null);
  const [done,setDone]=useState(false);
  // July 2026 starts on Wednesday -> 2 leading blanks (Mon,Tue)
  const blanks=[0,1]; const days=Array.from({length:31},(_,i)=>i+1);
  if(done){
    return (
      <div className="scroll"><div className="pad screen-anim">
        <div className="confirm-ok card" style={{marginTop:40}}>
          <div className="circ">{icon("check")}</div>
          <h2 style={{fontSize:26}}>¡Cita confirmada!</h2>
          <p className="muted" style={{fontSize:16}}>Te esperamos el <b>{day} de julio</b> a las <b>{slot} h</b> en Mr. Oído Barcelona.</p>
          <button className="btn btn-ghost" style={{marginTop:8}} onClick={()=>{setDone(false);setDay(null);setSlot(null);}}>Reservar otra</button>
        </div>
      </div></div>
    );
  }
  return (
    <div className="scroll">
      <div className="page-head"><div className="eyebrow">Reserva online</div><h1 className="h-title">Pedir cita</h1></div>
      <div className="pad screen-anim" style={{paddingTop:0}}>
        <div className="card" style={{padding:18}}>
          <div className="cal-head">
            <div className="m">Julio 2026</div>
            <div className="cal-nav"><button>{icon("chevron-left")}</button><button>{icon("chevron-right")}</button></div>
          </div>
          <div className="cal-grid">
            {["L","M","X","J","V","S","D"].map(d=><div className="dow" key={d}>{d}</div>)}
            {blanks.map(b=><div key={"b"+b}/>)}
            {days.map(d=>{
              const dow=(d+1)%7; // 0=Mon ... offset since 1st is Wed(idx2)
              const weekend=(d+2)%7===6||(d+2)%7===0; // rough Sun closed
              const sunday=((d-1+2)%7)===6;
              return (
                <button key={d} className={"cal-day"+(day===d?" sel":"")} disabled={sunday} onClick={()=>setDay(d)}>
                  {d}{d===15&&<span className="dot"/>}
                </button>
              );
            })}
          </div>
        </div>
        <div className="sec-label" style={{marginTop:22}}>Franjas disponibles</div>
        <div className="slots">
          {SLOTS.map(s=><button key={s} className={"slot"+(slot===s?" sel":"")} onClick={()=>setSlot(s)}>{s}</button>)}
        </div>
        <button className="btn btn-primary" style={{marginTop:26,opacity:day&&slot?1:.5}} disabled={!(day&&slot)} onClick={()=>setDone(true)}>
          {icon("check")} Confirmar cita
        </button>
        <p className="muted center" style={{fontSize:13.5,marginTop:12}}>El 15 de julio tienes tu revisión anual</p>
      </div>
    </div>
  );
}

/* ---------- Audífonos ---------- */
function Audifonos(){
  const [vol,setVol]=useState(65);
  const [prog,setProg]=useState("Normal");
  return (
    <div className="scroll">
      <div className="page-head"><div className="eyebrow">Tu dispositivo</div><h1 className="h-title">Mis audífonos</h1></div>
      <div className="pad screen-anim" style={{paddingTop:0}}>
        <div className="card">
          <div className="device">
            <div className="dimg">{icon("ear")}</div>
            <div style={{flex:1}}>
              <h3 style={{fontSize:20}}>Phonak Audéo Lumity</h3>
              <div className="muted" style={{fontSize:13.5,marginTop:2}}>Serie: PH-2024-00341</div>
              <span className="badge-on"><span className="pulse"/> Conectado</span>
            </div>
          </div>
          <div style={{padding:"0 18px 18px"}}>
            <div className="batt-row">
              {icon("battery-medium")}
              <div className="batt-bar"><i style={{width:"72%"}}/></div>
              <b style={{fontSize:15}}>72%</b>
            </div>
          </div>
        </div>

        <div className="card ctl-card">
          <div className="ct">Volumen <b>{vol}%</b></div>
          <input type="range" min="0" max="100" value={vol} onChange={e=>setVol(+e.target.value)}/>
        </div>

        <div className="card ctl-card">
          <div className="ct">Programa de escucha</div>
          <div className="prog-grid">
            {PROGRAMS.map(p=>(
              <button key={p.k} className={"prog"+(prog===p.k?" sel":"")} onClick={()=>setProg(p.k)}>
                {icon(p.ic)} {p.k}
              </button>
            ))}
          </div>
        </div>

        <div className="card ctl-card">
          <div className="ct" style={{marginBottom:4}}>Estado y mantenimiento</div>
          {MAINT.map(m=>(
            <div className="maint" key={m.k}><span className="mk">{m.k}</span><span className="mv">{m.v}</span></div>
          ))}
        </div>
        <div style={{height:8}}/>
      </div>
    </div>
  );
}

/* ---------- Soporte ---------- */
function Soporte(){
  const [open,setOpen]=useState(0);
  return (
    <div className="scroll">
      <div className="page-head"><div className="eyebrow">Ayuda</div><h1 className="h-title">Soporte</h1></div>
      <div className="pad screen-anim" style={{paddingTop:0}}>
        {SUPPORT.map((s,i)=>(
          <div className={"acc"+(open===i?" open":"")} key={s.q}>
            <button onClick={()=>setOpen(open===i?-1:i)}>{s.q} {icon("chevron-right")}</button>
            <div className="body" style={{maxHeight:open===i?s.steps.length*64+20:0}}>
              <div className="body-pad">
                {s.steps.map((st,k)=>(
                  <div className="step" key={k}><div className="n">{k+1}</div><p>{st}</p></div>
                ))}
              </div>
            </div>
          </div>
        ))}
        <div className="support-actions">
          <button className="btn btn-primary">{icon("phone")} Llamar al centro · 93 XXX XX XX</button>
          <button className="btn btn-amber">{icon("message-circle")} Escribir por WhatsApp</button>
        </div>
        <div style={{height:8}}/>
      </div>
    </div>
  );
}

/* ---------- Perfil ---------- */
function Perfil({onLogout}){
  const info=[["Edad","80 años"],["Teléfono","6XX XXX XXX"],["Ciudad","Barcelona"],["Audífono","Phonak Audéo Lumity"]];
  return (
    <div className="scroll">
      <div className="page-head"><div className="eyebrow">Tu cuenta</div><h1 className="h-title">Mi perfil</h1></div>
      <div className="pad screen-anim" style={{paddingTop:0}}>
        <div className="profile-head">
          <img src={PROFILE_IMG} alt="Juan"/>
          <div className="pn">Juan Golondrina Pérez</div>
          <div className="ps">Paciente desde enero 2022</div>
        </div>
        <div className="card" style={{marginBottom:18}}>
          {info.map(r=><div className="info-row" key={r[0]}><span className="k">{r[0]}</span><span className="v">{r[1]}</span></div>)}
        </div>
        <div className="sec-label">Historial de visitas</div>
        <div className="card" style={{padding:"12px 18px"}}>
          {HISTORY.map(h=>(
            <div className="hist" key={h.t}><span className="dot"/><div><div className="ht">{h.t}</div><div className="hd">{h.d}</div></div></div>
          ))}
        </div>
        <button className="btn btn-ghost" style={{marginTop:18,color:"#a23232"}} onClick={onLogout}>{icon("log-out")} Cerrar sesión</button>
        <div style={{height:8}}/>
      </div>
    </div>
  );
}

/* ---------- Overlays ---------- */
function Notificaciones({onBack,show}){
  return (
    <div className={"overlay"+(show?" show":"")}>
      <div className="ov-head">
        <button className="back back-labeled" onClick={onBack} type="button" aria-label="Volver al inicio">
          {icon("arrow-left")}<span>Volver</span>
        </button>
        <div className="ot">Notificaciones</div>
      </div>
      <div className="scroll"><div className="pad">
        {NOTIFS.map((n,i)=>(
          <div className={"notif"+(n.unread?" unread":"")} key={i}>
            <div className="ic">{icon(n.ic)}</div>
            <div><div className="nt">{n.t}</div><div className="nb">{n.b}</div><div className="nd">{n.d}</div></div>
          </div>
        ))}
      </div></div>
    </div>
  );
}

function Mensajes({onBack,show}){
  const [msgs,setMsgs]=useState(CHAT0);
  const [txt,setTxt]=useState("");
  const endRef=useRef(null);
  useEffect(()=>{ if(endRef.current) endRef.current.scrollTop=endRef.current.scrollHeight; },[msgs]);
  const send=(t)=>{
    const v=(t||txt).trim(); if(!v)return;
    setTxt("");
    setMsgs(m=>[...m,{who:"me",txt:v,t:"ahora"}]);
    setTimeout(()=>setMsgs(m=>[...m,{who:"them",txt:"Gracias por escribir, Juan. Te responderé en breve. Si es urgente, llámanos al 93 XXX XX XX 😊",t:"ahora"}]),900);
  };
  return (
    <div className={"overlay"+(show?" show":"")}>
      <div className="ov-head">
        <button className="back" onClick={onBack}>{icon("arrow-left")}</button>
        <div style={{flex:1}}>
          <div className="ot">Marta · Audioprotesista</div>
          <div className="os"><span className="pulse"/> En línea</div>
        </div>
        {icon("phone")}
      </div>
      <div className="chat-scroll" ref={endRef}>
        <div className="chat-day">Hoy</div>
        {msgs.map((m,i)=> m.who==="sys"
          ? <div className="chat-system" key={i}>{icon("radio")} {m.txt}</div>
          : <div className={"bubble "+m.who} key={i}>{m.txt}{m.t&&<span className="t">{m.t}</span>}</div>
        )}
      </div>
      <div className="quick-replies">
        {QUICK_REPLIES.map(q=><button className="qr" key={q} onClick={()=>send(q)}>{q}</button>)}
      </div>
      <form className="chat-input" onSubmit={e=>{e.preventDefault();send();}}>
        <input value={txt} onChange={e=>setTxt(e.target.value)} placeholder="Escribe un mensaje…"/>
        <button className="send" type="submit" aria-label="Enviar">{icon("send")}</button>
      </form>
    </div>
  );
}

/* ---------- App shell ---------- */
const TABS=[
  {k:"home",t:"Inicio",ic:"home"},
  {k:"cita",t:"Cita",ic:"calendar-days"},
  {k:"audifonos",t:"Audífonos",ic:"ear"},
  {k:"soporte",t:"Soporte",ic:"life-buoy"},
  {k:"perfil",t:"Perfil",ic:"user"},
];

function App(){
  const [loggedIn,setLoggedIn]=useState(()=>localStorage.getItem("mroido_login")==="1");
  const [tab,setTab]=useState(()=>localStorage.getItem("mroido_tab")||"home");
  const [overlay,setOverlay]=useState(null);     // current overlay id (null=none)

  useEffect(()=>{localStorage.setItem("mroido_login",loggedIn?"1":"0");},[loggedIn]);
  useEffect(()=>{localStorage.setItem("mroido_tab",tab);},[tab]);

  const openOverlay=useCallback((id)=>{ setOverlay(id); },[]);
  const closeOverlay=useCallback(()=>{ setOverlay(null); },[]);
  const go=useCallback((t)=>{ setTab(t); },[]);

  useEffect(()=>{
    if(!overlay)return;
    const onKey=(e)=>{ if(e.key==="Escape") closeOverlay(); };
    window.addEventListener("keydown",onKey);
    return ()=>window.removeEventListener("keydown",onKey);
  },[overlay,closeOverlay]);

  const StatusBar=(
    <div className="statusbar">
      <span>9:41</span>
      <span className="right">87 <span className="batt"><i/></span></span>
    </div>
  );

  if(!loggedIn){
    return (
      <div className="stage"><div className="phone-wrap" id="pw"><div className="phone"><div className="screen">
        {StatusBar}
        <div className="viewport"><Login onLogin={()=>setLoggedIn(true)}/></div>
      </div></div></div></div>
    );
  }

  let Screen;
  if(tab==="home") Screen=<Home key="home" go={go} openOverlay={openOverlay}/>;
  else if(tab==="cita") Screen=<Cita key="cita"/>;
  else if(tab==="audifonos") Screen=<Audifonos key="audifonos"/>;
  else if(tab==="soporte") Screen=<Soporte key="soporte"/>;
  else Screen=<Perfil key="perfil" onLogout={()=>{setLoggedIn(false);setTab("home");}}/>;

  return (
    <div className="stage"><div className="phone-wrap" id="pw"><div className="phone"><div className="screen">
      {StatusBar}
      <div className="viewport">
        {Screen}
      </div>
      <div className="tabbar">
        {TABS.map(t=>(
          <button key={t.k} className={"tab"+(tab===t.k?" active":"")} onClick={()=>go(t.k)}>
            {icon(t.ic)}<span>{t.t}</span>
          </button>
        ))}
      </div>
      <Notificaciones show={overlay==="notificaciones"} onBack={closeOverlay}/>
      <Mensajes show={overlay==="mensajes"} onBack={closeOverlay}/>
    </div></div></div></div>
  );
}

/* ---------- mount + scale ---------- */
ReactDOM.createRoot(document.getElementById("root")).render(<App/>);

function scalePhone(){
  const pw=document.getElementById("pw"); if(!pw)return;
  const s=Math.min(1,(window.innerHeight-32)/858,(window.innerWidth-32)/402);
  pw.style.transform="scale("+s+")";
}
window.addEventListener("resize",scalePhone);
const _si=setInterval(()=>{ if(document.getElementById("pw")){scalePhone();clearInterval(_si);} },60);
