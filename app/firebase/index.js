import firebase from 'firebase';

var env = process.env

// Initialize Firebase
try {
    var config = {
        apiKey: env.API_KEY,
        authDomain: env.AUTH_DOMAIN,
        databaseURL: env.DATABASE_URL,
        projectId: env.PROJECT_ID
    };
    firebase.initializeApp(config);
} catch (e) {

}

export default firebase;