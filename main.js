// This document is not meant to be used in any production code and is simply an example of authorization for the Salesfusion API using jquery.
console.log("Testing the Salesfusion API.")

// variable for your username
var username = ''
// variable for your password
var password = ''
// variable for your domain
var domain = ''
// connection url
var url = " https://developer.salesfusion.com/api/2.0/contacts/"

// ajax call
$.ajax({
  type: "GET",
  url: url,
  dataType: 'json',
  headers: {
    // btoa base encodes the username@domain:password format for authentication
    "Authorization": "Basic " + btoa(username + "@" + domain + ":" + password)
  }
}).then(function (response) {
  // log the results of the call to the browser console
  console.log(response);
  // call the append function to display results on page
  appendToPage(response);
});

// loops over the result set and appends each to the page.
function appendToPage (data) {
  for (var i = 0; i < data.results.length; i++) {
    var record = data.results[i];
    $('.results-container').append(`<div><span>${record.first_name} ${record.last_name}</div>`);
  }
}
