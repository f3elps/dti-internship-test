describe('Recover lost password', () => {
  it('Lost password recoveral try with registered e-mail', () => {
    // Dado que o usuário esteja na página inicial e queira recuperar sua senha perdida

    cy.visit('http://www.automationpractice.pl/index.php?controller=authentication&back=my-account')

    // Quando clicar no botão 'Forgot your password?'

    cy.contains('Forgot your password?').click()

    // Quando preencher o Input com seu email, então o campo deve receber o valor do email

    cy.get('input').get('[id$=email]').type('test@email.com').should('have.value', 'test@email.com')

    // Quando clicar no botão 'Retrieve Password'
    
    cy.contains('Retrieve Password').click()

    // Então, deveria haver uma mensagem a, já que o email fornecido não está cadastrado

    cy.contains('A confirmation email has been sent to your address').should('exist')

    })

  it('Lost password recoveral try with non-registered e-mail', () => {
    // Dado que o usuário esteja na página inicial e queira recuperar sua senha perdida

    cy.visit('http://www.automationpractice.pl/index.php?controller=authentication&back=my-account')

    // Quando clicar no botão 'Forgot your password?'

    cy.contains('Forgot your password?').click()

    // Quando preencher o Input com seu email, então o campo deve receber o valor do email

    cy.get('input').get('[id$=email]').type('test123@email.com').should('have.value', 'test123@email.com')

    // Quando clicar no botão 'Retrieve Password'
    
    cy.contains('Retrieve Password').click()

    // Então, deveria haver uma mensagem de erro, já que o email fornecido não está cadastrado

    cy.contains('There is 1 error').should('exist')

    })
})

