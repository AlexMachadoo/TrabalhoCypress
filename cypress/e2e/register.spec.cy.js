describe('Formulário', () => {

  it('Deve acessar a página do formulário', () => {
    cy.visit("https://alexmachadoo.github.io/TrabalhoCypress/");
    cy.wait(3000); // Espera pra garantir o carregamento
    cy.get('#nome', { timeout: 10000 }).should('exist'); // Verifica se o elemento tá lá mesmo
  });

  it('Preencher os campos corretamente', () => {
    cy.get('#nome').type('Alex Sandro Machado');
    cy.get('#email').type('alex.s@email.com');
    cy.get('#telefone').type('4299999999');
    cy.get('#senha').type('senha963');
    cy.get('#confirma_senha').type('senha963');

    cy.get('#nome').should('have.value', 'Alex Sandro Machado');
    cy.get('#email').should('have.value', 'alex.s@email.com');
    cy.get('#telefone').should('have.value', '4299999999');
    cy.get('#senha').should('have.value', 'senha963');
    cy.get('#confirma_senha').should('have.value', 'senha963');
  });

  it('Submeter o formulário com sucesso', () => {
    cy.get('form#cadastro').submit();
    cy.get('form#cadastro').should('exist');
  });
});
