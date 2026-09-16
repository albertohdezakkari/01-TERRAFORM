const BASE="";
let COURSE=null,currentExercise=0,currentStage=0,currentConcept=0,currentPractice=0;
const CACHE={};
const STAGES=["Orientación","Fundamentos","Práctica","Comprueba","Cierre"];
const PHASE={TITULO:0,OBJETIVOS:0,INTRODUCCION:0,CONCEPTO:1,ANALOGIA:1,EJEMPLO:1,DIAGRAMA:1,CALCULO:1,AYUDA:1,PASO:2,"CODIGO:TERRAFORM":2,CODIGO:2,"TERMINAL:GIT_BASH":2,"TERMINAL:POWERSHELL":2,COMANDO:2,RESULTADO_ESPERADO:2,ERROR_FRECUENTE:2,PREGUNTA:3,RESPUESTA:3,RETO:3,SOLUCION:3,IDEA_CLAVE:4,CHECKPOINT:4};
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const txt=b=>b.lines.join("\n").trim();
const isDone=i=>localStorage.getItem("tf-course-done-"+COURSE.exercises[i].id)==="1";
const isUnlocked=i=>i===0||isDone(i-1);

async function loadExercise(i){
  if(CACHE[i])return CACHE[i];
  const r=await fetch(BASE+COURSE.exercises[i].file);
  if(!r.ok)throw new Error("No se pudo cargar el ejercicio "+COURSE.exercises[i].id);
  return CACHE[i]=await r.json();
}
function moduleFor(id){
  const n=parseInt(id,10);
  if(n<=2)return"Fundamentos";
  if(n<=7)return"Redes";
  if(n<=11)return"Organización";
  if(n<=16)return"Terraform avanzado";
  if(n<=18)return"Repetición";
  return"Proyecto";
}
function renderSidebar(){
  const h=document.getElementById("exerciseList");
  let last="",out="";
  COURSE.exercises.forEach((e,i)=>{
    const mod=moduleFor(e.id),d=isDone(i),u=isUnlocked(i);
    if(mod!==last){out+=`<div class="module-title">${esc(mod)}</div>`;last=mod}
    out+=`<button class="exercise-link ${i===currentExercise?"active":""} ${d?"done":""} ${!u?"locked":""}" data-i="${i}">
      <div class="t">${d?"✓":u?"○":"🔒"} ${esc(e.tabTitle)}</div>
      <div class="m">${d?"Completado":u?"Disponible":"Completa el anterior"}</div>
    </button>`;
  });
  h.innerHTML=out;
  h.querySelectorAll(".exercise-link").forEach(b=>b.onclick=()=>{const i=+b.dataset.i;if(isUnlocked(i))openExercise(i,0)});
  const n=COURSE.exercises.filter((_,i)=>isDone(i)).length,p=Math.round(n/COURSE.exercises.length*100);
  document.getElementById("progressBar").style.width=p+"%";
  document.getElementById("progressLabel").textContent=`${n} de ${COURSE.exercises.length} ejercicios completados`;
  document.getElementById("topProgress").textContent=p+"%";
}
function codeBox(c,l="Código"){return `<div class="card"><div class="label">${esc(l)}</div><div class="code-head"><button class="copy" onclick="copyPrev(this)">Copiar</button></div><pre>${esc(c)}</pre></div>`}
function copyPrev(b){const p=b.closest(".card").querySelector("pre");navigator.clipboard.writeText(p.innerText);const o=b.textContent;b.textContent="Copiado";setTimeout(()=>b.textContent=o,700)}
function toggleAnswer(b){const a=b.nextElementSibling;a.style.display=a.style.display==="block"?"none":"block"}
function renderOrientation(e){
 const o=e.blocks.find(b=>b.type==="OBJETIVOS"),i=e.blocks.find(b=>b.type==="INTRODUCCION"),d=e.blocks.find(b=>b.type==="DIAGRAMA");
 return `${o?`<div class="card"><div class="label">Qué vas a aprender</div><ul>${o.lines.filter(x=>x.trim()).map(x=>`<li>${esc(x.replace(/^•\s*/,""))}</li>`).join("")}</ul></div>`:""}
 ${i?`<div class="card"><div class="label">Contexto</div><h3>Antes de empezar</h3><p>${esc(txt(i))}</p></div>`:""}
 ${d?`<div class="card key"><div class="label">Mapa mental</div><div class="diagram">${esc(txt(d))}</div></div>`:""}`;
}
function groupConceptUnits(e){
 const units=[];let current=null;
 for(const b of e.blocks){
   if(b.type==="CONCEPTO"){if(current)units.push(current);current={concept:b,extras:[]}}
   else if(current&&["ANALOGIA","EJEMPLO","DIAGRAMA","CALCULO","AYUDA"].includes(b.type))current.extras.push(b);
 }
 if(current)units.push(current);return units;
}
function renderFundamentals(e){
 const units=groupConceptUnits(e);
 if(!units.length)return`<div class="card"><p>Los fundamentos de esta unidad se integran en la práctica.</p></div>`;
 currentConcept=Math.max(0,Math.min(currentConcept,units.length-1));
 const u=units[currentConcept],ls=u.concept.lines.filter(x=>x.trim()),heading=ls.shift()||"Concepto";
 let extras="";
 for(const b of u.extras){
   const t=txt(b);
   if(b.type==="DIAGRAMA")extras+=`<div class="diagram">${esc(t)}</div>`;
   else if(b.type==="ANALOGIA")extras+=`<div class="subunit help"><div class="label">Analogía</div>${esc(t)}</div>`;
   else if(b.type==="EJEMPLO")extras+=`<div class="subunit"><div class="label">Ejemplo</div>${esc(t)}</div>`;
   else if(b.type==="CALCULO")extras+=`<div class="subunit help"><div class="label">Cálculo explicado</div><div class="calc">${esc(t)}</div></div>`;
   else if(b.type==="AYUDA")extras+=`<div class="subunit help"><div class="label">Ayuda</div>${esc(t)}</div>`;
 }
 const dots=units.map((_,i)=>`<span class="dot ${i===currentConcept?"active":i<currentConcept?"done":""}"></span>`).join("");
 return `<div class="stepper-head"><div><div class="stepper-title">Fundamentos</div><div class="stepper-count">Concepto ${currentConcept+1} de ${units.length}</div></div><div class="dotbar">${dots}</div></div>
 <div class="learning-card concept"><div class="label">Concepto ${currentConcept+1}</div><h2>${esc(heading)}</h2><p>${esc(ls.join(" "))}</p>${extras}</div>
 <div class="step-actions"><button class="soft" ${currentConcept===0?"disabled":""} onclick="moveConcept(-1)">← Anterior</button><button class="primary" onclick="moveConcept(1)">${currentConcept===units.length-1?"Terminar fundamentos":"Lo entiendo →"}</button></div>`;
}
function moveConcept(d){
 const total=groupConceptUnits(CACHE[currentExercise]).length;
 if(d>0&&currentConcept>=total-1){currentStage=2;currentPractice=0;renderLesson();return}
 currentConcept=Math.max(0,Math.min(total-1,currentConcept+d));renderLesson();window.scrollTo({top:60,behavior:"smooth"});
}
function groupPracticeUnits(e){
 const units=[];let current=null;
 for(const b of e.blocks){
   if(b.type==="PASO"){if(current)units.push(current);current={step:b,items:[]}}
   else if(current&&(b.type==="COMANDO"||b.type==="RESULTADO_ESPERADO"||b.type==="ERROR_FRECUENTE"||b.type==="AYUDA"||b.type.startsWith("CODIGO")||b.type.startsWith("TERMINAL")))current.items.push(b);
 }
 if(current)units.push(current);return units;
}
function renderPractice(e){
 const units=groupPracticeUnits(e);
 if(!units.length)return`<div class="card"><p>No hay pasos prácticos en esta unidad.</p></div>`;
 currentPractice=Math.max(0,Math.min(currentPractice,units.length-1));
 const u=units[currentPractice],stepText=txt(u.step);let body="";
 for(const x of u.items){
   if(x.type==="TERMINAL:GIT_BASH"){
     body+=codeBox(txt(x),"Git Bash");
   }else if(x.type==="TERMINAL:POWERSHELL"){
     body+=codeBox(txt(x),"PowerShell");
   }else if(x.type==="COMANDO")body+=codeBox(txt(x),"Comando");
   else if(x.type==="CODIGO:TERRAFORM")body+=codeBox(txt(x),"Código Terraform");
   else if(x.type==="CODIGO")body+=codeBox(txt(x),"Código / archivo");
   else if(x.type==="RESULTADO_ESPERADO")body+=`<div class="card result"><div class="label">Resultado esperado</div><p>${esc(txt(x))}</p></div>`;
   else if(x.type==="ERROR_FRECUENTE")body+=`<div class="card error"><div class="label">Error frecuente</div><p>${esc(txt(x)).replace(/\n/g,"<br>")}</p></div>`;
   else if(x.type==="AYUDA")body+=`<div class="card help"><div class="label">Ayuda</div><p>${esc(txt(x))}</p></div>`;
 }
 const pct=Math.round(((currentPractice+1)/units.length)*100);
 return `<div class="stepper-head"><div><div class="stepper-title">Práctica guiada</div><div class="stepper-count">Paso ${currentPractice+1} de ${units.length}</div></div><div class="stepper-count">${pct}%</div></div>
 <div class="practice-progress"><span style="width:${pct}%"></span></div>
 <div class="learning-card"><div class="label">Paso ${currentPractice+1}</div><h2>${esc(stepText)}</h2>${body}</div>
 <div class="step-actions"><button class="soft" ${currentPractice===0?"disabled":""} onclick="movePractice(-1)">← Paso anterior</button><button class="primary" onclick="movePractice(1)">${currentPractice===units.length-1?"Ir a comprobar":"Siguiente paso →"}</button></div>`;
}
function movePractice(d){
 const total=groupPracticeUnits(CACHE[currentExercise]).length;
 if(d>0&&currentPractice>=total-1){currentStage=3;renderLesson();return}
 currentPractice=Math.max(0,Math.min(total-1,currentPractice+d));renderLesson();window.scrollTo({top:60,behavior:"smooth"});
}
function renderCheck(e){let out="",b=e.blocks;for(let i=0;i<b.length;i++){if(b[i].type==="PREGUNTA"){const a=b.slice(i+1).find(x=>x.type==="RESPUESTA");out+=`<div class="card"><div class="label">Recuperación activa</div><h3>${esc(txt(b[i]))}</h3>${a?`<button class="soft" onclick="toggleAnswer(this)">Ver respuesta</button><div class="answer">${esc(txt(a))}</div>`:""}</div>`}if(b[i].type==="RETO"){const s=b.slice(i+1).find(x=>x.type==="SOLUCION");out+=`<div class="card help"><div class="label">Mini reto</div><h3>${esc(txt(b[i]))}</h3>${s?`<button class="soft" onclick="toggleAnswer(this)">Mostrar solución</button><div class="answer">${esc(txt(s))}</div>`:""}</div>`}}return out||`<div class="card"><p>Explica con tus palabras qué has hecho y por qué.</p></div>`}
function renderClose(e){const k=e.blocks.find(b=>b.type==="IDEA_CLAVE"),c=e.blocks.find(b=>b.type==="CHECKPOINT");return `${k?`<div class="card key"><div class="label">Idea clave</div><p>${esc(txt(k))}</p></div>`:""}<div class="card"><div class="label">Checkpoint</div><label class="check"><input type="checkbox" ${isDone(currentExercise)?"checked":""} onchange="setDone(this.checked)"><span><b>He completado este ejercicio</b><br>${esc(c?txt(c):"Puedo explicar lo aprendido.")}</span></label></div>`}
async function renderLesson(){
 const e=await loadExercise(currentExercise),content=[renderOrientation(e),renderFundamentals(e),renderPractice(e),renderCheck(e),renderClose(e)][currentStage];
 const ps=currentStage>0?`<button class="soft" onclick="goStage(-1)">← Volver</button>`:"<span></span>",ns=currentStage<4?`<button class="primary" onclick="goStage(1)">Continuar →</button>`:"<span></span>";
 const pe=currentExercise>0?`<button class="soft" onclick="openExercise(${currentExercise-1},4)">← ${esc(COURSE.exercises[currentExercise-1].tabTitle)}</button>`:`<button class="soft" disabled>← Inicio</button>`;
 const hn=currentExercise<COURSE.exercises.length-1,en=hn&&isDone(currentExercise),ne=hn?`<button class="primary" ${en?"":"disabled"} onclick="${en?`openExercise(${currentExercise+1},0)`:""}">${esc(COURSE.exercises[currentExercise+1].tabTitle)} →</button>`:`<button class="soft" disabled>Fin del cuaderno</button>`;
 document.getElementById("lesson").innerHTML=`<div class="hero"><div class="eyebrow">Ejercicio ${esc(e.id)}</div><h1>${esc(e.title)}</h1><p>Unidad independiente · aprendizaje guiado</p></div><div class="stagebar">${STAGES.map((s,i)=>`<button class="stage ${i===currentStage?"active":""} ${i<currentStage?"done":""}" onclick="setStage(${i})">${i+1} · ${s}</button>`).join("")}</div><section>${content}<div class="navrow">${ps}${ns}</div></section><div class="course-nav">${pe}${ne}</div>`;
}
function setDone(v){localStorage.setItem("tf-course-done-"+COURSE.exercises[currentExercise].id,v?"1":"0");renderSidebar();renderLesson()}
function setStage(i){currentStage=i;if(i===1)currentConcept=0;if(i===2)currentPractice=0;renderLesson();window.scrollTo({top:60,behavior:"smooth"})}
function goStage(d){setStage(Math.max(0,Math.min(4,currentStage+d)))}
async function openExercise(i,st=0){if(!isUnlocked(i))return;currentExercise=i;currentStage=st;currentConcept=0;currentPractice=0;document.getElementById("welcome").hidden=true;document.getElementById("lesson").hidden=false;renderSidebar();await renderLesson();window.scrollTo({top:0,behavior:"smooth"})}

fetch(BASE+"manifest.json").then(r=>{if(!r.ok)throw new Error("No se pudo cargar el manifiesto del curso");return r.json()}).then(d=>{
 COURSE=d;renderSidebar();document.getElementById("startBtn").onclick=()=>openExercise(0,0)
}).catch(e=>{
 document.querySelector(".main").innerHTML=`<div class="card error"><h2>Error</h2><p>${esc(e.message)}</p></div>`
});