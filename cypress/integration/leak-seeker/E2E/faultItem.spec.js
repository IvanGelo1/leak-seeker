describe('Fault Item', () => {
  before(() => {
    cy.submit()
  })

  it('should display the Fault Item summary on drop down button', () => {
    cy.get('.fault-item-detail')

    cy.get('.fa-arrow-circle-down').first().click()
    cy.get('.image-thumbnail').click()
    cy.get('.react-simple-image-viewer__modal')
    cy.get('.react-simple-image-viewer__close').click()
    cy.contains('Reported on:')
  })

  it('should upvote the fault', () => {

    cy.get('.icn-red')
      .first()
      .invoke('text')
      .then(parseFloat)
      .then((val1) => {

        cy.get('.fa-arrow-up').first().click()

        cy.get('.icn-red')
          .first()
          .invoke('text')
          .then(parseFloat)
          .should((val2) => {
            expect(val2).to.eq(val1 + 1)
          })
    })
  })

  it('should downvote the fault', () => {

    cy.get('.icn-red')
      .first()
      .invoke('text')
      .then(parseFloat)
      .then((val1) => {

        cy.get('.fa-arrow-down').first().click()

        cy.get('.icn-red')
          .first()
          .invoke('text')
          .then(parseFloat)
          .should((val2) => {
            expect(val2).to.eq(val1 - 1)
          })
      })
  })
})