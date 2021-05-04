describe('Start', () => {
  it('Searches fault by registration', () => {
    cy.visit('http://localhost:3001')

    cy.contains('Search').click()
    cy.get('.input-text-box')
      .type('ZG12')
      .should('have.value', 'ZG12')

    cy.contains('Submit').click()
  })
})

