import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhW8BPl0g6Kg9MLFdw1KpcxD-nQGSEsLg",

  authDomain: "chatapp-29c2f.firebaseapp.com",

  projectId: "chatapp-29c2f",

  storageBucket: "chatapp-29c2f.appspot.com",

  messagingSenderId: "373179492727",

  appId: "1:373179492727:web:c4cf87ecad8ae9b9b15972"



  };
  

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
