describe('Handle iframe', () => {
    it('Click Join now', () => {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
      cy.getIframeBody('#courses-iframe').contains('JOIN NOW').click();
    });
  });