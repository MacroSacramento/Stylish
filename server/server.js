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
        remove: function(){
            return Meteor.user().username === "Admin"
        }
    })
   
    Notes.insert({
        userName: "Woops :/",
        description: "There appears to be nothing here, be the first to upload something!"
    })
   
    function checkPosts() {
        noteCount = Notes.find().count;
        console.log(noteCount);
        if (Notes.find().count === 0){
            console.log("Posts do not exist.")
            return false;
        }else{
            return true;
        }
    }
    
});