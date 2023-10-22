class BasePage {
  constructor(driver) {
    this.driver = driver;
  }

  async open(url) {
    throw new Error('Subclasses must implement this method');
  }

  async click(elementSelector) {
    throw new Error('Subclasses must implement this method');
  }

  async typeText(elementSelector, text) {
    throw new Error('Subclasses must implement this method');
  }

  // Common assertion methods
  async assertElementVisible(elementSelector) {
    throw new Error('Subclasses must implement this method');
  }

  async assertElementText(elementSelector, expectedText) {
    throw new Error('Subclasses must implement this method');
  }
}

module.exports = BasePage;
