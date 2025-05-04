describe('', () => {
    it('', () => {
        cy.visit('https://practice-automation.com/form-fields/');
        cy.get('#drink1').click();
        cy.get('#drink1').uncheck();
        cy.get('#color1').click();
        cy.get('#automation').select(0);
    });
});