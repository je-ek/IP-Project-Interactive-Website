document.addEventListener('DOMContentLoaded', function(e) {
    document.querySelector("#loginBack").addEventListener("click", function(e){
        e.preventDefault();
        console.log("activate");
        function redirect(){
            window.location.assign("Loginpage.html");
        }
        setTimeout(redirect, 1000);
    });
});