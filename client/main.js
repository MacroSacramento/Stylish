Meteor.subscribe('notes');

var cameraOptions = {
    width: 800,
    height: 600,
    correctOrientation: true
};

Template.photo.events({
    'click .capture': function(event, template){
        MeteorCamera.getPicture(cameraOptions, function(error, data){
            if (error) {
                console.log(error);
            } else {
                var description = template.find('#message-input').value;
                Notes.insert({
                    photo: data,
                    timestamp: new Date(),
                    userId: Meteor.userId(),
                    userName: Meteor.user().username,
                    description: description
                });
                Router.go('/') 
            }
        });
        
    },
    
    'form submit': function(){
        return false;
    }  
});

Template.photo_error.events({
    'click .capture': function(event, template){
        MeteorCamera.getPicture(cameraOptions, function(error, data){
            if (error) {
                console.log(error);
            } else {
                var description = template.find('#message-input').value;
                Notes.insert({
                    photo: data,
                    timestamp: new Date(),
                    userId: Meteor.userId(),
                    userName: Meteor.user().username,
                    description: description
                });
                Router.go('/') 
            }
        });
        
    },
    
    'form submit': function(){
        return false;
    }    
});
    
Template.main.helpers({
    notes: function () {
        return Notes.find({ },{
            sort: { timestamp: -1 }
         });
    },
       
    postsExist: function(){        
        if(Notes.find().count() === 0){
            return false;
        } else {
            return true;
        }
    }     
})
    
Template.footer.helpers({
    'photo': function(){
        return Session.get('/photo');
     }
});
    
Template.register.events({
    'submit form': function(event) {
        event.preventDefault();
        var usernameVar = event.target.registerUsername.value;
        var passwordVar = event.target.registerPassword.value;
        Accounts.createUser({
            username: usernameVar,
            password: passwordVar
        });
        Meteor.loginWithPassword(usernameVar, passwordVar, function(err,result){
            if(!err){  //use this if there is not error redirect them.
                Router.go('/')
            }else{
                console.log(err.reason) //should print the error
                Router.go('/register_error')
            }
        });
    }  
});

Template.register_error.events({
    'submit form': function(event) {
        event.preventDefault();
        var usernameVar = event.target.registerUsername.value;
        var passwordVar = event.target.registerPassword.value;
        Accounts.createUser({
            username: usernameVar,
            password: passwordVar
        });
        Meteor.loginWithPassword(usernameVar, passwordVar, function(err,result){
            if(!err){  //use this if there is not error redirect them.
                Router.go('/')
            }else{
                console.log(err.reason) //should print the error
                Router.go('/register_error')
            }
        });
    }  
});
    
Template.login.events({
    'submit form': function(event){
        event.preventDefault();
        var usernameVar = event.target.loginUsername.value;
        var passwordVar = event.target.loginPassword.value;
        Meteor.loginWithPassword(usernameVar, passwordVar, function(err,result){
            if(!err){  //use this if there is not error redirect them.
                Router.go('/')
            }else{
                console.log(err.reason) //should print the error
                Router.go('/login_error')
            }
        });
    }
});

Template.login_error.events({
    'submit form': function(event){
        event.preventDefault();
        var usernameVar = event.target.loginUsername.value;
        var passwordVar = event.target.loginPassword.value;
        Meteor.loginWithPassword(usernameVar, passwordVar, function(err,result){
            if(!err){  //use this if there is not error redirect them.
                Router.go('/')
            }else{
                console.log(err.reason) //should print the error
                Router.go('/login_error')
            }
        });
    }
});

Template.header.events({
   'click .logout': function(event){
       Meteor.logout();
       Router.go('/')
   } 
});

Template.note.events({
   'click .delete': function(event, template){
        Notes.remove(template.data._id, function (error) {
            if (error)
                sAlert.error(error.toString(), {effect: 'slide', position: 'top-right', timeout: 3000});
            });
        }
});

Template.note.helpers({
    checkAdmin: function (){
        if(Meteor.user().username === "Admin"){
           return true; 
        }else{
            return false;
        }
    }
});