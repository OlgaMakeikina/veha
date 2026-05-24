/**
 * IndexNow submission script for ooovexa.ru
 *
 * Notifies search engines (Yandex, Bing) about pages so they get indexed faster.
 * Список URL берётся из package.json → reactSnap.include — single source of truth,
 * автоматически синхронизирован с react-snap pre-rendered routes.
 *
 * Usage:
 *   node scripts/indexnow.js          — submit all pages
 *   node scripts/indexnow.js /tarify  — submit specific URL
 */

const fs = require('fs');
const path = require('path');

const HOST = 'ooovexa.ru';
const KEY = 'a31634d59f93436a9d7416c8a444d266';

const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'package.json'), 'utf8'));
const ALL_URLS = pkg.reactSnap && Array.isArray(pkg.reactSnap.include) ? pkg.reactSnap.include : ['/'];

const INDEXNOW_ENDPOINTS = [
  'https://yandex.com/indexnow',
  'https://api.indexnow.org/indexnow'
];

async function submitUrls(urls) {
  const fullUrls = urls.map(u => `https://${HOST}${u}`);

  console.log(`[IndexNow] Submitting ${fullUrls.length} URLs for ${HOST}`);

  for (const endpoint of INDEXNOW_ENDPOINTS) {
    const body = {
      host: HOST,
      key: KEY,
      keyLocation: `https://${HOST}/${KEY}.txt`,
      urlList: fullUrls
    };

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify(body)
      });

      const status = res.status;
      if (status === 200 || status === 202) {
        console.log(`[IndexNow] ${endpoint} — OK (${status})`);
      } else {
        const text = await res.text().catch(() => '');
        console.error(`[IndexNow] ${endpoint} — ${status} ${text}`);
      }
    } catch (error) {
      console.error(`[IndexNow] ${endpoint} — Error: ${error.message}`);
    }
  }
}

const args = process.argv.slice(2);
const urls = args.length > 0 ? args : ALL_URLS;

submitUrls(urls).then(() => {
  console.log('[IndexNow] Done');
});
