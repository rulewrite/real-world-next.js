describe('articles APIs', () => {
  test('application/json 헤더를 올바르게 설정해야 한다', () => {
    cy.request('http://localhost:300/api/articles')
      .its('headers')
      .its('content-type')
      .should('include', 'application/json');
  });

  test('200 상태 코드', () => {
    cy.request('http://localhost:300/api/articles')
      .its('status')
      .should('be.equal', 200);
  });
});
