Meteor.startup(function () {
// code to run on server at startup

    if (Meteor.users.findOne({username: "Admin"})) {
        
    } else {
        Accounts.createUser({
            username: "Admin",
            password: "marcoiscool"
        }); 
    }
    
    Meteor.publish('notes', function () {
        return Notes.find({ }, {
            sort: { timestamp: -1 }
        })
    })
    
    Notes.allow({
        insert: function (userId, doc) {
            return true;
        },
        remove: function(){
            return Meteor.user().username === "Admin"
        }
    })
    
});