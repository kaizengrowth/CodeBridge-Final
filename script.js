function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (username==="kai@spiritkaizen.org" && password==="spiritkaizen") {
        window.location.href = 'user.html';
    }
    else {
        alert("That is not the correct username or password. Please try again.");
    }
}