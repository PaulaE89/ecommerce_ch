import firebase from 'firebase/app';
import 'firebase/firestore'



var firebaseConfig = {


    apiKey: "AIzaSyAXNKASP9YlQ3WKVpQbhAbLLtampVfK9gI",
    authDomain: "ecommerce-hammy.firebaseapp.com",
    projectId: "ecommerce-hammy",
    storageBucket: "ecommerce-hammy.appspot.com",
    messagingSenderId: "674253340217",
    appId: "1:674253340217:web:2b47872fc45084cafed7e8"

}

const fb = firebase.initializeApp(firebaseConfig)
export const dataBase = fb.firestore();