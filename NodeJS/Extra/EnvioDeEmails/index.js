const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'email@gmail..com',
        pass: ''
    }
});

transporter.sendMail({
    from: 'nome <email@gmail.com>',
    to: 'from@gmail.com',// da para enviar para varios emails separando por virgula
    subject: 'Titulo do email',
    text: 'Texto do email',
    html: '<h1>Teste de envio de email</h1>'
}).then(message => {
    console.log(message);
}).catch(err => {
    console.log(err);
});