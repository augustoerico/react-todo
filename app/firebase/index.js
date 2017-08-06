import firebase from 'firebase';

// Initialize Firebase
try {
    // FIXME add env vars
    var config = {
        apiKey: "AIzaSyDnNHTceW61LN0j302lIUtA3KDAwkAU0lo",
        authDomain: "taskdone-23445.firebaseapp.com",
        databaseURL: "https://taskdone-23445.firebaseio.com",
        projectId: "taskdone-23445",
        storageBucket: "taskdone-23445.appspot.com",
        messagingSenderId: "618234182671"
    };
    firebase.initializeApp(config);
} catch (e) {

}

export default firebase;