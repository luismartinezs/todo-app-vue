describe('Register', () => {
  it('Register user gets a success response from api', () => {
    const url = 'http://localhost:8080'

    cy.visit(url + '/register')
    cy.get('#emailInput').type('test@test.com')
    cy.get('#passwordInput').type('1234')
    cy.get('#registerSubmitButton').click()
  })
})
