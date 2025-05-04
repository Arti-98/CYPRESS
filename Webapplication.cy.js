describe('Heroku App', () => {
    it('Webapplication Of Heroku', () => {
        cy.visit('https://the-internet.herokuapp.com');
      cy.wait(5000); 
    });
  
    it('Waits until Hello World is displayed', () => {
      cy.visit('https://the-internet.herokuapp.com/dynamic_loading/1');
      cy.get('#start button').click();
      cy.get('#finish h4', { timeout: 10000 }).should('have.text', 'Hello World!');
    });
  
    it('Fetch values from the 2 tables', () => {
      cy.visit('https://the-internet.herokuapp.com/tables');
  
      cy.get('#table1 tbody tr').eq(3).find('td').eq(2).then(($cell) => {
        cy.log('Table1 - 4th Row, 3rd Column:', $cell.text());
      });
  
      cy.get('#table2 tbody tr').eq(1).find('td').last().then(($cell) => {
        cy.log('Table2 - 2nd Row, Last Column:', $cell.text());
      });
    });
  
    it('Handles the window/tab from the webpage', () => {
      cy.visit('https://the-internet.herokuapp.com/windows');
      cy.contains('Click Here').invoke('removeAttr', 'target').click(); 
      cy.url().should('include', 'windows/new');
      cy.contains('New Window').should('be.visible');
    });
  
    it('Handles all alerts', () => {
      cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

      cy.contains('Click for JS Alert').click();
      cy.on('window:alert', (str) => {
        expect(str).to.equal('I am a JS Alert');
      });
  
      cy.contains('Click for JS Confirm').click();
      cy.on('window:confirm', () => true); 
      cy.get('#result').should('have.text', 'You clicked: Ok');
  
      cy.window().then((win) => {
        cy.stub(win, 'prompt').returns('Cypress Test');
        cy.contains('Click for JS Prompt').click();
      });
      cy.get('#result').should('contain.text', 'You entered: Cypress Test');

    });
});
  