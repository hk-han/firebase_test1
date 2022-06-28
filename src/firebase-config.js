/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
 const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyBjadh0PJH-Jiqkwa70qqzF4avXp_O8geI",
    authDomain: "uplusshoptest-d53b8.firebaseapp.com",
    projectId: "uplusshoptest-d53b8",
    storageBucket: "uplusshoptest-d53b8.appspot.com",
    messagingSenderId: "631146911698",
    appId: "1:631146911698:web:660b9964cbe4994fe85a0b",
    measurementId: "G-615Z9GTGX1"
    };
  
  export function getFirebaseConfig() {
    if (!config || !config.apiKey) {
      throw new Error('No Firebase configuration object provided.' + '\n' +
      'Add your web app\'s configuration object to firebase-config.js');
    } else {
      return config;
    }
  }