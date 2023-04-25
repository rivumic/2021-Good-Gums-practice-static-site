///<reference path="jquery-3.6.0.js"/>

$(function () {
    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);

    $("#fName").text(urlParams.get("firstName"));

    $("#lName").text(urlParams.get("lastName"));

    $("#email").text(urlParams.get("email"));

    var address = urlParams.get("streetAddress");
    if (urlParams.get("streetAddress2")) {
        address += urlParams.get("streetAddress2");
    }
    $("#streetAddress").text(address + " " +
        urlParams.get("city") + " " +
        urlParams.get("zip") + ", " +
        urlParams.get("state") + ", " +
        urlParams.get("country"));
        

    $("#deliveryMethod").text(urlParams.get("deliveryMethod"));

    $("#extraIns").text(urlParams.get("extraInstructions"));

    $("#repeat").text("Are you a returning customer: " + urlParams.get("repeatCust"));

    $("#paper").text("Would you like a paper invoice: " + urlParams.get("paperBill"));

});