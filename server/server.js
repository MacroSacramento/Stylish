if (Meteor.isServer) {
    
  Meteor.startup(function () {
    // code to run on server at startup
    
    Meteor.publish('notes', function () {
        return Notes.find({ }, {
            sort: { timestamp: -1 }
        })
    });
    
  });
  
}