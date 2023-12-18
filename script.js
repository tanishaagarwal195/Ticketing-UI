const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const thiscity = urlParams.get('city');
document.getElementById("mycity").innerHTML = thiscity;

