// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe("App", function() {
  beforeEach(function() {
    cy.visit("/");
  });

  it("renders the app", function() {
    cy.get(".ace_text-input")
      .first()
      .focus()
      .type("foo bar");

    // A forced way to blur from AceEditor
    cy.get("h1")
      .first()
      .click();

    cy.get(".ace_text-input")
      .first()
      .focus()
      .type(" another thing typed into the editor");
  });
});
