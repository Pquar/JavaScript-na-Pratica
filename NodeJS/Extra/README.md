# Variaiveis globais com express node.js

```javascript
app.locals ={
    TITLE: 'Curso de Node.js',
    MENU: ['Home','Contato','Sobre']
}

app.get('/', function(req, res){
    app.locals.TITLE = 'Curso de Home.page';
    res.render('index');
});

```

# Instalação de Pacotes globais
Caso tenha problemas com a instalação de pacotes globais, tente instalar o nodemon de forma local, ou seja, dentro do seu projeto.
#### Globalmente
```bash
npm install -g nodemon --save
node ./node_modules/nodemon/bin/nodemon.js app.js
```
#### Localmente
```bash
npm install nodemon --save
npx nodemon
```

# Favicon
- Formato (.ico)

#### Usando express
```javascript
app.use("_noneArquivo", express.static('images/favicon.ico'));
```