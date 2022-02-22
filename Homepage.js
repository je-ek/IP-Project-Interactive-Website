const menuOpen = document.querySelector(".menu");
const menuClose = document.querySelector(".close");
const overlay = document.querySelector(".overlay");

document.addEventListener('DOMContentLoaded', function(e) {
    document.querySelector(".sign-out").addEventListener("click", function(e){
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
    document.querySelector(".shopbtn").addEventListener("click",function(e){
        e.preventDefault;
        console.log("Redirecting to shop...");
        function shopredirect(){
            window.location.assign("Shoppage.html");
        }
        setTimeout(shopredirect, 1000);
    })
    
    menuOpen.addEventListener("click", function() {
        overlay.classList.add("overlay--active");
    });
      
    menuClose.addEventListener("click", function() {
        overlay.classList.remove("overlay--active");
    });
});