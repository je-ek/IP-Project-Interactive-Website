// Overlay Menu Const
const menuOpen = document.querySelector(".menu");
const menuClose = document.querySelector(".close");
const overlay = document.querySelector(".overlay");

document.addEventListener('DOMContentLoaded', function(e) {
    document.querySelector(".sign-out").addEventListener("click", function(e){
        e.preventDefault();
        function redirect(){
            window.location.assign("Loginpage.html");
        }
        setTimeout(redirect, 1000);
    });
    document.querySelector(".homeLogo").addEventListener("click",function(e){
        e.preventDefault();

        document.querySelector(".scrollableContainer").scrollTop = 0;
    })
    document.querySelector(".shopbtn").addEventListener("click",function(e){
        e.preventDefault;
        function shopredirect(){
            window.location.assign("Shoppage.html");
        }
        setTimeout(shopredirect, 1000);
    })

    document.querySelector(".homebtn").addEventListener("click",function(e){
        e.preventDefault;
        function forumredirect(){
            window.location.assign("Homepage.html");
        }
        setTimeout(forumredirect, 1000);
    })

    document.querySelector(".profilebtn").addEventListener("click",function(e){
        e.preventDefault;
        function profileredirect(){
            window.location.assign("Profilepage.html");
        }
        setTimeout(profileredirect, 1000);
    })

    document.querySelector(".forumTitle").addEventListener("click",function(e){
        e.preventDefault;
        console.log("click");
        function postredirect(){
            window.location.assign("Postpage.html");
        }
        setTimeout(postredirect,1000);
    })

    menuOpen.addEventListener("click", function() {
        overlay.classList.add("overlay--active");
    });
      
    menuClose.addEventListener("click", function() {
        overlay.classList.remove("overlay--active");
    });
});