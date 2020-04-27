import 'bootstrap';

import "../sass/styles.scss";
import moment from "moment";

console.log("salut")

console.log(moment().format("MMMM Do YYYY"));
console.log(moment("20111031", "YYYYMMDD").fromNow()); // 8 years ago
console.log(moment().subtract(10, "days").calendar()); // 05/27/2019

console.log("TEST", process.env.DB_HOST);

const alert = document.getElementById('alert');

alert.innerHTML += `

<div class="alert alert-primary" role="alert">
  This is a primary alert—check it out!!
</div>
`;