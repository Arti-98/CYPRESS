class NavbarPage {
  clickmandauser() {
    cy.get('.oxd-userdropdown-name').click();
  }
  clickAbout() {
    cy.get('.oxd-userdropdown-link').click();
  }
  clickSupport() {
    cy.get('.oxd-userdropdown-link').click();
  }
}
export default NavbarPage;
