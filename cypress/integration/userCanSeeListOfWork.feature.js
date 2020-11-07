describe("User can see list of work experience", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("#resume-tab").click();
  });

  it("displays first education", () => {
    cy.get("#education-1").within(() => {
      cy.get(".image").should("exist");
      cy.get(".header").should("contain", "Test Manager at Telenor");
      cy.get(".description").should("contain", "Test Manager for Backend department, 2018-2020"); 
    });
  });
});