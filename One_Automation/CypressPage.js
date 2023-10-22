const BasePage = require('./BasePage');

class CypressPage extends BasePage {
  async open(url) {
    cy.visit(url);
  }

  async click(elementSelector) {
    cy.get(elementSelector).click();
  }

  async typeText(elementSelector, text) {
    cy.get(elementSelector).type(text);
  }

  async assertElementVisible(elementSelector) {
    cy.get(elementSelector).should('be.visible');
  }

  async assertElementText(elementSelector, expectedText) {
    cy.get(elementSelector).should('have.text', expectedText);
  }


  async assertTextContains(elementSelector, expectedText) {
    cy.get(elementSelector).contains( expectedText);
  }
}

module.exports = CypressPage;
