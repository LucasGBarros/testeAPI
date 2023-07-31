describe('API Image Test', () => {
  it('should call the API and validate the response', () => {

    const apiUrl = 'https://static.natura.com/cdn/ff/ZFI-m6Ty7oqJTQV00rQlBHSAZz0FO48GuIl28o1Q2mc/1625498024/public/2021-07/2190_caminho_olfativo.jpg';
    cy.request(apiUrl).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.headers['content-type']).to.include('image/');
    });
  });
});