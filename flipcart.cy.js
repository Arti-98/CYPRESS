describe('Flipkart', () => {
    it('Handles invisible elements and validates content', () => {
      cy.visit('https://www.flipkart.com');
      cy.get('body').then($body => {
        if ($body.find('button._2KpZ6l._2doB4z').length > 0) {
          cy.get('button._2KpZ6l._2doB4z').click(); 
        }
      });
      cy.get('input[name="q"]').then($input => {
        expect($input.attr('placeholder')).to.not.equal('Search for products, brands and more');
      });
      cy.get('._1XjE3T', { timeout: 20000 }).should('exist').should('be.visible')
        .contains('Electronics', { timeout: 20000 })
        .then($el => {
          expect($el.text()).to.include('Electronics');
        });
    });
  });
  