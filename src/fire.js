import firebase from 'firebase'

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCDKYhCMcYt-GwF_ZPOJM7ceStuEfGtleY",
    authDomain: "findmyschool1999.firebaseapp.com",
    projectId: "findmyschool1999",
    storageBucket: "findmyschool1999.appspot.com",
    messagingSenderId: "968334332726",
    appId: "1:968334332726:web:c47789ee97de4e0c5f5997",
    measurementId: "G-DNB42RY2NC"
  };
  // Initialize Firebase
  const fire  = firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export default fire;

