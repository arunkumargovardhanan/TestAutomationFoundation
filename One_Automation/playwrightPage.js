const BasePage = require('./BasePage');
const assert = require('assert');


class PlaywrightPage extends BasePage {
  async open(url) {
    await this.driver.goto(url);
  }

  async click(elementSelector) {
    await this.driver.click(elementSelector);
  }

  async typeText(elementSelector, text) {
    await this.driver.type(elementSelector, text);
  }

  async assertElementVisible(elementSelector) {
    const element = await this.driver.$(elementSelector);
    expect(element).not.toBeNull();
  }

  async assertElementText(elementSelector, expectedText) {
    const element = await this.driver.$(elementSelector);
    const text = await element.textContent();
    expect(text).toEqual(expectedText);
  }
}

module.exports = PlaywrightPage;
