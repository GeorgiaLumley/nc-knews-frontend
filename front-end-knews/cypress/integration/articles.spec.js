describe("/", () => {
  it("it visits the correct site", () => {
    cy.visit("http://localhost:3001/");
  });

  it("display's 10 article on the home page", () => {
    cy.visit("http://localhost:3001/");

    cy.get("[data-cy=articlesList]")
      .children()
      .should("have.length", 10);
  });
});

describe("/article/createArticle", () => {
  it("create new topic add a topic te existing list", () => {
    cy.visit("http://localhost:3001/article/createArticle");
    cy.get("[data-cy=createTitle]").type("cypress testing");

    cy.get("[data-cy=createNewTopic]").click();
    cy.get("[data-cy=newTopicName").type("cypress testing");
    cy.get("[data-cy=newTopicDescription]").type(
      "cypress is great for testing front end"
    );
    cy.get("[data-cy=addNewTopicButton]").click();
  });
  it("topics should have been added to the list", () => {
    cy.visit("http://localhost:3001/article/createArticle");
    cy.get("[data-cy=topicSelector]")
      .children()
      .should("have.length", 5);
  });
});
