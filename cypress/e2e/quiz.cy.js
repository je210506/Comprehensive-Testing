// import { mount } from "cypress/react";
// import Quiz from "../../client/src/components/Quiz";

describe('Quiz Component', () => {

    beforeEach(() => {
      cy.intercept({
        method: "GET",
        url: "/api/questions/random"
      },
      {
        fixture: "questions.json",
        statusCode: 200,
      }
    ).as("getRandomQuestion") 
    
    cy.visit('/');
    cy.wait("@getRandomQuestion");
    });

    it('should display the start button when the page loads', () => {
      // Wait for the API call to complete
      cy.get('button').should('be.visible').contains('Start Quiz');
      
    });

    it('should start the quiz when the button is clicked', () => {
      cy.get('button').contains('Start Quiz').click();
      cy.get('.card').should('be.visible');
    });

    it('should allow the user to answer a question', () => {
      cy.get('button').click();
      cy.get('[data-test="answer-option"]').first().click(); // Click the first answer option
      cy.get('[data-test="answer-option"]').should('have.length.greaterThan', 0); // Ensure answer options exist
    });

    it("should complete the quiz when the last question gets answered", () => {
      cy.get("button").contains("Start Quiz").click();
      for (let i=0; i<20; i++) {
        cy.get("button").contains("1").click()
      }
      cy.get("h2").contains("Quiz Completed").should("exist");
    });

    it("should Restart the quiz", () => {
      cy.get("button").contains("Start Quiz").click();
      for (let i=0; i<20; i++) {
        cy.get("button").contains("1").click().wait()
      }
      cy.get("button").click();
      cy.get(".card").should("be.visible");
    })

  });
  