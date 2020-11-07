describe("User can see list of work experience", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("#resume-tab").click();
  });

  it("displays first education", () => {
    cy.get("#work-1").within(() => {
      cy.get(".image").should("exist");
      cy.get(".header").should("contain", "Test Manager Telenor 2018-2020");
      cy.get(".description").should("Test Manager for the BackEnd Department"); 
    });
  });
});