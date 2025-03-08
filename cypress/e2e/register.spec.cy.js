describe('Formulário', () => {
  beforeEach(() => {
    cy.visit("https://alexmachadoo.github.io/TrabalhoCypress/");
  });

  it('Deve acessar a página do formulário', () => {
    cy.url().should('include', 'TrabalhoCypress');
  });

  it('Preencher os campos corretamente', () => {
    cy.get('[name="nome"]').type('João Silva');
    cy.get('[name="email"]').type('joao.silva@email.com');
    cy.get('[name="telefone"]').type('4119999999');
    cy.get('[name="senha"]').type('Teste@123');
    cy.get('[name="confirma_senha"]').type('Teste@123');

    cy.get('[name="nome"]').should('have.value', 'João Silva');
    cy.get('[name="email"]').should('have.value', 'joao.silva@email.com');
    cy.get('[name="telefone"]').should('have.value', '4119999999');
    cy.get('[name="senha"]').should('have.value', 'Teste@123');
    cy.get('[name="confirma_senha"]').should('have.value', 'Teste@123');
  });

  it('Validar erro do telefone com menos de 10 dígitos', () => {
    cy.get('[name="telefone"]').clear().type('411999999');
    cy.get('.erro-telefone').should('be.visible');
    cy.get('.erro-telefone').should('have.text', 'Telefone inválido');
  });

  it('Submeter o formulário com sucesso', () => {
    cy.get('[name="nome"]').type('João Silva');
    cy.get('[name="email"]').type('joao.silva@email.com');
    cy.get('[name="telefone"]').type('4119999999');
    cy.get('[name="senha"]').type('Teste@123');
    cy.get('[name="confirma_senha"]').type('Teste@123');

    cy.get('button[type="submit"]').click();

    cy.get('.mensagem-sucesso').should('be.visible');
    cy.get('.mensagem-sucesso').should('have.text', 'Cadastro realizado com sucesso');
  });
});
