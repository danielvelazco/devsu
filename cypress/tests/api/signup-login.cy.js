/// <reference types="cypress" />

function getUserName() {
  return "user_" + Math.floor(Math.random() * 1000) + 1;
}

let newUser = {
  "username": getUserName(),
  "password": "ZHYwMzA0MDY="
}

describe('Signup and Login user ', () => {
  before(() => {
    global.signupUrl = 'https://api.demoblaze.com/signup';
    global.loginUrl = 'https://api.demoblaze.com/login';
  })
    
  it('Signup', () => {
    cy.request('POST', global.signupUrl, newUser).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.be.a('string');
      expect(response.body).to.have.lengthOf(0);
    })
  })
  
  it('Signup with already existing user', () => {
    cy.request('POST', global.signupUrl, newUser).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property("errorMessage");
      expect(response.body.errorMessage).to.equal("This user already exist.");
    })
  })

  it('Login with the registered user', () => {
    cy.request('POST', global.loginUrl, newUser).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.be.a('string');
      expect(response.body).to.include('Auth_token');
    })
  })

  it('Login with a wrong user', () => {
    // Save original username for another test
    global.originalUserName = newUser.username
    
    // Overwrite username to get the fail
    newUser.username = 'wrongUserName'
    cy.request('POST', global.loginUrl, newUser).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property("errorMessage");
      expect(response.body.errorMessage).to.equal("User does not exist.");
    })
  })

  it('Login with a wrong password', () => {
    // Restore original username
    newUser.username = global.originalUserName
    
    // Overwrite password to get the fail
    newUser.password = 'wrongPassword'
    cy.request('POST', global.loginUrl, newUser).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property("errorMessage");
      expect(response.body.errorMessage).to.equal("Wrong password.");
    })
  })
})
  