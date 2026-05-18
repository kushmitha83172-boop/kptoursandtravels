import { auth, db }
from "./firebase.js";

import {

  createUserWithEmailAndPassword,

  signInWithEmailAndPassword

}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {

  collection,
  addDoc

}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

/* REGISTER */

document
  .getElementById("registerBtn")
  .addEventListener("click", async () => {

    const email =
      document.getElementById("email").value.trim();

    const password =
      document.getElementById("password").value.trim();

    if (!email || !password) {

      alert("Enter Email & Password ❌");

      return;

    }

    try {

      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      /* SAVE USER */

      await addDoc(
        collection(db, "users"),
        {

          email,

          createdAt:
            new Date().toLocaleString()

        }
      );

      alert("Registration Successful ✅");

    }

    catch (error) {

      alert(error.message);

    }

  });

/* LOGIN */

document
  .getElementById("loginBtn")
  .addEventListener("click", async () => {

    const email =
      document.getElementById("email").value.trim();

    const password =
      document.getElementById("password").value.trim();

    try {

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      localStorage.setItem(
        "userLoggedIn",
        "true"
      );

      alert("Login Successful ✅");

      window.location.href =
        "./index.html";

    }

    catch (error) {

      alert(error.message);

    }

  });