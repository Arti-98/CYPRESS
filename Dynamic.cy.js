describe('', () => {
    it('', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#displayed-text').should('exist').and('be.visible');
        cy.get('#show-textbox').click();
        cy.wait(2000);
        cy.get('#displayed-text').should('be.visible');
        cy.get('#hide-textbox').click();
        cy.wait(2000);
        cy.get('#displayed-text').should('not.be.visible');
    });
});