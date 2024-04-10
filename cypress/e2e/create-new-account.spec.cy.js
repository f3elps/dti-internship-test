describe('Create new account', () => {
  it('Test of account creation flow', () => {
    // Dado que o usuário esteja na página inicial e queira criar uma nova conta

    cy.visit('http://www.automationpractice.pl/index.php?controller=authentication')

    // Quando preencher o Input de id 'email_create' com seu email, então esse deveria receber o valor do email

    cy.get('input').get('[id$=email_create]').type('test123@email.com').should('have.value', 'test123@email.com')

    // Quando clicar no botão 'Create an account' (id = 'SubmitCreate')

    cy.get('button').get('[id$=SubmitCreate]').click()

    // Então, a URL deve conter a string 'account-creation', ou seja, direcionar para a página criação de conta

    cy.url().should('include', 'account-creation')

    })

    it('Test of account creation with wrong email format', () => {
      // Dado que o usuário esteja na página inicial e queira criar uma nova conta
  
      cy.visit('http://www.automationpractice.pl/index.php?controller=authentication')
  
      // Quando preencher o Input de id 'email_create' com seu email, então esse deveria receber o valor do email
  
      cy.get('input').get('[id$=email_create]').type('test').should('have.value', 'test')
  
      // Quando clicar no botão 'Create an account' (id = 'SubmitCreate')
  
      cy.get('button').get('[id$=SubmitCreate]').click()
  
      // Então, deveria haver uma mensagem de erro, já que o formato do email está errado e não será reconhecido

      cy.contains('Invalid email address').should('exist')
  
      })
})

