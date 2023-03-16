```
npm install express --save
npm install body-parser --save
npm install express-session --save
npm install ejs --save
npm install express-flash --save
npm install cookie-parser --save
```
# Validação
tem meios de falidar formularios com required, mas isso não é o suficiente, pois o usuario pode desabilitar o javascript ou mudar o html e assim burlar a validação.
```html
<!-- required deixa com que o campo necessita ser preenchido, porem pode ser facilmente burlado-->
<input type="text" name="nome" required>
```
Por isso é necessario fazer a validação no back-end, para ter certeza que os dados estão corretos.

# Bibliotecas para validação
validador