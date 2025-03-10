# Comprehensive-Testing


## Description
This project enhances the existing Tech Quiz application by adding comprehensive end-to-end (E2E) and component tests using Cypress. The application is built with the MERN stack, featuring a React front end, MongoDB database, and a Node.js/Express.js server. Users can take a quiz with ten random questions and view their final scores.


## Badge
None.


## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Test Instructions](#testinstructions)
- [Questions](#questions)
   

## Installation 
1. Clone the Repository:
```
git clone <respository-SSH key>
cd social-network-api
```

2. Install the necessary ependencies:
```
npm install
```

3. Setup Cypress

Ensure Cypress is installed using ``` npm install cypress```

4. Start the server in one integrated terminal:

```
npm run build

npm run start:dev
```

5. Run Cypress in a second integrated terminal:

```
npm run cypress
```

Your site should now be running locally and you should see Cypress appear.


## Usage 

### Running the Development Server

To start the Tech Quiz app, run:

```
npm start
```

### Running Cypress Tests

1. Open Cypress Test Runner

To open the interactive Cypress test runner, run:

```
npm run cypress 
```

2. Run End-to-End Tests in Cypress

3. Run Component Tests


## License 
This project is not licensed. 


## Contributing 
Contributions are welcome! To contribute:
1. Fork the repository.

2. Create a new branch:
```
git checkout -b feature/yourFeature
```

3. Commit your changes:
```

git commit -m "Add new feature"
```

4. Push to your branch:
```

git push origin feature/yourFeature
```

5. Open a pull request for review.


## Test Instructions 

### Component Testing

We have added a component test for the Quiz component. It ensures that:

The quiz renders correctly.

Questions and answers are displayed.

Answer selection updates the state.

Example component test:
```
import { mount } from 'cypress/react';
import Quiz from '../components/Quiz';

describe('Quiz Component', () => {
  it('renders quiz questions and answers', () => {
    mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();
    cy.get('.question').should('exist');
    cy.get('.answers button').should('have.length.greaterThan', 0);
  });
});
```

### End-to-End Testing

The end-to-end test verifies:

Users can start the quiz.

Users can select an answer.

The quiz proceeds to the next question.

The final score is displayed at the end.

Example end-to-end test:

```
describe('Tech Quiz End-to-End Test', () => {
  it('should allow the user to complete a quiz', () => {
    cy.visit('/');
    cy.get('button').contains('Start Quiz').click();
    
    cy.get('.question').should('exist');
    cy.get('.answers button').first().click();
    
    cy.get('.score').should('not.exist'); // Score should only appear at the end
    
    // Simulate answering all questions
    for (let i = 0; i < 10; i++) {
      cy.get('.answers button').first().click();
    }
    
    cy.get('.score').should('contain', 'Your score');
  });
});
```


## Questions 
If there's any additional questions I can answer for you, you can reach out to me at https://github.com/je210506 or [lalanne1011@gmail.com](mailto:lalanne1011@gmail.com}).
