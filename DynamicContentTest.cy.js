import DynamicContentPage from 'cypress\support\PageObjects\DynamicContentPage.js';

describe('Dynamic Content Loading Test', () => {
  const page = new DynamicContentPage();

  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  });

  it('should load new content after scrolling', () => {
    page.getItems().then(($itemsBefore) => {
      const initialCount = $itemsBefore.length;

      page.scrollToBottom();
      cy.wait(2000); 

      page.getItems().should('have.length.greaterThan', initialCount);
    });
  });

  it('bonus: should load exactly 10 more items after scroll', () => {
    page.getItems().then(($itemsBefore) => {
      const initialCount = $itemsBefore.length;
      page.scrollToBottom();
      cy.wait(2000);
      page.getItems().should('have.length', initialCount + 10);
    });
  });
});
