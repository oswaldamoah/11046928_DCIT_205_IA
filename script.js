
function submitComplaint() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var complaint = document.getElementById('complaint').value;


    // Loggin the values to the console 
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Complaint: " + complaint);

    // Claering the form after submission
    document.getElementById('complaintForm').reset();
}
