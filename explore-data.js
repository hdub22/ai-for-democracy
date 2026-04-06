/**
 * Shared Google Sheet CSV URL and parsing — used by explore.html and pillars.html.
 */
var SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRJVunO_GBT-aRgi7gU2YeIdC1sPa4ZqYNZWS0_H6O9W3wsx3i8xLzS1sTda4w2_ZTQLvcQA7u4ryC6/pub?gid=1389205839&single=true&output=csv';

var COL = { ORG: 0, WEBSITE: 1, ACTOR: 2, CATEGORY: 3, DESC: 4, PROJECTS: 5, PROJECT_URL: 6, AI_USE: 7, LEGAL: 8, EIN: 9, LEGAL_DETAILS: 10 };

var PILLAR_MAP = [
  { key: 'civic participation',          cls: 'p1', rowCls: 'row-p1' },
  { key: 'deliberation',                 cls: 'p1', rowCls: 'row-p1' },
  { key: 'election integrity',           cls: 'p2', rowCls: 'row-p2' },
  { key: 'accountability',               cls: 'p3', rowCls: 'row-p3' },
  { key: 'transparency',                 cls: 'p3', rowCls: 'row-p3' },
  { key: 'information environment',      cls: 'p4', rowCls: 'row-p4' },
  { key: 'epistemics',                   cls: 'p4', rowCls: 'row-p4' },
  { key: 'civil society',                cls: 'p5', rowCls: 'row-p5' },
  { key: 'governance',                   cls: 'p7', rowCls: 'row-p7' },
  { key: 'policy',                       cls: 'p7', rowCls: 'row-p7' },
];

/** Same strings as Explore Data filter pills — for ?category= deep links */
var PILLAR_EXPLORE_CATEGORY = {
  p1: 'civic participation & deliberation',
  p2: 'election integrity',
  p3: 'accountability & transparency',
  p4: 'information environment & epistemics',
  p5: 'civil society capacity',
  p7: 'governance & policy',
};

function getPillarInfo(category) {
  if (!category) return { cls: '', rowCls: '' };
  const lower = category.toLowerCase();
  for (var i = 0; i < PILLAR_MAP.length; i++) {
    var p = PILLAR_MAP[i];
    if (lower.includes(p.key)) return p;
  }
  return { cls: '', rowCls: '' };
}

function rowMatchesPillar(row, pillarCls) {
  var rowCat = (row[COL.CATEGORY] || '').toLowerCase();
  for (var i = 0; i < PILLAR_MAP.length; i++) {
    var p = PILLAR_MAP[i];
    if (p.cls === pillarCls && rowCat.includes(p.key)) return true;
  }
  return false;
}

function parseCSV(text) {
  var rows = [];
  var cols = [];
  var cur = '';
  var inQuote = false;
  for (var i = 0; i < text.length; i++) {
    var ch = text[i];
    if (ch === '"') {
      if (inQuote && text[i + 1] === '"') { cur += '"'; i++; }
      else { inQuote = !inQuote; }
    } else if (ch === ',' && !inQuote) {
      cols.push(cur.trim()); cur = '';
    } else if ((ch === '\n' || ch === '\r') && !inQuote) {
      if (ch === '\r' && text[i + 1] === '\n') i++;
      cols.push(cur.trim()); cur = '';
      if (cols.some(function (c) { return c !== ''; })) rows.push(cols.slice(0));
      cols.length = 0;
    } else {
      cur += ch;
    }
  }
  cols.push(cur.trim());
  if (cols.some(function (c) { return c !== ''; })) rows.push(cols);
  return rows;
}

function fetchSheetDataRows() {
  return fetch(SHEET_CSV_URL).then(function (res) {
    if (!res.ok) throw new Error('HTTP ' + res.status);
    return res.text();
  }).then(function (text) {
    return parseCSV(text).slice(1);
  });
}

function escapeHtml(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function escapeAttr(str) {
  return String(str).replace(/"/g, '&quot;');
}
