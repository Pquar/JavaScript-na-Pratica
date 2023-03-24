let app = require("../src/app");
let supertest = require("supertest");
let request = supertest(app);


let mainUser = {name: "Ang", email: "ang@test.con", password: "123456789"};

beforeAll(() => {
    request.post("/user")
    .send(mainUser)
    .then((res) => {})
    .catch((err) => {console.log(err);});
});

afterAll(() => {
    request.delete(`/user/${mainUser.email}`)
    .then((res) => {})
    .catch((err) => {console.log(err);});
});

beforeEach(() => {
    
});

afterEach(() => {
    
});

describe("Cadastro de Usuário", () => {

    test("Deve cadastrar um usuário com sucesso", () => {
        let time = Date.now();
        let email = `${time}@gmail.com`
        let user = {name: "Ang", email, password: "123456"};

       return request.post("/user")
        .send(user).then((res) => {
            expect(res.statusCode).toEqual(200);
            expect(res.body.email).toEqual(email);
        }).catch((err) => {
            fail(err);
        });
    });

    test("Deve impedir que usuário se cadastre com os dados vazios", () => {
        let user = {name: "", email: "", password: ""};

        return request.post("/user")
        .send(user).then((res) => {
            expect(res.statusCode).toEqual(400);
        }).catch((err) => {
            fail(err);
        });
    });

    test("Deve impedir que usuário se cadastre com o email já existente", () => {
        let time = Date.now();
        let email = `${time}@gmail.com`
        let user = {name: "Ang", email, password: "123456"};

       return request.post("/user")
        .send(user).then((res) => {
            expect(res.statusCode).toEqual(200);
            expect(res.body.email).toEqual(email);
            
            return request.post("/user")
            .send(user).then((res) => {
                expect(res.statusCode).toEqual(400);
                expect(res.body.error).toEqual("Email já cadastrado");
            }).catch((err) => {
                fail(err);
            });

        }).catch((err) => {
            fail(err);
        });
    })

});

describe("Autenticação", () => {

test("Deve retornar um token de autenticação", () => {
    return request.post("/auth")
    .send({email: mainUser.email, password: mainUser.password})
    .then((res) => {
        expect(res.statusCode).toEqual(200);
        expect(res.body.token).toBeDefined();
    }).catch((err) => {
        fail(err);
    });
    });

    test("Deve impedir que um usuario nao cadastrado faça o login", () => {
        return request.post("/auth")
        .send({email: "emailNaoExistente@gmail.com", password: "987654321"})
        .then((res) => {
            expect(res.statusCode).toEqual(403);
            expect(res.body.errors.email).toEqual("Email não cadastrado");
        }).catch((err) => {
            fail(err);
        });
    });

    test("Deve impedir que um usuario se autentique com a senha errada", () => {
        return request.post("/auth")
        .send({email: mainUser.email, password: "987654321"})
        .then((res) => {
            expect(res.statusCode).toEqual(403);
            expect(res.body.errors.password).toEqual("Senha incorreta");
        }).catch((err) => {
            fail(err);
        });
    });

});