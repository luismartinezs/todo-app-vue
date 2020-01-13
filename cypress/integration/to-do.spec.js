describe('To-Do app', () => {
  it('Create a to-do', () => {
    const url = 'http://localhost:8080'

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
    cy.get('#toDoList > li:last-child .todo__checkbox').click()
    cy.get('#toDoList > li:last-child .todo__checkmark').should('be.visible')
    cy.reload()
    cy.get('#toDoList > li:last-child .todo__checkmark').should('be.visible')
    cy.get('#toDoList > li:last-child .todo__checkbox').click()
    cy.get('#toDoList > li:last-child .todo__checkmark').should(
      'not.be.visible'
    )
  })

  it('Edit to-do', () => {
    cy.get('#toDoList > li:last-child .to-do__edit').click()
    cy.get('#toDoList > li:last-child .to-do__title').should('not.be.visible')
    cy.get('.edit-to-do').should('be.visible')
    cy.get('#toDoList > li:last-child .input-edit-1').type('Edited Title')
    cy.get('#toDoList > li:last-child .input-edit-2').type('Edited Description')
    cy.get('#toDoList > li:last-child .ok-edit-button').click()
    cy.get('#toDoList > li:last-child .to-do__title').should(
      'contain',
      'Edited Title'
    )
    cy.get('#toDoList > li:last-child .to-do__description').should(
      'contain',
      'Edited Description'
    )
  })

  it('Delete to-do', () => {
    cy.get('#toDoList .to-do__delete').click({ multiple: true })
    cy.get('.to-do__title').should('not.be.visible')
    cy.get('.to-do__description').should('not.be.visible')
  })
})
