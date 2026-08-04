import { test, expect } from '@playwright/test';

test.describe('EstateFlow Real Estate E2E Automation Suite', () => {
  test('should load landing page with properties search', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('text=EstateFlow')).toBeVisible();
  });

  test('should navigate to properties catalog', async ({ page }) => {
    await page.goto('/properties');
    await expect(page.locator('text=Luxury Residence Portfolio')).toBeVisible();
  });

  test('should navigate to agents directory', async ({ page }) => {
    await page.goto('/agents');
    await expect(page.locator('text=Managing Partners & Brokers')).toBeVisible();
  });

  test('should test mortgage telemetry calculator', async ({ page }) => {
    await page.goto('/calculator');
    await expect(page.locator('text=Real-Time Mortgage Telemetry')).toBeVisible();
  });
});
