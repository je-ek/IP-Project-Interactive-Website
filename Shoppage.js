document.addEventListener('DOMContentLoaded', function(e) {
    document.querySelector("#signOut").addEventListener("click", function(e){
        e.preventDefault();
        console.log("sign me out cheif");
        function redirect(){
            window.location.assign("Loginpage.html");
        }
        setTimeout(redirect, 1000);
    });
    document.querySelector(".homeLogo").addEventListener("click",function(e){
        e.preventDefault();
        console.log("click");

        document.querySelector(".scrollableContainer").scrollTop = 0;
    })
    document.querySelector(".homeRedirect").addEventListener("click",function(e){
        e.preventDefault;
        console.log("Redirecting to home...");
        function homeredirect(){
            window.location.assign("Homepage.html");
        }
        setTimeout(homeredirect, 1000);
    })

});