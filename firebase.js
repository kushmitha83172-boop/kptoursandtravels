// firebase.js

import { initializeApp }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import {
  getAuth
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {

  apiKey: "AIzaSyCYTknsW8iVhV6Ax46iOMl-mmODJnhmKXI",

  authDomain: "ak-tours-and-travels-fe1a3.firebaseapp.com",

  projectId: "ak-tours-and-travels-fe1a3",

  storageBucket: "ak-tours-and-travels-fe1a3.firebasestorage.app",

  messagingSenderId: "393970266785",

  appId: "1:393970266785:web:350848c6acdf7b14e2b6e0",

  measurementId: "G-671GGBLX0D"

};

const app = initializeApp(firebaseConfig);

/* FIRESTORE */
const db = getFirestore(app);

/* AUTH */
const auth = getAuth(app);

export { db, auth };