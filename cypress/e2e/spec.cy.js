describe('Login test', () => {
  it('Access the page', () => {
    cy.visit('http://www.automationpractice.pl/index.php?controller=authentication&back=my-account')

    cy.contains('Forgot your password?').click()

    cy.contains('Retrieve Password').click()

    cy.get('.form-control').type('test123@email.com')
    })
/*
  it('Writes the email and password in login fields', () => {
    
  }) */
})