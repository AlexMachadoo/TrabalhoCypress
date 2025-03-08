describe('Formulário', () => {

  it('Deve acessar  página do formulário', () => {
    cy.visit("https://alexmachadoo.github.io/TrabalhoCypress/");

  });

  it('Preencher os campos corretamente', () => {
    cy.get('#nome').type('Alex Sandro Machado');
    cy.get('#email').type('alex.s@email.com');
    cy.get('#telefone').type('4299999999');
    cy.get('#senha').type('senha963');
    cy.get('#confirma_senha').type('senha963');
  });

  cy.get('#nome').should('have.value', 'Alex Sandro Machado');
  cy.get('#email').should(',have.value','alex.s@email.com');
  cy.get('#telefone').should('4299999999');
  cy.get('#senha').should('have.value','senha963');
  cy.get('#confirma_senha').should('have.value','senha963');
  });

  it('Submeter o formulário com sucesso', () => {
    cy.get('form#cadastro').submit();

    cy.get('form#cadastro').should('exist');

});