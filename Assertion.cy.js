describe('Automate Test Cases using Cypress for books.toscrape.com', () => {

    it('Test Case 1: Verify Page Title', () => {
      cy.visit('https://books.toscrape.com/')
      cy.title().should('eq', 'All products | Books to Scrape - Sandbox')
    })
  
    it('Test Case 2: Non-fiction Link Click Functionality', () => {
      cy.visit('https://books.toscrape.com/')
      cy.contains('Nonfiction').click()
      cy.url().should('include', 'nonfiction')
      cy.get('h1').should('contain.text', 'Nonfiction')
    })

    it('Test Case 3: Add a Book to the Basket', () => {
      cy.visit('https://books.toscrape.com/')
      cy.get('.product_pod').first().click()
      cy.contains('Add to basket').click()

    })
  
  })
  