$(document).ready(function() {

    // page is now ready, initialize the calendar...

    $('#calendar').fullCalendar({
      events: [
        {
            title: 'My Event',
            start: '2016-08-18',
            allDay: true,
            description: 'This is a cool event',
            // rendering: "background",
            backgroundColor: "blue",

        },
        {
          title: "Another Event",
          start: '2016-08-18',
          backgroundColor: "red",
        }
    // more events here
    ],

      header: {
        left:   'today prev,next',
        center: 'title',
        right:  'month,agendaWeek,agendaDay'
      },

      eventClick: function(calEvent, jsEvent, view) {

         alert('Event: ' + calEvent.title);
        //  alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
        //  alert('View: ' + view.name);

         // change the border color just for fun
        //  $(this).css('border-color', 'red');

      },
      dayClick: function(date,  jsEvent, view) {
        // console.log(view);
        if (view.name === "month") {
            $('#calendar').fullCalendar('gotoDate', date);
            $('#calendar').fullCalendar('changeView', 'agendaDay');
        }
      },



    })

});
