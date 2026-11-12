import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  // forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  // retries: process.env.CI ? 0 : 2,
  /* Opt out of parallel tests on CI. */
  // workers: process.env.CI ? 1 : 2,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['html', {
      open: 'never',
      // outputFolder: `playwright-report-${new Date().toLocaleString()
      // .replaceAll(/[/:, ]/g, '-')}`
    }],
    // ['dot'],
    // ['json', { outputFile: 'jsonReport.json' }],
    // ['junit', { outputFile: 'junitReport.xml' }],
    // ['blob'],
    // ['list'],
    // ['line'],
    // ['allure-playwright']
  ],

  timeout: 15 * 1000, // milli seconds
  expect: {
    timeout: 1 * 1000
  },
  use: {
    screenshot: 'off',
    video: 'retain-on-failure',
    trace: 'retain-on-failure'
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1530, height: 685 }
      },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // }


  ]


});
