describe("User can see list of projects", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("#projects-tab").click();
  });

  it("displays first project", () => {
    cy.get("#project-1").within(() => {
      cy.get(".image").should("exist");
      cy.get(".header").should("contain", "Address Book");
      cy.get(".description").should("contain", "In this project I used advanced Javascript concepts and ES6+ Features, persisting data using LocalStorage, testing with Cypress");
      cy.get(".link").should("contain", "https://github.com/FlisAnn/Adressbook");
    });
  });

  it("displays second project", () => {
    cy.get("#project-2").within(() => {
      cy.get(".image").should("exist");
      cy.get(".header").should("contain", "UI Design");
      cy.get(".description").should(
        "contain",
        "Designing user interfaces is fun. I want to learn more about that..."
      );
    });
  });

  it("displays third project", () => {
    cy.get("#project-3").within(() => {
      cy.get(".image").should("exist");
      cy.get(".header").should("contain", "Mobile UX");
      cy.get(".description").should(
        "contain",
        "I like to design for the mobile platform. The challenges to build UI's for smartphones is challenging but extremely rewarding"
      );
    });
  });

})