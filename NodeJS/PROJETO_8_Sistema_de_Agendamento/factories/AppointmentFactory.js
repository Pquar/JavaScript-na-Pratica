class AppointmentFactory {
  Build(simpleAppointment) {

    var day = simpleAppointment.date.getDate()+1;
    var month = simpleAppointment.date.getMonth();
    var year = simpleAppointment.date.getFullYear();

    var hour = Number.parseInt(simpleAppointment.time.split(':')[0]);
    var minute = Number.parseInt(simpleAppointment.time.split(':')[1]) ;

    var startDate = new Date(year, month, day, hour, minute,0,0);
    //Como o fullCalendar ja faz a conversão para o fuso horário do cliente não é necessário fazer a conversão para o fuso horário.
    //startDate.setHours(startDate.getHours() - 3); // GMT -3



    var appo ={
        id: simpleAppointment._id,
        title: simpleAppointment.name + ' - ' + simpleAppointment.description,
        start: startDate,
        end: startDate,
        notified: simpleAppointment.notified,
        email: simpleAppointment.email
    }

    return appo;
  }
}

module.exports = new AppointmentFactory();
