describe('Validate Login page', () => {
    it('Login Page Elements', () => {
    cy.visit('https://practice.expandtesting.com/login');
    cy.get('input[name="username"]').should('exist');
    cy.get('input[name="password"]').should('exist');

    cy.get('[type="submit"]').should('be.visible');

    cy.get('#username').type('wronguser');
    cy.get('#password').type('wrongpass');
    cy.get('[type="submit"]').click();

    cy.get('#flash').should('be.visible').and('contain.text','Your username is invalid!');
    });
});