(() => {
  'use strict';
  const prefix = 'csci566-midterm-review-2026:';
  const questions = [...document.querySelectorAll('.question')];
  const search = document.querySelector('#search');
  const topic = document.querySelector('#topic');
  const flags = document.querySelector('#flags-only');
  const status = document.querySelector('#save-status');
  const read = key => { try { return localStorage.getItem(prefix + key) || ''; } catch { status.textContent = 'Browser storage is unavailable.'; return ''; } };
  const write = (key, value) => { try { localStorage.setItem(prefix + key, value); status.textContent = 'Saved on this device.'; } catch { status.textContent = 'Could not save. Export your notes before leaving.'; } };
  const checks = [...document.querySelectorAll('[data-reviewed]')];
  const notes = [...document.querySelectorAll('[data-note]')];
  function progress() {
    const count = checks.filter(c => c.checked).length;
    document.querySelector('#progress').textContent = `${count} / 56`;
    checks.forEach(c => document.querySelector(`[data-jump="${c.dataset.reviewed}"]`).classList.toggle('done', c.checked));
  }
  checks.forEach(c => {
    c.checked = read('reviewed-' + c.dataset.reviewed) === 'true';
    c.addEventListener('change', () => { write('reviewed-' + c.dataset.reviewed, String(c.checked)); progress(); });
  });
  notes.forEach(n => {
    n.value = read('note-' + n.dataset.note);
    n.addEventListener('input', () => write('note-' + n.dataset.note, n.value));
  });
  function filter() {
    const query = search.value.trim().toLowerCase();
    let count = 0;
    questions.forEach(q => {
      const matchesSearch = !query || (/^#?\d+$/.test(query) ? q.id === 'q' + query.replace('#', '') : q.textContent.toLowerCase().includes(query));
      const match = matchesSearch && (topic.value === 'all' || q.dataset.topic === topic.value) && (!flags.checked || q.dataset.flag === 'yes');
      q.hidden = !match;
      document.querySelector(`[data-jump="${q.id.slice(1)}"]`).classList.toggle('filtered', !match);
      if (match) count++;
    });
    document.querySelector('#results').textContent = `${count} of 56 questions`;
    document.querySelector('#empty').hidden = count !== 0;
  }
  function clear() { search.value = ''; topic.value = 'all'; flags.checked = false; filter(); }
  search.addEventListener('input', filter);
  topic.addEventListener('change', filter);
  flags.addEventListener('change', filter);
  document.querySelector('#clear').addEventListener('click', clear);
  function revealHash() {
    const target = /^#q\d+$/.test(location.hash) ? document.getElementById(location.hash.slice(1)) : null;
    if (target && target.hidden) { clear(); target.scrollIntoView(); }
  }
  window.addEventListener('hashchange', revealHash);
  document.querySelectorAll('a[href^="#q"]').forEach(a => a.addEventListener('click', () => {
    const target = document.getElementById(a.getAttribute('href').slice(1));
    if (target && target.hidden) clear();
  }));
  document.querySelector('#print').addEventListener('click', () => window.print());
  document.querySelector('#export').addEventListener('click', () => {
    const data = { course: 'CSCI 566', page: 'Midterm Review 2026', exportedAt: new Date().toISOString(), questions: checks.map(c => ({question: Number(c.dataset.reviewed), reviewed: c.checked, notes: document.querySelector(`[data-note="${c.dataset.reviewed}"]`).value})) };
    const url = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], {type:'application/json'}));
    const a = document.createElement('a'); a.href = url; a.download = 'csci566-midterm-review-2026-notes.json'; a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  });
  progress(); filter(); revealHash();
})();
