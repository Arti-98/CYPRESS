describe('Contact Form', () => {
    it('Validate the contact form', () => {
        cy.visit('https://practice.expandtesting.com/contact');
        cy.get('[type="text"]').type('Arti');
        cy.get('[type="text"]').type('chamlearti95@gmail.com');
        cy.get('[name="address"]').type('This is a message.');
        cy.get('.btn btn-primary px-4 me-3').click();
    });
});