import { test, expect } from '@playwright/test';

test('PWA carrega e consome API', async ({ page }) => {
  const BASE = process.env.E2E_BASE_URL || 'http://localhost:8080';
  await page.goto(BASE);
  await expect(page).toHaveTitle(/Extensão Pedro PWA/);
  await page.waitForSelector('[data-testid="api-ok"]');
});
