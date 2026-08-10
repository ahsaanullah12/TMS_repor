const { chromium } = require('@playwright/test');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://themoonshow.com/contact-us', { waitUntil: 'domcontentloaded' });
  await page.locator('input[placeholder="First Name*"]').fill('abc');
  console.log('firstName value:', await page.locator('input[placeholder="First Name*"]').inputValue());
  await page.locator('input[placeholder="Last Name*"]').fill('def');
  console.log('lastName value:', await page.locator('input[placeholder="Last Name*"]').inputValue());
  await page.locator('input[placeholder="Email*"]').fill('test@example.com');
  console.log('email value:', await page.locator('input[placeholder="Email*"]').inputValue());
  await browser.close();
})();
