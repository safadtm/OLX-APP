import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCdxr3U-aKdCV1A0NtQkGJdjCrJCQmPF00",
    authDomain: "olx-clone-e81e9.firebaseapp.com",
    projectId: "olx-clone-e81e9",
    storageBucket: "olx-clone-e81e9.appspot.com",
    messagingSenderId: "936054462751",
    appId: "1:936054462751:web:66d1a42849ecc3ece5b82a",
    measurementId: "G-505TZXJ7HY"
  }


   const firebaseApp= firebase.initializeApp(firebaseConfig)//named export
   const db = firebase.firestore();

   export default {firebaseApp,db}