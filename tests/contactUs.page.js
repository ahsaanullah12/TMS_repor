// @ts-check
import { expect } from '@playwright/test';
import CommonPage from './commonPage.js';

// Page object for the Contact Us page
export default class ContactUsPage extends CommonPage {
  constructor(page) {
    super(page);
  }

  // Open the homepage first
  async openHomePage() {
    await super.openHomePage();
  }

  // Navigate to the Contact Us page through the main navigation
  async goto() {
    await this.openHomePage();
    await this.page.getByRole('link', { name: 'About' }).first().click();
    await this.page.locator('#topmenu').getByRole('link', { name: 'Contact Us' }).first().click();
  }

  // Verify that the page is loaded and its key elements are visible
  async expectLoaded() {
    await expect(this.page).toHaveTitle(/Contact Us/i);
    await expect(this.page.getByRole('heading', { name: 'Contact Us' })).toBeVisible();
    await expect(this.page.getByText('Any question or remarks? Just write us a message!')).toBeVisible();
    await expect(this.page.getByText('marketing@themoonshow.com')).toBeVisible();
    await expect(this.page.locator('input[placeholder="First Name*"]')).toBeVisible();
    await expect(this.page.locator('input[placeholder="Last Name*"]')).toBeVisible();
    await expect(this.page.locator('input[placeholder="Email*"]')).toBeVisible();
    await expect(this.page.locator('input[placeholder="Phone Number*"]')).toBeVisible();
    await expect(this.page.getByRole('textbox', { name: 'Message' })).toBeVisible();
    await expect(this.page.getByRole('button', { name: 'Send Message' })).toBeVisible();
  }

  // Helper method to type into an input field and trigger input/change events
  async setInputValue(locator, value) {
    await locator.click({ force: true });
    await locator.evaluate((element, text) => {
      const input = element;
      input.focus();
      input.value = text;
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.dispatchEvent(new Event('change', { bubbles: true }));
    }, value);
  }

  // Fill the whole contact form using the provided values
  async fillForm({ firstName, lastName, email, phone, subject, message }) {
    await this.setInputValue(this.page.locator('input[placeholder="First Name*"]'), firstName);
    await this.setInputValue(this.page.locator('input[placeholder="Last Name*"]'), lastName);
    await this.setInputValue(this.page.locator('input[placeholder="Email*"]'), email);
    await this.setInputValue(this.page.locator('input[placeholder="Phone Number*"]'), phone);

    // Select the chosen subject if one is provided
    if (subject) {
      await this.page.getByRole('radio', { name: subject }).check({ force: true });
    }

    // Fill the message textarea
    await this.setInputValue(this.page.getByRole('textbox', { name: 'Message' }), message);
  }
}
