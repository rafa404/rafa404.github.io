import { expect, test } from '@playwright/test';

const routes = ['/', '/research/', '/publications/', '/cv/'];

for (const route of routes) {
  test(`${route} renders without overflow or console errors`, async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (message) => {
      if (message.type() === 'error') errors.push(message.text());
    });
    await page.goto(route);
    await page.waitForLoadState('networkidle');
    await expect(page.locator('h1')).toHaveCount(1);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
    expect(overflow).toBe(false);
    expect(errors).toEqual([]);
  });
}

test('publication routes expose verified status and official links', async ({ page }) => {
  await page.goto('/publications/2026-icpr-fed-ccg-osteosarcoma/');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Client Communication Graphs');
  await expect(page.getByText('Published', { exact: true }).first()).toBeVisible();
  await expect(page.getByRole('link', { name: 'View publication' })).toHaveAttribute('href', /springer\.com/);
});

test('Swin-MSEG-Pro is selected and exposes its verified publisher record', async ({ page }) => {
  await page.goto('/');
  const selected = page.locator('#publications');
  await expect(selected.getByRole('link', { name: /Swin-MSEG-Pro: Uncertainty-aware boundary-focused/i })).toBeVisible();

  await page.goto('/publications/swin-mseg-pro-array/');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Swin-MSEG-Pro');
  await expect(page.getByText('Q1', { exact: false }).first()).toBeVisible();
  await expect(page.getByText('10.1016/j.array.2026.101265', { exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'View publication' })).toHaveAttribute('href', /sciencedirect\.com\/science\/article\/pii\/S2590005626005886/);
});

test('author-confirmed conference records are presented as in press without fabricated DOI metadata', async ({ page }) => {
  await page.goto('/publications/');
  await page.getByRole('button', { name: /In press 4/i }).click();
  const ledger = page.locator('#publication-records');
  await expect(ledger.locator('[data-publication-record]:visible .status.in-press')).toHaveCount(4);
  await expect(ledger.getByRole('link', { name: /GesturePolypSeg/i })).toBeVisible();
  await expect(ledger.locator('[data-publication-record]:visible a[href*="doi.org"]')).toHaveCount(0);
  await expect(page).toHaveURL(/status=in-press/);
});

test('FedHisto-PAST exposes the author-approved public arXiv record', async ({ page }) => {
  await page.goto('/publications/fedhisto-past-arxiv-2026/');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('FedHisto-PAST');
  await expect(page.getByText('Preprint', { exact: true }).first()).toBeVisible();
  await expect(page.getByRole('link', { name: 'View publication' })).toHaveAttribute('href', 'https://arxiv.org/abs/2609.31150');
});

test('homepage exposes the restored research system and supplied portrait', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Swin-MSEG-Pro', exact: true })).toBeVisible();
  const avatar = page.locator('.wordmark-avatar img');
  await expect(avatar).toBeVisible();
  await expect.poll(() => avatar.evaluate((image) => (image as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
  await expect(page.locator('.home-portrait figcaption')).toHaveCount(0);
});

test('homepage sections reveal as they enter the viewport', async ({ page }) => {
  await page.goto('/');
  const publicationIntro = page.locator('#publications .section-intro');
  await publicationIntro.scrollIntoViewIfNeeded();
  await expect(publicationIntro).toHaveClass(/is-revealed/);
  await expect.poll(() => publicationIntro.evaluate((element) => getComputedStyle(element).opacity)).toBe('1');
});

test('architecture plates share one visual stage and open an accessible dialog', async ({ page }) => {
  await page.goto('/');
  const stages = page.locator('.figure-expand');
  await expect(stages).toHaveCount(4);
  const heights = await stages.evaluateAll((elements) => elements.map((element) => element.getBoundingClientRect().height));
  expect(Math.max(...heights) - Math.min(...heights)).toBeLessThan(2);
  await stages.last().click();
  const dialog = page.getByRole('dialog', { name: /Swin-UNet nuclei segmentation pipeline/i });
  await expect(dialog).toBeVisible();
  await dialog.getByRole('button', { name: /Close Swin-UNet/i }).click();
  await expect(dialog).not.toBeVisible();
});

test('author-approved under-review metadata is public while confidential manuscripts stay private', async ({ page }) => {
  const reviewRecords = [
    'DiffBiz-Guard',
    'DiffusionRef-IMU',
    'Reliable Prerequisite-Aware Learning Path Recommendation',
  ];
  const privateRecords = ['Learning When to Verify', 'VM-UNet', 'Submitted manuscript'];

  await page.goto('/publications/?status=under-review');
  const visibleReviewRecords = page.locator('[data-publication-record]:visible');
  await expect(visibleReviewRecords).toHaveCount(3);
  for (const reviewRecord of reviewRecords) {
    await expect(visibleReviewRecords.getByText(reviewRecord, { exact: false })).toBeVisible();
  }
  await expect(visibleReviewRecords.getByRole('link', { name: 'Read details' })).toHaveCount(0);

  for (const route of routes) {
    await page.goto(route);
    const body = await page.locator('body').innerText();
    for (const privateRecord of privateRecords) expect(body).not.toContain(privateRecord);
  }
});
