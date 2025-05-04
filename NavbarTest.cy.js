import NavbarPage from './pageObjects/NavbarPage';

describe('Navbar Test', () => {
  const navbar = new NavbarPage();

  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); 
  });

  it('should navigate to Home page', () => {
    navbar.clickHome();
    cy.url().should('include', '/home');
  });

  it('should navigate to About page', () => {
    navbar.clickAbout();
    cy.url().should('include', '/about');
  });

  it('should navigate to Contact page', () => {
    navbar.clickContact();
    cy.url().should('include', '/contact');
  });
});