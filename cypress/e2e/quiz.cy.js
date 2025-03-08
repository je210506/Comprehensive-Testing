// import { mockState } from '../support/utils/helpers';
// import { Responses } from '../support/types';

describe('Quiz Component', () => {
  //context('Game Setup', () => {
    beforeEach(() => {
      // Stub the API request for starting the game      
      cy.visit('/');
    });

    it('should display the start button when the page loads', () => {
      // Wait for the API call to complete
      cy.get('button#Start').should('be.visible').and('contain', 'Start Quiz');
      
    });

    it('should start the quiz when the button is clicked', () => {

      cy.get('button#Start').click();
      cy.get('.questions').should('exist');
      cy.get('.answers').should('have.length.greaterThan', 0);
    });

    it('should allow the user to answer the question', () => {

      cy.get('button#start').click();
      cy.get('.answers button').first().click();
      cy.get('.questions').should('exist');
      cy.get('.answers').should('have.length.greaterThan', 0);
    });

    it('should show the result after answering all questions', () => {
      // Start the quiz
      cy.get('button#start').click();
      // Answer all questions 
      cy.get('.answers button').each(($btn) => {
        cy.wrap($btn).click();
      });
      // Verify the final result screen shows after all questions have been answered
      cy.get('.result').should('be.visible');
    });
  
  });
