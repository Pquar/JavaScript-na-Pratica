let app = require('../src/app');
let supertest = require('supertest');
let request = supertest(app);

test('A aplicação deve responder na porta 3000', () => {
  return request.get('/').then((res) => expect(res.statusCode).toEqual(200));
});

/*   try {
      let res = await request.get("/");
      expect(res.statusCode).toEqual(200);
  } catch (error) {
      console.log(error);
  } */

  test("Deve retorna vermelhor como cor para o Victor", () => {
    return request.get("/cor/victor").then((res) => {
        expect(res.statusCode).toEqual(200);
        expect(res.body.cor).toEqual("vermelho");
        expect(res.body.color).toEqual("red");
    });
})