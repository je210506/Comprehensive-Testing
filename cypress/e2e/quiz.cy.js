// import { mockState } from '../support/utils/helpers';
// import { Responses } from '../support/types';

describe('Quiz Component', () => {
  //context('Game Setup', () => {
    beforeEach(() => {
      // Stub the API request for starting the game      
      cy.visit('/');
    });

    it('should GET a random word with masked letters on page load and render the masked word to the page', () => {
      // Wait for the API call to complete
      cy.wait('@getRandomWord').its('response.statusCode').should('eq', 200);

      // Check if the masked word is rendered on the page
    //   cy.get('[data-cy="masked-word"]').should('contain', mockState.maskedWord);
    });
  });
