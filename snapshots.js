const PercyScript = require('@percy/script');

PercyScript.run(async (page, percySnapshot) => {
  await page.goto('https://ricardoferreirades.github.io/static-site');
  // ensure the page has loaded before capturing a snapshot
  await page.waitFor('h1');
  await percySnapshot('homepage');
});