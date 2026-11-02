import { expect, test } from '@playwright/test';

const routes = [
  { path: '/', name: 'home' },
  { path: '/research/', name: 'research' },
  { path: '/publications/', name: 'publications-index' },
  { path: '/publications/2026-icpr-fed-ccg-osteosarcoma/', name: 'publication' },
  { path: '/publications/fedhisto-past-arxiv-2026/', name: 'fedhisto-preprint' },
];

for (const route of routes) {
  test(`${route.name} visual record`, async ({ page }, testInfo) => {
    test.setTimeout(60_000);
    await page.goto(route.path, { waitUntil: 'load' });
    await page.locator('img').evaluateAll((images) => {
      images.forEach((image) => { (image as HTMLImageElement).loading = 'eager'; });
    });
    await page.evaluate(async () => {
      await document.fonts.ready;
    });
    await page.waitForFunction(() => Array.from(document.images).every((image) => image.complete), undefined, { timeout: 30_000 });
    const failedImages = await page.locator('img').evaluateAll((images) => images
      .map((image) => image as HTMLImageElement)
      .filter((image) => image.naturalWidth === 0)
      .map((image) => image.currentSrc || image.src));
    expect(failedImages).toEqual([]);
    await expect(page.locator('h1')).toBeVisible();
    await page.evaluate(async () => {
      const step = Math.max(300, Math.floor(window.innerHeight * 0.72));
      for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
        window.scrollTo(0, y);
        await new Promise((resolve) => window.setTimeout(resolve, 35));
      }
      document.documentElement.style.scrollBehavior = 'auto';
      window.scrollTo(0, 0);
      await new Promise((resolve) => window.setTimeout(resolve, 50));
    });
    await page.locator('[data-reveal]').evaluateAll((elements) => {
      elements.forEach((element) => element.classList.add('is-revealed'));
    });
    await page.screenshot({
      path: `test-results/visual/${testInfo.project.name}-${route.name}.png`,
      fullPage: true,
      animations: 'disabled',
    });
    if (route.name === 'home') {
      await page.screenshot({
        path: `test-results/visual/${testInfo.project.name}-home-viewport.png`,
        animations: 'disabled',
      });
      await page.locator('.plate-image').last().screenshot({
        path: `test-results/visual/${testInfo.project.name}-architecture-swin.png`,
        animations: 'disabled',
      });
      await page.locator('.topology').screenshot({
        path: `test-results/visual/${testInfo.project.name}-research-constellation.png`,
        animations: 'disabled',
      });
    }
    if (route.name === 'publication') {
      await page.locator('.plate-image').first().screenshot({
        path: `test-results/visual/${testInfo.project.name}-architecture-detail.png`,
        animations: 'disabled',
      });
    }
  });
}
