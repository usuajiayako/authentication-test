import firebase from "firebase";
    
const config = {
    apiKey:"AIzaSyDPpVD_w4KBEAynNZ1RmthPEu8izGjg2JU",
    authDomain: "authentication-d5782.firebaseapp.com",
    projectId: "authentication-d5782",
    storageBucket: "authentication-d5782.appspot.com",
    messagingSenderId: "683462541777",
    appId: "1:683462541777:web:d2007e57e44c9d7e5120f0"
  };

const fire = firebase.initializeApp(config);
export default fire;