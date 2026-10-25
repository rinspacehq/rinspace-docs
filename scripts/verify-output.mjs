import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';

const root = new URL('../out/', import.meta.url);
const pages = [
  ['index.html', '芥子环技术文档'],
  ['architecture/index.html', '系统架构'],
  ['creation/index.html', '内容创作'],
  ['projects/index.html', '开源项目'],
  ['authoring/index.html', '编写文档'],
];

for (const [path, heading] of pages) {
  const html = await readFile(new URL(path, root), 'utf8');
  assert.ok(html.includes(heading), `${path} lacks ${heading}`);
  assert.ok(html.includes('/docs/_next/'), `${path} lacks prefixed assets`);
  assert.ok(!html.includes('href="/_next/'), `${path} has a root asset link`);
}

const assets = new URL('_next/static/', root);
assert.ok((await stat(assets)).isDirectory(), 'Next static assets missing');
const search = JSON.parse(await readFile(new URL('api/search', root), 'utf8'));
assert.equal(search.type, 'advanced', 'Static search export missing');

console.log(`Verified ${pages.length} documentation routes, static assets and search export`);
