import { db }
from "./firebase.js";

import {

  collection,
  getDocs

}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

/* SECRET ADMIN SECURITY */

const secretKey =
  prompt("Enter Secret Admin Key");

if (secretKey !== "ppartner") {

  document.body.innerHTML = `

    <h1 style="
      text-align:center;
      margin-top:100px;
      color:red;
    ">
      404 Page Not Found
    </h1>

  `;

  throw new Error("Access Denied");

}

/* LOAD USERS */

async function loadUsers() {

  const usersTable =
    document.getElementById("usersTable");

  const querySnapshot =
    await getDocs(
      collection(db, "users")
    );

  querySnapshot.forEach((doc) => {

    const data = doc.data();

    usersTable.innerHTML += `

      <tr>

        <td>${data.email}</td>

        <td>${data.createdAt}</td>

      </tr>

    `;

  });

}

/* LOAD BOOKINGS */

async function loadBookings() {

  const bookingTable =
    document.getElementById("bookingTable");

  const querySnapshot =
    await getDocs(
      collection(db, "bookings")
    );

  querySnapshot.forEach((doc) => {

    const data = doc.data();

    bookingTable.innerHTML += `

      <tr>

        <td>${data.name}</td>

        <td>${data.phone}</td>

        <td>${data.place}</td>

        <td>${data.vehicle}</td>

        <td>₹${data.total}</td>

      </tr>

    `;

  });

}

loadUsers();

loadBookings();