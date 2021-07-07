import logo1 from "./assets/logo1.svg";
import logo2 from "./assets/logo2.svg";
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCivc-fCSNIhax1HhB1VOdwOyPWJLtP77Q",
    authDomain: "rh-automobile.firebaseapp.com",
    projectId: "rh-automobile",
    storageBucket: "rh-automobile.appspot.com",
    messagingSenderId: "992216163500",
    appId: "1:992216163500:web:92b39605fcbf6c9c8e6b09",
    measurementId: "G-BKZR79VH0D"
};

const fireConf = firebase.initializeApp(firebaseConfig);

const automobilePath = 'auto-mobile';
export { logo1, logo2, fireConf, automobilePath }