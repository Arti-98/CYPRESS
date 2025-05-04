import LoginPage from '..\..\PageObjects\LoginPage.js';
describe('OrangeHRM Login Test', () => {
  const loginPage = new LoginPage();

  it('should log in with valid credentials', () => {
    loginPage.visit();
    loginPage.enterUsername('Admin');
    loginPage.enterPassword('admin123');
    loginPage.clickLogin();
    cy.url().should('include', '/dashboard');
  });
});
