new Vue ({
  // We want to target the div with an id of 'events'
  el: '#events',

  // Here we can register any values or collections that hold data
  // for the application
  data: {
    event: { name: '', description: '', date: ''},
    events: []
  },

  // Anything within the ready function will run when the application loads
  ready: function() {
    // When the application loads, we want to call the method that initializes
    // some data
    this.fetchEvents();
  },

  // Methods we want to use in our application are registered here
  methods: {
    // We dedicate a method to retrieving and setting some data
    fetchEvents: function(){
      var events = [
      {
        id: 1,
        name: 'TIFF',
        description: 'Go to the store',
        date: '2017-04-21'
      },
      {
        id: 2,
        name: 'The Martian Premiere',
        description: 'Go to the bank.',
        date: '2015-10-02'
      },
      {
        id: 3,
        name: 'SXSW',
        description: 'Go to that building.',
        date: '2016-03-11'
      }
      ];
      // $set is a convenience method provided by Vue that is similar to pushing
      // data onto an array
      this.$set('events', events);
    },
    addEvent: function(){
      if (this.event.name) {
        this.events.push(this.event);
        this.event = { name: '', description: '', date: ''};
      }
    },
    deleteEvent: function(index){
      if (confirm("Are you sure you want to delete this event?")) {
         // $remove is a Vue convenience method similar to splice
         this.events.$remove(index);
       }
     }
   }
 });