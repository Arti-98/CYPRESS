describe('Login Page Tests', () => {
    const Url = 'https://the-internet.herokuapp.com/login';
  
    beforeEach(() => {
      cy.visit(Url);
    });
  
    afterEach(() => {
      cy.clearCookies();
    });
  
    it('should display the login button', () => {
      cy.get('button[type="submit"]').should('be.visible');
    });
  
    it('should contain an input field with placeholder "Enter your email"', () => {
      cy.get('input[placeholder="Enter your email"]').should('not.exist');
    });
  });
  