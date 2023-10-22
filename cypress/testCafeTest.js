const TestCafePage = require('../One_Automation/testCafePage');
const testCafePage = new TestCafePage();

fixture('Google Search with TestCafe')
  .page('https://www.google.com');

test('should perform a Google search and validate results', async t => {
  testCafePage.typeText('input[name="q"]', 'TestCafe Testing');
  testCafePage.pressKey('enter');

  await testCafePage.assertElementVisible('h3'); // Assuming the search results are enclosed in h3 elements
  await testCafePage.assertElementText('h3', 'TestCafe Testing');
});
