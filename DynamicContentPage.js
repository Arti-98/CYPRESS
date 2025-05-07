class DynamicContentPage {
    scrollToBottom() {
      cy.window().then((win) => {
        win.scrollTo(0, document.body.scrollHeight);
      });
    }
  
    getItems() {
      return cy.get('.dynamic-item');
    }
  }
  
  export default DynamicContentPage;
  
