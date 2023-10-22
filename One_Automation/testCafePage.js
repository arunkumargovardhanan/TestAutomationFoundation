const BasePage = require('./BasePage');
const { Selector } = require('testcafe');

class TestCafePage extends BasePage {
  async open(url) {
    await t.navigateTo(url);
  }

  async click(elementSelector) {
    await t.click(Selector(elementSelector));
  }

  async typeText(elementSelector, text) {
    await t.typeText(Selector(elementSelector), text);
  }

  async assertElementVisible(elementSelector) {
    await t.expect(Selector(elementSelector).visible).ok();
  }

  async assertElementText(elementSelector, expectedText) {
    await t.expect(Selector(elementSelector).textContent).eql(expectedText);
  }
}

module.exports = TestCafePage;
