// admin.js

import { db } from "../firebase.js";

import {
  collection,
  onSnapshot,
  deleteDoc,
  doc
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const bookingTable =
document.getElementById("bookingTable");

const bookingCount =
document.getElementById("bookingCount");

const userCount =
document.getElementById("userCount");

const search =
document.getElementById("search");

let bookings = [];

// BOOKINGS
onSnapshot(
collection(db,"bookings"),
(snapshot)=>{

bookingCount.innerText =
snapshot.size;

bookings = [];

snapshot.forEach((bookingDoc)=>{

bookings.push({

id: bookingDoc.id,

...bookingDoc.data()

});

});

displayBookings();

});

// USERS
onSnapshot(
collection(db,"users"),
(snapshot)=>{

userCount.innerText =
snapshot.size;

});

// DISPLAY TABLE
function displayBookings(){

bookingTable.innerHTML = "";

let filter =
search.value.toLowerCase();

let slno = 1;

bookings.forEach((booking)=>{

if(
booking.name.toLowerCase()
.includes(filter)
){

bookingTable.innerHTML += `

<tr>

<td>${slno++}</td>

<td>${booking.name}</td>

<td>${booking.phone}</td>

<td>${booking.vehicle}</td>

<td>${booking.payment}</td>

<td>${booking.place}</td>

<td>

<a
href="tel:${booking.phone}"
class="btn btn-success">

Contact

</a>

</td>

<td>

<button
class="btn btn-danger"
onclick="deleteBooking('${booking.id}')">

Delete

</button>

</td>

</tr>

`;

}

});

}

// SEARCH
search.addEventListener(
"keyup",
displayBookings
);

// DELETE
window.deleteBooking =
async function(id){

let ok =
confirm(
"Delete booking?"
);

if(!ok) return;

await deleteDoc(
doc(
db,
"bookings",
id
)
);

alert(
"Booking Deleted ✅"
);

};