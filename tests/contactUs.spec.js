// @ts-check
import { test, expect } from '@playwright/test';
import ContactUsPage from './contactUs.page.js';

// Create a random string for test data
function randomString(prefix) {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

test.describe('Contact Us page', () => {
  // Test 1: verify the page loads correctly
  test('loads the contact page content', async ({ page }) => {
    const contactPage = new ContactUsPage(page);

    await contactPage.goto();
    await contactPage.expectLoaded();

    await expect(page.getByText('Any question or remarks? Just write us a message!')).toBeVisible();
  });

  // Test 2: verify the form can be filled with generated random data
  test('allows a user to fill out the contact form', async ({ page }) => {
    const contactPage = new ContactUsPage(page);
    const firstName = randomString('fn');
    const lastName = randomString('ln');
    const email = `${firstName.toLowerCase().replace(/[^a-z0-9]/g, '')}@example.com`;
    const phone = `+1${Math.floor(1000000000 + Math.random() * 9000000000)}`;
    const subjectOptions = ['General Inquiry', 'Sponsorship', 'Collaboration'];
    const subject = subjectOptions[Math.floor(Math.random() * subjectOptions.length)];
    const message = `Random message ${randomString('msg')}`;

    await contactPage.goto();
    await contactPage.fillForm({
      firstName,
      lastName,
      email,
      phone,
      subject,
      message
    });

    await expect(page.locator('input[placeholder="First Name*"]')).toBeEditable();
    await expect(page.locator('input[placeholder="Last Name*"]')).toBeEditable();
    await expect(page.locator('input[placeholder="Email*"]')).toBeEditable();
    await expect(page.locator('input[placeholder="Phone Number*"]')).toBeEditable();
    await expect(page.getByRole('textbox', { name: 'Message' })).toBeEditable();
    await expect(page.getByRole('button', { name: 'Send Message' })).toBeEnabled();
  });
});
