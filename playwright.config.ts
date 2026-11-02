import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  workers: 2,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: 'http://127.0.0.1:4321',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  ...(process.env.PLAYWRIGHT_EXTERNAL_SERVER === '1' ? {} : {
    webServer: {
      command: 'npm run dev -- --host 127.0.0.1',
      url: 'http://127.0.0.1:4321',
      reuseExistingServer: true,
      timeout: 120_000,
    },
  }),
  projects: [
    { name: 'desktop-chromium', use: { ...devices['Desktop Chrome'], viewport: { width: 1440, height: 1000 } } },
    { name: 'mobile-chromium', use: { ...devices['Pixel 7'] } },
  ],
});
