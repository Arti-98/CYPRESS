describe('', () => {
    it('', () => {
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/');
        cy.log(cy.get('.et_pb_text_inner h3'));
        cy.get('.et_pb_text_inner h3').should('contain','HTML elements');
        cy.get('.et_pb_text_inner h3').should('contain','mpl');
    });
});