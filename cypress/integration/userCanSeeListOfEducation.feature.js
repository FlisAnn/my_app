describe("User can see list of educations", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("#resume-tab").click();
  });

  it("displays first education", () => {
    cy.get("#education-4").within(() => {
      cy.get(".image").should("exist");
      cy.get(".header").should("contain", "Craft Academy 2020");
      cy.get(".description").should("contain", "Fullstack Developer BootCamp"); 
    });
  });
});