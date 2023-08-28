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

  test('articles 목록을 올바르게 반환', (done) => {
    cy.request('http://localhost:300/api/articles')
      .its('body')
      .each((article) => {
        expect(article).to.have.keys('id', 'title', 'body', 'author', 'image');
        expect(article.author).to.have.keys('id', 'name');
        expect(article.image).to.have.keys('url', 'author');
        done();
      });
  });

  test('ID를 전달하면 올바른 article을 반환', (done) => {
    cy.request('http://localhost:300/api/articles?id=u12w3o0d').then(
      ({ body }) => {
        expect(body).to.have.keys('id', 'title', 'body', 'author', 'image');
        expect(body.author).to.have.keys('id', 'name');
        expect(body.image).to.have.keys('url', 'author');
        done();
      }
    );
  });

  test('article을 찾을 수 없을 때 404 상태코드 반환', (done) => {
    cy.request({
      url: 'http://localhost:300/api/articles?id=unexistingID',
      failOnStatusCode: false,
    })
      .its('status')
      .should('be.equal', 404);
  });
});
