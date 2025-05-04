describe('Registeration Form Testing', () => {
    it('All', () => {
        cy.visit('https://www.tutorialspoint.com/selenium/practice/register.php');

        it('Registeration', () => {
        cy.get('#firstname').type('Arti');
        cy.get('#lastname').type('Chamle');
        cy.get('#username').type('chamlearti95@gmail.com');
        cy.get('password').type('Ash@2002');
        cy.get('submit').click();
        cy.get('submit').click();
    })

        it('Errors for invalid inputs', () => {
            cy.get('#firstname:invalid').type('1234');
            cy.get('#lastname:invalid').type('4567');
            cy.get('#username:invalid').type('chamlearti95@gmail');
            cy.get('password:invalid').type('********'); 
        })
    });
});