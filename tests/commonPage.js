// @ts-check

export default class CommonPage {
  constructor(page) {
    this.page = page;
  }

  getBaseUrl() {
    return 'https://themoonshow.com/';
  }

  async openHomePage() {
    await this.page.goto(this.getBaseUrl(), { waitUntil: 'domcontentloaded' });
  }
}
