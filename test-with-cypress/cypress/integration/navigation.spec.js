describe('Navigation', () => {
  it('article 페이지로 이동', () => {
    cy.visit('http://localhost:3000/');
    cy.get('a[href*="/articles"]').first().click();
    cy.url().should(
      'be.equal',
      'http://localhost:3000/articles/healthy-summer-meloncarrot-soup-u12w3o0d'
    );
    cy.get('h1').contains('Healthy summer melon-carrot soup');
  });

  it('homepage로 이동', () => {
    cy.visit(
      'http://localhost:3000/articles/healthy-summer-meloncarrot-soup-u12w3o0d'
    );
    cy.get('a[href*="/"]').first().click();
    cy.url().should('be.equal', 'http://localhost:3000/');
    cy.get('h1').contains('My awesome blog');
  });
});
