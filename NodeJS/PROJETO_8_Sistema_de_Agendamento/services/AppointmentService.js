var appointment = require('../models/Appointment');
var mongoose = require('mongoose');
var AppointmentFactory= require('../factories/AppointmentFactory');
var nodemailer = require('nodemailer');


const Appo = mongoose.model('Appointment', appointment);

class AppointmentService {

  async Create(name, email, description, cpf, date, time) {
    var newAppo = new Appo({
      name,
      email,
      description,
      cpf,
      date,
      time,
      finished: false,
      notified: false
    });
    try {
      await newAppo.save();
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  async GetAll(showFinished) {
    if (showFinished) {
      return await Appo.find();
    } else {
      var appos =  await Appo.find({ finished: false });
      var appointments = [];

      appos.forEach(appointment => {
        if (appointment.date  != undefined) {
          appointments.push( AppointmentFactory.Build(appointment));
        }
      });

      return appointments;
    }
  }

  async GetById(id) {
    try {
      var event = await Appo.findOne({'_id': id});
      return event;
    } catch (error) {
      console.log(error);
    }
  }

  async Finish(id) {
    try {
      await Appo.findByIdAndUpdate(id, { finished: true })
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async Search(query) {
    try {
      var appos = await Appo.find().or([{email: query},{cpf: query}])
      return appos;
    } catch (error) {
      console.log(error);
      return[];
    }
    
  }

  async SendNotification() {
    var appos = await this.GetAll(false);

    var transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "97997a8b5c05ee",
        pass: "ad533b606c7f87"
      }
    });

    appos.forEach(async app => {
      var date = app.start.getTime();
      var hour = 1000 * 60 * 60;
      var gap = date - Date.now();
      if (gap <= hour){
        if(!app.notified){

          await Appo.findByIdAndUpdate(app.id, {notified: true});

          transport.sendMail({
            from: 'Loja Agendamento <lojaAgendamento@gmail.com>',
            to: app.email,
            subject: 'Agendamento da sua consulta ira acontecer em breve',
            text: 'Seu agendamento ira acontecer em breve, acerta de menos de 1h '
          }).then(()=>{
            console.log('Email enviado');
          }).catch((err)=>{
            console.log(err);
          })

        }
      }
    })
  }
}

module.exports = new AppointmentService();
