describe('Login test', () => {
  it('Login test with non-registered user', () => {
    // Dado que o usuário está na página inicial e irá fazer login com uma conta não cadastrado

    cy.visit('http://www.automationpractice.pl/index.php?controller=authentication')

    // Quando preencher o Input de id 'email' com seu email, então esse deveria receber o valor do email

    cy.get('input').get('[id$=email]').type('test123@email.com').should('have.value', 'test123@email.com')

    // Quando preencher outro Input com id 'passwd' com sua senha, então esse deveria receber o valor da senha

    cy.get('input').get('[id$=passwd]').type('12345678').should('have.value', '12345678')

    // Quando clicar no botão 'Sign in' (id = 'SubmitLogin')

    cy.get('button').get('[id$=SubmitLogin]').click()

    // Então, deveria haver uma mensagem de erro, já que o usuário fornecido não está cadastrado

    cy.contains('There is 1 error').should('exist')

    })

    it('Login test with registered user but wrong password', () => {
      // Dado que o usuário está na página inicial e irá fazer login com a senha errada
  
      cy.visit('http://www.automationpractice.pl/index.php?controller=authentication')
  
      // Quando preencher o Input de id 'email' com seu email, então esse deveria receber o valor do email
  
      cy.get('input').get('[id$=email]').type('test@email.com').should('have.value', 'test@email.com')
  
      // Quando preencher outro Input com id 'passwd' com sua senha, então esse deveria receber o valor da senha
  
      cy.get('input').get('[id$=passwd]').type('12345678').should('have.value', '12345678')
  
      // Quando clicar no botão 'Sign in' (id = 'SubmitLogin')
  
      cy.get('button').get('[id$=SubmitLogin]').click()

      // Então, deveria haver uma mensagem de erro, já que o a senha fornecida está errada

      cy.contains('There is 1 error').should('exist')
  
      })
})

