/* ============================================================
   Mastery Tracker · App
   - Renders the 4 role tracks with collapsible sections
   - Handles checkbox state, daily streak, stats
   - Persists to localStorage
   ============================================================ */

(function () {
  'use strict';

  const STORAGE_KEY = 'ramya-mastery-v1';
  const DAYS_KEY = 'ramya-mastery-days-v1';
  const QUOTE_KEY = 'ramya-mastery-quote-v1';

  // Role icons (using letters in our serif italic — feels editorial)
  const ROLE_ICONS = { da: 'A', ds: 'S', ml: 'M', ai: 'AI' };
  const ROLE_ORDER = ['da', 'ds', 'ml', 'ai'];

  // ============================================================
  // State management (localStorage)
  // ============================================================
  function loadProgress() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); }
    catch { return {}; }
  }
  function saveProgress(state) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
    catch (e) { console.warn('Could not save progress', e); }
  }
  function loadDays() {
    try { return JSON.parse(localStorage.getItem(DAYS_KEY) || '{}'); }
    catch { return {}; }
  }
  function saveDays(days) {
    try { localStorage.setItem(DAYS_KEY, JSON.stringify(days)); }
    catch (e) { console.warn('Could not save days', e); }
  }

  // ============================================================
  // Helpers
  // ============================================================
  function todayKey() {
    const d = new Date();
    return d.toISOString().slice(0, 10);
  }

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  function countTopicsInRole(roleData) {
    let total = 0;
    let done = 0;
    const state = loadProgress();
    roleData.sections.forEach(section => {
      section.topics.forEach(topic => {
        total++;
        if (state[topic.id]) done++;
      });
    });
    return { total, done };
  }

  function countTopicsInSection(section) {
    let done = 0;
    const state = loadProgress();
    section.topics.forEach(topic => {
      if (state[topic.id]) done++;
    });
    return { total: section.topics.length, done };
  }

  function totalAcrossAll() {
    let total = 0;
    let done = 0;
    ROLE_ORDER.forEach(roleKey => {
      const r = countTopicsInRole(window.CURRICULUM[roleKey]);
      total += r.total;
      done += r.done;
    });
    return { total, done };
  }

  // ============================================================
  // Render — tracks
  // ============================================================
  function renderTopic(topic) {
    const state = loadProgress();
    const checked = !!state[topic.id];
    const resource = topic.resource
      ? `<div class="topic-resource">${escapeHtml(topic.resource)}</div>`
      : '';
    return `
      <div class="topic ${checked ? 'checked' : ''}" data-id="${topic.id}">
        <div class="topic-check"></div>
        <div class="topic-content">
          <div class="topic-text">${escapeHtml(topic.text)}</div>
          ${resource}
        </div>
      </div>
    `;
  }

  function renderSection(section) {
    const { total, done } = countTopicsInSection(section);
    const projectClass = section.isProject ? 'is-project' : '';
    return `
      <div class="section ${projectClass}">
        <div class="section-title">
          <span>${escapeHtml(section.title)}</span>
          <span class="section-title-progress">${done}/${total}</span>
        </div>
        <div class="section-topics">
          ${section.topics.map(renderTopic).join('')}
        </div>
      </div>
    `;
  }

  function renderTrack(roleKey) {
    const role = window.CURRICULUM[roleKey];
    const { total, done } = countTopicsInRole(role);
    const pct = total ? Math.round(done / total * 100) : 0;

    return `
      <article class="track" data-role="${roleKey}">
        <header class="track-header" data-toggle="${roleKey}">
          <div class="track-icon">${ROLE_ICONS[roleKey]}</div>
          <div class="track-info">
            <div class="track-title">${escapeHtml(role.name)}</div>
            <div class="track-tagline">${escapeHtml(role.tagline)}</div>
          </div>
          <div class="track-progress">
            <div class="track-progress-pct" data-track-pct="${roleKey}">${pct}%</div>
            <div class="track-progress-bar">
              <div class="track-progress-bar-fill" data-track-bar="${roleKey}" style="width: ${pct}%"></div>
            </div>
          </div>
          <svg class="track-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </header>

        <div class="track-body">
          <div class="track-body-inner">
            <div class="track-meta-row">
              <span><strong>${role.sections.length}</strong> sections</span>
              <span><strong>${total}</strong> topics</span>
              <span><strong>${role.duration}</strong></span>
            </div>
            <p class="track-description">${escapeHtml(role.description)}</p>
            ${role.sections.map(renderSection).join('')}
          </div>
        </div>
      </article>
    `;
  }

  function renderAllTracks() {
    const tracksEl = document.getElementById('tracks');
    if (!tracksEl) return;
    tracksEl.innerHTML = ROLE_ORDER.map(renderTrack).join('');
  }

  // ============================================================
  // Render — stats
  // ============================================================
  function updateStats() {
    // Overall ring
    const { total, done } = totalAcrossAll();
    const pct = total ? (done / total) : 0;
    const ringEl = document.getElementById('overallRing');
    if (ringEl) {
      const circumference = 2 * Math.PI * 84;  // matches the r=84 in HTML
      ringEl.style.strokeDashoffset = circumference * (1 - pct);
    }
    document.getElementById('overallPct').textContent = `${Math.round(pct * 100)}%`;
    document.getElementById('overallMeta').textContent = `${done} of ${total} topics`;

    // Per-role
    ROLE_ORDER.forEach(roleKey => {
      const r = countTopicsInRole(window.CURRICULUM[roleKey]);
      const rPct = r.total ? Math.round(r.done / r.total * 100) : 0;
      const pctEl = document.getElementById(`pct-${roleKey}`);
      const countEl = document.getElementById(`count-${roleKey}`);
      const barEl = document.getElementById(`bar-${roleKey}`);
      if (pctEl) pctEl.textContent = `${rPct}%`;
      if (countEl) countEl.textContent = `${r.done}/${r.total}`;
      if (barEl) barEl.style.width = `${rPct}%`;

      // Also update the progress bar in the role header
      const trackPctEl = document.querySelector(`[data-track-pct="${roleKey}"]`);
      const trackBarEl = document.querySelector(`[data-track-bar="${roleKey}"]`);
      if (trackPctEl) trackPctEl.textContent = `${rPct}%`;
      if (trackBarEl) trackBarEl.style.width = `${rPct}%`;
    });

    // Update section pills (without re-rendering whole track, to keep DOM stable)
    document.querySelectorAll('.section').forEach(sectionEl => {
      // find topics inside, count checked
      const topicEls = sectionEl.querySelectorAll('.topic');
      const total = topicEls.length;
      let done = 0;
      topicEls.forEach(t => { if (t.classList.contains('checked')) done++; });
      const pillEl = sectionEl.querySelector('.section-title-progress');
      if (pillEl) pillEl.textContent = `${done}/${total}`;
    });
  }

  // ============================================================
  // Calendar grid + streak
  // ============================================================
  function renderCalendar() {
    const grid = document.getElementById('calendarGrid');
    if (!grid) return;
    const days = loadDays();
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    let html = '';
    for (let i = 27; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const k = d.toISOString().slice(0, 10);
      const studied = !!days[k];
      const isToday = i === 0;
      html += `
        <div class="day-cell ${studied ? 'studied' : ''} ${isToday ? 'is-today' : ''}"
             data-date="${k}"
             title="${k}${isToday ? ' (today)' : ''}">${d.getDate()}</div>
      `;
    }
    grid.innerHTML = html;

    // streak
    let streak = 0;
    for (let i = 0; i < 365; i++) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const k = d.toISOString().slice(0, 10);
      if (days[k]) streak++;
      else break;
    }
    const totalDays = Object.keys(days).length;
    document.getElementById('streakBig').textContent = streak;
    document.getElementById('streakTotal').textContent = `${totalDays} day${totalDays === 1 ? '' : 's'} studied`;
  }

  // ============================================================
  // Quote of the day
  // ============================================================
  function renderQuote() {
    const quotes = window.QUOTES || [];
    if (!quotes.length) return;

    // Use day-of-year so it's stable across the day
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const dayOfYear = Math.floor((now - start) / 86400000);
    const idx = dayOfYear % quotes.length;
    const q = quotes[idx];

    document.getElementById('quoteText').textContent = q.text;
    document.getElementById('quoteAuthor').textContent = `— ${q.author}`;
  }

  // ============================================================
  // Event handlers
  // ============================================================
  function attachEventListeners() {
    // Toggle a topic checkbox
    document.addEventListener('click', (e) => {
      const topic = e.target.closest('.topic');
      if (topic) {
        const id = topic.dataset.id;
        const state = loadProgress();
        if (state[id]) delete state[id];
        else state[id] = true;
        saveProgress(state);
        topic.classList.toggle('checked', !!state[id]);
        updateStats();
        return;
      }

      // Toggle a track expand/collapse
      const trackHeader = e.target.closest('.track-header');
      if (trackHeader) {
        const roleKey = trackHeader.dataset.toggle;
        const trackEl = document.querySelector(`.track[data-role="${roleKey}"]`);
        if (trackEl) {
          trackEl.classList.toggle('expanded');
        }
        return;
      }

      // Day cell toggle
      const dayCell = e.target.closest('.day-cell');
      if (dayCell) {
        const k = dayCell.dataset.date;
        const days = loadDays();
        if (days[k]) delete days[k];
        else days[k] = true;
        saveDays(days);
        renderCalendar();
        return;
      }
    });

    // Mark today studied
    const markBtn = document.getElementById('markTodayBtn');
    if (markBtn) {
      markBtn.addEventListener('click', () => {
        const days = loadDays();
        const k = todayKey();
        days[k] = !days[k];
        if (!days[k]) delete days[k];
        saveDays(days);
        renderCalendar();
      });
    }

    // Expand all
    document.getElementById('expandAllBtn').addEventListener('click', () => {
      document.querySelectorAll('.track').forEach(t => t.classList.add('expanded'));
    });

    // Collapse all
    document.getElementById('collapseAllBtn').addEventListener('click', () => {
      document.querySelectorAll('.track').forEach(t => t.classList.remove('expanded'));
    });

    // Export
    document.getElementById('exportBtn').addEventListener('click', () => {
      const data = {
        progress: loadProgress(),
        days: loadDays(),
        exportedAt: new Date().toISOString(),
        version: 1,
      };
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      const dateStr = new Date().toISOString().slice(0, 10);
      a.download = `ramya-mastery-${dateStr}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });

    // Import
    document.getElementById('importBtn').addEventListener('click', () => {
      document.getElementById('importFile').click();
    });
    document.getElementById('importFile').addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        try {
          const data = JSON.parse(ev.target.result);
          if (data.progress) saveProgress(data.progress);
          if (data.days) saveDays(data.days);
          renderAllTracks();
          updateStats();
          renderCalendar();
          alert('Progress imported successfully.');
        } catch {
          alert('Could not parse the file. Make sure it is a valid export.');
        }
        e.target.value = '';
      };
      reader.readAsText(file);
    });

    // Reset all
    document.getElementById('resetBtn').addEventListener('click', () => {
      if (confirm('Reset ALL progress and study days? This cannot be undone.')) {
        saveProgress({});
        saveDays({});
        renderAllTracks();
        updateStats();
        renderCalendar();
      }
    });
  }

  // ============================================================
  // Init
  // ============================================================
  function init() {
    if (!window.CURRICULUM) {
      console.error('Curriculum data not loaded');
      return;
    }
    renderAllTracks();
    updateStats();
    renderCalendar();
    renderQuote();
    attachEventListeners();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
