// @ts-check
import { test, expect } from '@playwright/test';

// Define a group of related tests for the homepage.
test.describe('Homepage', () => {
  // This test verifies that the main homepage loads and renders the key page sections.
  test('loads core homepage sections', async ({ page }) => {
    // Navigate to the homepage URL and wait until the DOM content is loaded.
    await page.goto('https://themoonshow.com/', { waitUntil: 'domcontentloaded' });

    // Verify the page title contains the expected site name.
    await expect(page).toHaveTitle(/The Moon Show/i);

    // Confirm the header element is present and visible.
    await expect(page.locator('header')).toBeVisible();

    // Confirm the main content area is present and visible.
    await expect(page.locator('main')).toBeVisible();

    // Confirm the footer section is present and visible.
    await expect(page.locator('footer')).toBeVisible();

    // Verify the Blog link is visible in the navigation or page content.
    await expect(page.getByRole('link', { name: 'Blog' }).first()).toBeVisible();

    // Verify the About link is visible in the navigation or page content.
    await expect(page.getByRole('link', { name: 'About' }).first()).toBeVisible();

    // Verify that the text "Exchange Reviews" appears on the page.
    await expect(page.getByText('Exchange Reviews').first()).toBeVisible();
  });
});
