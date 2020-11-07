describe("User can see list of educations", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("#resume-tab").click();
  });

  it("displays first education", () => {
    cy.get("#education-1").within(() => {
      cy.get(".image").should("exist");
      cy.get(".header").should("contain", "Södertörns Högskola 2004-2007");
      cy.get(".description").should("contain", "Bachelor degree in IT, Media &amp Design"); 
    });
  });
});