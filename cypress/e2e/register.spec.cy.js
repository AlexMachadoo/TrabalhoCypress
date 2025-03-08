describe('Formulário', () => {

  it('Deve acessar a página do formulário', () => {
    cy.visit("https://alexmachadoo.github.io/TrabalhoCypress/");
    
  });

  it('Preencher os campos corretamente', () => {
    cy.get('#nome').type('João Silva');
    cy.get('#email').type('joao.silva@email.com');
    cy.get('#telefone').type('41199999999');
    cy.get('#senha').type('Teste@123');
    cy.get('#confirma_senha').type('Teste@123');

    cy.get('#nome').should('have.value', 'João Silva');
    cy.get('#email').should('have.value', 'joao.silva@email.com');
    cy.get('#telefone').should('have.value', '1199999999');
    cy.get('#senha').should('have.value', 'Teste@123');
    cy.get('#confirma_senha').should('have.value', 'Teste@123');
  });

  it('Submeter o formulário com sucesso', () => {
    cy.get('form#cadastro').submit();
    cy.get('form#cadastro').should('exist');
  });
});
