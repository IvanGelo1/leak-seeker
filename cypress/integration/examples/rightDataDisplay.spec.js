describe('Right side data ', () => {
  before(() => {
    cy.submit()
  })

  it('should display data accordingly to button naigation', () => {
    cy.get('.data-choice-btn').contains('Problem areas').click()
    cy.contains('Problem area data')
    cy.get('.data-choice-btn').contains('Average repair price').click()
    cy.contains('Average Repair Price data')
    cy.get('.data-choice-btn').contains('Number of faults by year').click()
    cy.contains('Faults Sorted By Year data')
  })
})