'use strict';
const $ = s => document.querySelector(s);
const colors = {Foundations:'#78dfb3',Search:'#87c8f5',Decisions:'#e7c478',Logic:'#f3a281'};
const key = 'csci561-fieldnotes-v1';
let saved = {notes:{},reviewed:[]};
try { const data=JSON.parse(localStorage.getItem(key)); if(data && typeof data.notes==='object' && data.notes!==null && Array.isArray(data.reviewed)) saved=data; } catch (_) { $('#save-status').textContent='Browser storage unavailable; use Export to keep this session.'; }
function persist(){ try { localStorage.setItem(key,JSON.stringify(saved)); $('#save-status').textContent='Saved in this browser. Export for a backup.'; } catch(_){ $('#save-status').textContent='Could not save in browser. Export to keep this session.'; } }
let filter='All';
function renderCards(){
 const query=$('#search').value.trim().toLowerCase();
 const matches=lectures.filter(l=>(filter==='All'||l.unit===filter)&&[l.title,l.desc,l.map,...l.sections.map(s=>s.title+' '+s.body+' '+s.question+' '+s.answer)].join(' ').toLowerCase().includes(query));
 $('#cards').innerHTML=matches.map(l=>`<article class="card" style="--accent:${colors[l.unit]}"><div class="card-top"><span class="unit">${l.unit}</span><time>${l.date}</time></div><div class="number">0${l.id}</div><h3><a href="#lecture-${l.id}">${l.title}</a></h3><p>${l.desc}</p><div class="card-bottom"><span>${saved.reviewed.includes(l.id)?'<span class="done">✓ Marked reviewed</span>':l.sections.length+' recall checks'}</span><span>Open module ↗</span></div></article>`).join('');
 $('#results').textContent=matches.length?`${matches.length} of ${lectures.length} modules`:'No matching modules. Try a different topic or select All lectures.';
 $('#progress-count').textContent=`${lectures.filter(l=>saved.reviewed.includes(l.id)).length} / ${lectures.length}`;
 $('#recall-count').textContent=lectures.reduce((n,l)=>n+l.sections.length,0);
}
function renderLecture(id){
 const l=lectures.find(l=>l.id===id); if(!l) return false;
 const source=`Lecture captions · ${l.date}`+(id===5?' · Week 5 propositional-logic PowerPoint and midterm review PDF':id===6?' · No Week 6 slide deck supplied':'');
 $('#lecture').innerHTML=`<header class="lecture-head"><a class="back" href="#course-map">← BACK TO COURSE MAP</a><p class="eyebrow">LECTURE 0${l.id} · ${l.date} · ${l.unit.toUpperCase()}</p><h1>${l.title}</h1><p class="intro">${l.desc}</p><div class="lecture-tools"><button id="review" class="control" aria-pressed="false"></button><button id="print" class="control">Print module</button><button id="answers" class="control" aria-expanded="false">Open all answer checks</button></div><p class="topic-map">${l.map}</p><p class="notice"><strong>Scope & boundaries</strong><br>${l.boundary}</p><p class="source-info">${source}. Explanations and recall exercises are study reconstructions, not verbatim transcripts or official exam questions.</p></header><div class="study-layout"><aside class="toc" aria-label="Module sections"><p class="eyebrow">IN THIS MODULE</p>${l.sections.map((s,i)=>`<a href="#lecture-${id}-section-${i}">${String(i+1).padStart(2,'0')} / ${s.title}</a>`).join('')}</aside><div>${l.sections.map((s,i)=>`<section class="study-section" id="lecture-${id}-section-${i}"><p class="eyebrow">${String(i+1).padStart(2,'0')} / CONCEPT</p><h2>${s.title}</h2>${s.body}<div class="recall"><p class="eyebrow">CLOSE THE NOTES · RETRIEVE</p><p>${s.question}</p><details><summary>Check your reasoning</summary><p>${s.answer}</p></details></div><label class="note-label" for="note-${i}">Your explanation, worked trace, or remaining question</label><textarea id="note-${i}" data-note="${id}-${i}" placeholder="Write this from memory…"></textarea></section>`).join('')}<nav class="lecture-nav" aria-label="Adjacent lectures">${id>1?`<a href="#lecture-${id-1}">← Previous module</a>`:'<a href="#course-map">← Course map</a>'}${id<lectures.length?`<a href="#lecture-${id+1}">Next module →</a>`:'<a href="#course-map">Return to course map →</a>'}</nav></div></div>`;
 $('#lecture').querySelectorAll('textarea').forEach(el=>{el.value=saved.notes[el.dataset.note]||'';el.addEventListener('input',()=>{saved.notes[el.dataset.note]=el.value;persist();});});
 function reviewLabel(){const done=saved.reviewed.includes(id);$('#review').classList.toggle('reviewed',done);$('#review').setAttribute('aria-pressed',String(done));$('#review').textContent=done?'✓ Reviewed · mark unfinished':'Mark module reviewed';}
 reviewLabel();$('#review').onclick=()=>{saved.reviewed=saved.reviewed.includes(id)?saved.reviewed.filter(n=>n!==id):[...saved.reviewed,id];persist();reviewLabel();renderCards();};
 $('#print').onclick=()=>window.print();
 $('#answers').onclick=()=>{const open=$('#answers').getAttribute('aria-expanded')!=='true';$('#lecture').querySelectorAll('details').forEach(d=>d.open=open);$('#answers').setAttribute('aria-expanded',String(open));$('#answers').textContent=open?'Close all answer checks':'Open all answer checks';};
 document.title=`Lecture ${id}: ${l.title} · CSCI 561`;return true;
}
let activeId=null;
function route(){const match=location.hash.match(/^#lecture-(\d+)(?:-section-\d+)?$/);const id=match?Number(match[1]):null;
 if(id&&lectures.some(l=>l.id===id)){if(activeId!==id)renderLecture(id);$('#dashboard').hidden=true;$('#lecture').hidden=false;activeId=id;const target=document.getElementById(location.hash.slice(1));if(target)target.scrollIntoView();else window.scrollTo(0,0);}
 else {$('#dashboard').hidden=false;$('#lecture').hidden=true;activeId=null;document.title='CSCI 561 · AI Field Notes';renderCards();if(location.hash==='#course-map')$('#course-map').scrollIntoView();else window.scrollTo(0,0);}}
$('#search').addEventListener('input',renderCards);
document.querySelectorAll('[data-filter]').forEach(button=>button.onclick=()=>{filter=button.dataset.filter;document.querySelectorAll('[data-filter]').forEach(b=>{const selected=b===button;b.classList.toggle('active',selected);b.setAttribute('aria-pressed',String(selected));});renderCards();});
$('#export').onclick=()=>{const blob=new Blob([JSON.stringify({course:'CSCI 561',exported:new Date().toISOString(),...saved},null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='csci-561-study-backup.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);};
window.addEventListener('hashchange',route);renderCards();route();
