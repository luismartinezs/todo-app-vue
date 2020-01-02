describe('To-Do app', () => {
  it('Create a to-do', () => {
    const url = 'http://localhost:8081'

    cy.visit(url)
    cy.get('#addToDoBtn').click()
    cy.get('#input-1').type('My Title')
    cy.get('#input-2').type('My Description')
    cy.get('#okButton').click()
    cy.get('.to-do__title').should('contain', 'My Title')
    cy.get('.to-do__description').should('contain', 'My Description')
  })

  it('Toggle to-do status', () => {
    cy.get('.todo__checkmark').should('not.be.visible')
    cy.get('.todo__checkbox').click()
    cy.get('.todo__checkmark').should('be.visible')
    cy.get('.todo__checkbox').click()
    cy.get('.todo__checkmark').should('not.be.visible')
  })

  it('Edit to-do', () => {
    cy.get('.to-do__edit').click()
    cy.get('.to-do__title').should('not.be.visible')
    cy.get('.edit-to-do').should('be.visible')
    cy.get('.input-edit-1').type('Edited Title')
    cy.get('.input-edit-2').type('Edited Description')
    cy.get('.ok-edit-button').click()
    cy.get('.to-do__title').should('contain', 'Edited Title')
    cy.get('.to-do__description').should('contain', 'Edited Description')
  })

  it('Delete to-do', () => {
    cy.get('.to-do__delete').click()
    cy.get('.to-do__title').should('not.be.visible')
    cy.get('.to-do__description').should('not.be.visible')
  })
})
