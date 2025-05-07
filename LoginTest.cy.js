import LoginPage from '../support/pageObjects/LoginPage';

describe('Login Test', () => {
  const loginPage = new LoginPage();

  it('should log in with valid credentials', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    loginPage.enterUsername('Admin');
    loginPage.enterPassword('admin123');
    loginPage.clickLogin();

    cy.url().should('include', '/dashboard');
  });
});
