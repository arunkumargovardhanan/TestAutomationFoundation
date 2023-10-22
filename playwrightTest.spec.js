const { chromium } = require('playwright');
const assert = require('assert');
const PlaywrightPage = require('./One_Automation/playwrightPage');

describe('Google Search with Playwright (Chrome)', () => {
  let browser;
  let playwrightPage;

  before(async () => {
    // Launch a new Chromium (Chrome) browser instance and store it in the "browser" variable
    browser = await chromium.launch();
    const page = await browser.newPage();
    // const 
    // browser = await chromium.launch({ channel: 'chrome' });
  });

  after(async () => {
    // Close the "browser" variable when the tests are done
    await browser.close();
  });

  beforeEach(async () => {
    const page = await browser.newPage();
    playwrightPage = new PlaywrightPage(page);
  });

  it('should perform a Google search and validate results', async function() {
    this.timeout(10000); // Set a timeout of 10 seconds (10,000ms)
  
    await playwrightPage.open('https://www.google.com');
    await playwrightPage.typeText('input[name="q"]', 'Playwright Testing');
    await playwrightPage.pressKey('Enter');
  
    await playwrightPage.assertElementVisible('h3'); // Assuming the search results are enclosed in h3 elements
    await playwrightPage.assertElementText('h3', 'Playwright Testing');
  });
});
