// Overlay Menu Const
const menuOpen = document.querySelector(".menu");
const menuClose = document.querySelector(".close");
const overlay = document.querySelector(".overlay");

// Figurine Carousel
const figurine = document.querySelector(".figurine__carousel");
const ftrack = figurine.querySelector(".carousel__track");
const fslides = Array.from(ftrack.children);
const fnextButton = figurine.querySelector(".carousel__button--right");
const fprevButton = figurine.querySelector(".carousel__button--left");
const fcarouselNav = figurine.querySelector(".carousel__nav");
const fdots = Array.from(fcarouselNav.children);
const fslidesWidth = fslides[0].getBoundingClientRect().width;

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
    document.querySelector(".homebtn").addEventListener("click",function(e){
        e.preventDefault;
        function homeredirect(){
            window.location.assign("Homepage.html");
        }
        setTimeout(homeredirect, 1000);
    })

    document.querySelector(".forumbtn").addEventListener("click",function(e){
        e.preventDefault;
        function shopredirect(){
            window.location.assign("Forumpage.html");
        }
        setTimeout(shopredirect, 1000);
    })

    document.querySelector(".profilebtn").addEventListener("click",function(e){
        e.preventDefault;
        function shopredirect(){
            window.location.assign("Profilepage.html");
        }
        setTimeout(shopredirect, 1000);
    })

    menuOpen.addEventListener("click", function() {
        overlay.classList.add("overlay--active");
    });
      
    menuClose.addEventListener("click", function() {
        overlay.classList.remove("overlay--active");
    });

    // Figurine Carousel Functions
    function fsetSlidePosition (fslide,findex){
        fslide.style.left = fslidesWidth * findex + 'px';
    };

    fslides.forEach(fsetSlidePosition);

    function fmoveToSlide(ftrack, fcurrentSlide, ftargetSlide){
        ftrack.style.transform = 'translateX(-' + ftargetSlide.style.left + ')';
        fcurrentSlide.classList.remove('current-slide');
        ftargetSlide.classList.add('current-slide');
    }

    function fupdateDots(fcurrentDot, ftargetDot){
        fcurrentDot.classList.remove('current-slide');
        ftargetDot.classList.add('current-slide');
    }

    function fhideShowArrows(fslides, fprevButton, fnextButton, ftargetIndex){
        if(ftargetIndex === 0){
            fprevButton.classList.add("is-hidden");
            fnextButton.classList.remove("is-hidden");
        }else if (ftargetIndex === fslides.length - 1){
            fprevButton.classList.remove("is-hidden");
            fnextButton.classList.add("is-hidden");
        } else{
            fprevButton.classList.remove("is-hidden");
            fnextButton.classList.remove("is-hidden");
        }
    }

    // Figurine Carousel Movement
    fprevButton.addEventListener('click',function(e){
        const fcurrentSlide = ftrack.querySelector(".current-slide");
        const fprevSlide = fcurrentSlide.previousElementSibling;
        const fcurrentDot = fcarouselNav.querySelector('.current-slide');
        const fprevDot = fcurrentDot.previousElementSibling;
        const fprevIndex = fslides.findIndex(fslide => fslide === fprevSlide);
        
        fmoveToSlide(ftrack, fcurrentSlide, fprevSlide);
        fupdateDots(fcurrentDot,fprevDot);
        fhideShowArrows(fslides, fprevButton, fnextButton, fprevIndex);
    });

    fnextButton.addEventListener('click',function(e){
        const fcurrentSlide = ftrack.querySelector(".current-slide");
        const fnextSlide = fcurrentSlide.nextElementSibling;
        const fcurrentDot = fcarouselNav.querySelector('.current-slide');
        const fnextDot = fcurrentDot.nextElementSibling;
        const fnextIndex = fslides.findIndex(fslide => fslide === fnextSlide);

        fmoveToSlide(ftrack, fcurrentSlide, fnextSlide);
        fupdateDots(fcurrentDot,fnextDot);
        fhideShowArrows(fslides, fprevButton, fnextButton, fnextIndex);
    });

    fcarouselNav.addEventListener('click', function(e){
        const ftargetDot = e.target.closest('button');

        if(!ftargetDot) return;

        const fcurrentSlide = ftrack.querySelector(".current-slide");
        const fcurrentDot = fcarouselNav.querySelector(".current-slide");
        const ftargetIndex = fdots.findIndex(fdot => fdot === ftargetDot);
        const ftargetSlide = fslides[ftargetIndex];

        fmoveToSlide(ftrack, fcurrentSlide, ftargetSlide);
        fupdateDots(fcurrentDot,ftargetDot);
        fhideShowArrows(fslides, fprevButton, fnextButton, ftargetIndex);
    })    
});