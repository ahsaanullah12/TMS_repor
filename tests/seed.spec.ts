import { test, expect } from '@playwright/test';

test.describe('Homepage seed', () => {
  test('opens the homepage and checks key sections', async ({ page }) => {
    // Navigate to the homepage URL.
    await page.goto('https://themoonshow.com/', { waitUntil: 'domcontentloaded' });

    // Check that the browser title contains the expected site name.
    await expect(page).toHaveTitle(/The Moon Show/i);

    // Verify the main page structure loads correctly.
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('main')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();

    // Confirm a few important navigation and content links are visible.
    await expect(page.getByRole('link', { name: 'Blog' }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'About' }).first()).toBeVisible();
    await expect(page.getByText('Exchange Reviews').first()).toBeVisible();
  });
});
