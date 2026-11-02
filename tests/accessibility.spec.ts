import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

for (const route of ['/', '/research/', '/publications/', '/cv/', '/publications/2026-elsevier-fedpaxa-net/', '/publications/swin-mseg-pro-array/', '/publications/fedhisto-past-arxiv-2026/']) {
  test(`${route} has no serious accessibility violations`, async ({ page }) => {
    await page.goto(route);
    await page.waitForLoadState('networkidle');
    const results = await new AxeBuilder({ page }).analyze();
    const serious = results.violations.filter((violation) => ['serious', 'critical'].includes(violation.impact ?? ''));
    expect(serious).toEqual([]);
  });
}
