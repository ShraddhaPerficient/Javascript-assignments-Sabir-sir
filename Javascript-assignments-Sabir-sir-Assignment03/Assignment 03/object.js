var intern = {
    firstname: "Shraddha",
    lastname: "Nair",
    designation: "Intern Consulting",
    contact:34832049832,
    address: {
        house_no: 23,
        house_details: "Trimurtee nagar ,Swalambi , Plot 44.",
        city_name: "Nagpur",
        pin_code:440021,
        country: "India",
    }
};
document.getElementById("intern").innerHTML = "Greetings, my name is " + " " +intern.firstname + " " + intern.lastname + " . " + "My designation in Perficient is " + 
                                              intern.designation + " ." + "You can contact me on "+ intern.contact +" . " +"My address is - " +
                                              intern.address.house_no + " , " +  intern.address.house_details + " , " + intern.address.city_name + 
                                              " , " + intern.address.pin_code +" , " +  intern.address.country +" .";