const CypressPage = require('../../../One_Automation/CypressPage');
const cypressPage = new CypressPage();

describe('Google Search with Cypress', () => {
  it('should perform a Google search and validate results', () => {
    cypressPage.open('https://www.google.com');
    cypressPage.typeText('[type="search"]', 'Cypress Testing');
    cypressPage.typeText('[type="search"]', '{enter}');

    cypressPage.assertElementVisible('h3'); // Assuming the search results are enclosed in h3 elements
    cypressPage.assertTextContains('h3', 'Cypress: JavaScript Component Testing and E2E Testing ...');
  });
});