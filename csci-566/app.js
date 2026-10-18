'use strict';
const $ = s => document.querySelector(s);
const colors = {Foundations:'#78dfb3',Learning:'#87c8f5',Networks:'#e7c478',Vision:'#f3a281',Training:'#bca6fa'};
const key = 'csci566-guided-v1';
let saved = {notes:{},reviewed:[]};
try { const data=JSON.parse(localStorage.getItem(key)); if(data && typeof data.notes==='object' && data.notes!==null && Array.isArray(data.reviewed)) saved=data; } catch (_) { $('#save-status').textContent='Browser storage unavailable; use Export to keep this session.'; }
function persist(){ try { localStorage.setItem(key,JSON.stringify(saved)); $('#save-status').textContent='Saved in this browser. Export for a backup.'; } catch(_){ $('#save-status').textContent='Could not save in browser. Export to keep this session.'; } }
let filter='All';
const lessonTitle = section => section.teaching?.title || section.title;
function renderCards(){
 const query=$('#search').value.trim().toLowerCase();
 const matches=lectures.filter(l=>(filter==='All'||l.unit===filter)&&[l.title,l.desc,l.map,...l.sections.map(s=>s.title+' '+s.body+' '+s.question+' '+s.answer+' '+JSON.stringify(s.teaching || {}))].join(' ').toLowerCase().includes(query));
 $('#cards').innerHTML=matches.map(l=>`<article class="card" style="--accent:${colors[l.unit]}"><div class="card-top"><span class="unit">${l.unit}</span><time>${l.date}</time></div><div class="number">${String(l.week || l.id).padStart(2,'0')}</div><h3><a href="#lecture-${l.id}">${l.title}</a></h3><p>${l.desc}</p><div class="card-bottom"><span>${saved.reviewed.includes(l.id)?'<span class="done">✓ Marked reviewed</span>':l.sections.length+' small lessons'}</span><span>Learn step by step ↗</span></div></article>`).join('');
 $('#results').textContent=matches.length?`${matches.length} of ${lectures.length} modules`:'No matching modules. Try a different topic or select All lectures.';
 $('#progress-count').textContent=`${lectures.filter(l=>saved.reviewed.includes(l.id)).length} / ${lectures.length}`;
 $('#recall-count').textContent=lectures.reduce((n,l)=>n+l.sections.length,0);
}
function renderLecture(id){
 const l=lectures.find(l=>l.id===id); if(!l) return false;
 const index=lectures.findIndex(item=>item.id===id);
 const previous=lectures[index-1], next=lectures[index+1];
 const source=l.source || `Course study materials · ${l.date}`;
 $('#lecture').innerHTML=`<header class="lecture-head"><a class="back" href="#course-map">← BACK TO COURSE MAP</a><p class="eyebrow">${typeof l.week==='number'?'WEEK '+String(l.week).padStart(2,'0'):l.week} · ${l.date} · ${l.unit.toUpperCase()}</p><h1>${l.title}</h1><p class="intro">Start with the story. Follow one small step at a time. You can open the lecture language when the idea feels clear.</p><div class="lecture-tools"><button id="review" class="control" aria-pressed="false"></button><button id="print" class="control">Print module</button><button id="answers" class="control" aria-expanded="false">Open answer checks</button></div><details class="course-context"><summary>Lecture topics, sources, and scope</summary><p class="topic-map">${l.map}</p><p class="notice">${l.boundary}</p><p class="source-info">${source}. Everyday stories are teaching aids; formal notes preserve the course concepts.</p></details></header><div class="study-layout"><aside class="toc" aria-label="Module sections"><p class="eyebrow">IN THIS MODULE</p>${l.sections.map((s,i)=>`<a href="#lecture-${id}-section-${i}">${String(i+1).padStart(2,'0')} / ${lessonTitle(s)}</a>`).join('')}</aside><div>${l.sections.map((s,i)=>{const t=s.teaching;return `<section class="study-section guided-section" id="lecture-${id}-section-${i}"><p class="eyebrow">SMALL LESSON ${i+1} OF ${l.sections.length}</p><h2>${lessonTitle(s)}</h2><div class="story"><p class="eyebrow">PICTURE THIS</p><p>${t.story}</p></div><h3>Let’s walk through it.</h3><ol class="teaching-steps">${t.steps.map(step=>`<li>${step}</li>`).join('')}</ol><div class="takeaway"><strong>The idea to keep</strong><p>${t.takeaway}</p></div><div class="recall"><p class="eyebrow">TRY ONE SMALL QUESTION</p><p>${t.question}</p><details><summary>Walk me through the answer</summary><p>${t.answer}</p></details></div><details class="lecture-detail"><summary>Connect this to the lecture: ${s.title}</summary><div class="formal-content">${s.body}<div class="recall"><p class="eyebrow">WHEN YOU’RE READY · LECTURE PRACTICE</p><p>${s.question}</p><details><summary>Check your reasoning</summary><p>${s.answer}</p></details></div></div></details><label class="note-label" for="note-${i}">Explain it your way, or leave yourself a question</label><textarea id="note-${i}" data-note="${id}-${i}" placeholder="It makes sense to me because…"></textarea></section>`;}).join('')}<nav class="lesson-controls" aria-label="Small lesson navigation"><button class="control" id="lesson-back">← Previous idea</button><span id="lesson-position" role="status"></span><button class="primary" id="lesson-next">Next idea →</button></nav><nav class="lecture-nav" aria-label="Adjacent lectures">${previous?`<a href="#lecture-${previous.id}">← Previous module</a>`:'<a href="#course-map">← Course map</a>'}${next?`<a href="#lecture-${next.id}">Next module →</a>`:'<a href="#course-map">Return to course map →</a>'}</nav></div></div>`;
 $('#lecture').querySelectorAll('textarea').forEach(el=>{el.value=saved.notes[el.dataset.note]||'';el.addEventListener('input',()=>{saved.notes[el.dataset.note]=el.value;persist();});});
 function reviewLabel(){const done=saved.reviewed.includes(id);$('#review').classList.toggle('reviewed',done);$('#review').setAttribute('aria-pressed',String(done));$('#review').textContent=done?'✓ Reviewed · mark unfinished':'Mark module reviewed';}
 reviewLabel();$('#review').onclick=()=>{saved.reviewed=saved.reviewed.includes(id)?saved.reviewed.filter(n=>n!==id):[...saved.reviewed,id];persist();reviewLabel();renderCards();};
 $('#print').onclick=()=>window.print();
 $('#answers').onclick=()=>{const open=$('#answers').getAttribute('aria-expanded')!=='true';$('#lecture').querySelectorAll('.recall details').forEach(d=>d.open=open);$('#answers').setAttribute('aria-expanded',String(open));$('#answers').textContent=open?'Close answer checks':'Open answer checks';};
 $('#lesson-back').onclick=()=>changeLesson(-1);$('#lesson-next').onclick=()=>changeLesson(1);
 document.title=`Week ${l.week || id}: ${l.title} · CSCI 566`;return true;
}
let activeId=null;
let activeStep=0;
function changeLesson(direction){
 const l=lectures.find(item=>item.id===activeId);
 const step=Math.max(0,Math.min(l.sections.length-1,activeStep+direction));
 location.hash=`lecture-${activeId}-section-${step}`;
}
function showLesson(l,step){
 activeStep=step;
 $('#lecture').querySelectorAll('.guided-section').forEach((section,i)=>section.hidden=i!==step);
 $('#lesson-back').disabled=step===0;
 $('#lesson-next').disabled=step===l.sections.length-1;
 $('#lesson-position').textContent=`Idea ${step+1} of ${l.sections.length}`;
 $('#lecture').querySelectorAll('.toc a').forEach((link,i)=>{
  if(i===step)link.setAttribute('aria-current','step');else link.removeAttribute('aria-current');
 });
}
function route(){
 const match=location.hash.match(/^#lecture-(\d+)(?:-section-(\d+))?$/);
 const id=match?Number(match[1]):null;
 const l=lectures.find(item=>item.id===id);
 if(l){
  if(activeId!==id)renderLecture(id);
  $('#dashboard').hidden=true;$('#lecture').hidden=false;activeId=id;
  const step=Math.min(l.sections.length-1,Number(match[2]||0));
  showLesson(l,step);
  const target=document.getElementById(`lecture-${id}-section-${step}`);
  if(match[2]!==undefined&&target)target.scrollIntoView();else window.scrollTo(0,0);
 }else{
  $('#dashboard').hidden=false;$('#lecture').hidden=true;activeId=null;
  document.title='CSCI 566 · Learn step by step';renderCards();
  if(location.hash==='#course-map')$('#course-map').scrollIntoView();else window.scrollTo(0,0);
 }
}
$('#search').addEventListener('input',renderCards);
document.querySelectorAll('[data-filter]').forEach(button=>button.onclick=()=>{filter=button.dataset.filter;document.querySelectorAll('[data-filter]').forEach(b=>{const selected=b===button;b.classList.toggle('active',selected);b.setAttribute('aria-pressed',String(selected));});renderCards();});
$('#export').onclick=()=>{const blob=new Blob([JSON.stringify({course:'CSCI 566',exported:new Date().toISOString(),...saved},null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='csci-566-study-backup.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);};
window.addEventListener('hashchange',route);renderCards();route();
