# Stylish
Submission for the [Future Business Leaders of America](http://www.fbla-pbl.org) Mobile Application Development Competition. The app was built using [Meteor](http://www.meteor.com) on [Ubuntu](http://www.ubuntu.com) Linux with Microsoft's [Visual Studio Code](https://code.visualstudio.com/) IDE and Google's [Android Studio](http://developer.android.com/sdk/index.html) build tools.

## How to install for development
cd into the directory where this project is located and run the `meteor install DEPENDENCY` where `DEPENDENCY` are the following:

### Dependencies
* `mdg:camera`
* `twbs:bootstrap`
* `accounts-ui`
* `accounts-password`
* `iron:router`

Then run `meteor remove autopublish` as publishing is done manually. This will create an environment exclusively for Web development. To develop for mobile you must either be on Linux or Mac OSX. Meteor has tutorials for setting up an environment for Android development on [Linux](https://github.com/meteor/meteor/wiki/Mobile-Development-Install:-Android-on-Linux) and [Mac](https://github.com/meteor/meteor/wiki/Mobile-Development-Install:-Android-on-Mac).

##TODO
* Add a logout button
* Clean up UI
* Upload from Gallery
* Comments/Ratings system
* Custom Profiles