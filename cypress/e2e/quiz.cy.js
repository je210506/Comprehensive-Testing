// import { mount } from "cypress/react";
// import Quiz from "../../client/src/components/Quiz";

describe('Quiz Component', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3001/');
  });


    it('should display the start button when the page loads', () => {
      // Wait for the API call to complete
      cy.visit('http://localhost:3001/');
      cy.get('button').should('be.visible').contains('Start Quiz');
      
    });

    it('should start the quiz when the button is clicked', () => {
      
      cy.get('button').contains('Start Quiz').click();
      cy.get('.card').should('be.visible');
    });

    //math.random
    it('should allow the user to answer a question', () => {
      // cy.get('.btn').eq(Math.floor(Math.random() *4)).click();
      cy.get(':nth-child(1) > .btn').first().click(); // Click the first answer option
    });

    it("should complete the quiz when the last question gets answered", () => {
      cy.get('.btn').contains("Start Quiz").click();
      for (let i=0; i<10; i++) {
        cy.get("button").contains("1").click()
      }
      cy.get("h2").contains("Quiz Completed").should("exist");
    });

    it("should Restart the quiz", () => {
      cy.get("button").contains("Start Quiz").click();
      for (let i=0; i<10; i++) {
        cy.get("button").contains("1").click()
      }
      cy.get(".btn").click();
      cy.get(".card").should("be.visible");
    })

  });
  