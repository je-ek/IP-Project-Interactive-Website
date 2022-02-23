// Overlay Menu Const
const menuOpen = document.querySelector(".menu");
const menuClose = document.querySelector(".close");
const overlay = document.querySelector(".overlay");

// Anime Carousel Consts
const anime = document.querySelector(".anime__carousel");
const track = anime.querySelector(".carousel__track");
const slides = Array.from(track.children);
const nextButton = anime.querySelector(".carousel__button--right");
const prevButton = anime.querySelector(".carousel__button--left");
const carouselNav = anime.querySelector(".carousel__nav");
const dots = Array.from(carouselNav.children);
const slidesWidth = slides[0].getBoundingClientRect().width;


// Manga Carousel Consts
const manga = document.querySelector(".manga__carousel");
const mtrack = manga.querySelector(".carousel__track");
const mslides = Array.from(mtrack.children);
const mnextButton = manga.querySelector(".carousel__button--right");
const mprevButton = manga.querySelector(".carousel__button--left");
const mcarouselNav = manga.querySelector(".carousel__nav");
const mdots = Array.from(mcarouselNav.children);
const mslidesWidth = mslides[0].getBoundingClientRect().width;

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

    // Anime Carousel Functions
    function setSlidePosition (slide,index){
        slide.style.left = slidesWidth * index + 'px';
    };

    slides.forEach(setSlidePosition);

    function moveToSlide(track, currentSlide, targetSlide){
        track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
        currentSlide.classList.remove('current-slide');
        targetSlide.classList.add('current-slide');
    }

    function updateDots(currentDot, targetDot){
        currentDot.classList.remove('current-slide');
        targetDot.classList.add('current-slide');
    }

    function hideShowArrows(slides, prevButton, nextButton, targetIndex){
        if(targetIndex === 0){
            prevButton.classList.add("is-hidden");
            nextButton.classList.remove("is-hidden");
        }else if (targetIndex === slides.length - 1){
            prevButton.classList.remove("is-hidden");
            nextButton.classList.add("is-hidden");
        } else{
            prevButton.classList.remove("is-hidden");
            nextButton.classList.remove("is-hidden");
        }
    }

    // Anime Carousel Movement
    prevButton.addEventListener('click',function(e){
        const currentSlide = track.querySelector(".current-slide");
        const prevSlide = currentSlide.previousElementSibling;
        const currentDot = carouselNav.querySelector('.current-slide');
        const prevDot = currentDot.previousElementSibling;
        const prevIndex = slides.findIndex(slide => slide === prevSlide);
        
        moveToSlide(track, currentSlide, prevSlide);
        updateDots(currentDot,prevDot);
        hideShowArrows(slides, prevButton, nextButton, prevIndex);
    });



    // when i click right, move slides to the right
    nextButton.addEventListener('click',function(e){
        const currentSlide = track.querySelector(".current-slide");
        const nextSlide = currentSlide.nextElementSibling;
        const currentDot = carouselNav.querySelector('.current-slide');
        const nextDot = currentDot.nextElementSibling;
        const nextIndex = slides.findIndex(slide => slide === nextSlide);

        moveToSlide(track, currentSlide, nextSlide);
        updateDots(currentDot,nextDot);
        hideShowArrows(slides, prevButton, nextButton, nextIndex);
    });

    carouselNav.addEventListener('click', function(e){
        const targetDot = e.target.closest('button');

        if(!targetDot) return;

        const currentSlide = track.querySelector(".current-slide");
        const currentDot = carouselNav.querySelector(".current-slide");
        const targetIndex = dots.findIndex(dot => dot === targetDot);
        const targetSlide = slides[targetIndex];

        moveToSlide(track, currentSlide, targetSlide);
        updateDots(currentDot,targetDot);
        hideShowArrows(slides, prevButton, nextButton, targetIndex);
    })


    // Manga Carousel Functions
    function msetSlidePosition (mslide,mindex){
        mslide.style.left = mslidesWidth * mindex + 'px';
    };

    mslides.forEach(msetSlidePosition);

    function mmoveToSlide(mtrack, mcurrentSlide, mtargetSlide){
        mtrack.style.transform = 'translateX(-' + mtargetSlide.style.left + ')';
        mcurrentSlide.classList.remove('current-slide');
        mtargetSlide.classList.add('current-slide');
    }

    function mupdateDots(mcurrentDot, mtargetDot){
        mcurrentDot.classList.remove('current-slide');
        mtargetDot.classList.add('current-slide');
    }

    function mhideShowArrows(mslides, mprevButton, mnextButton, mtargetIndex){
        if(mtargetIndex === 0){
            mprevButton.classList.add("is-hidden");
            mnextButton.classList.remove("is-hidden");
        }else if (mtargetIndex === mslides.length - 1){
            mprevButton.classList.remove("is-hidden");
            mnextButton.classList.add("is-hidden");
        } else{
            mprevButton.classList.remove("is-hidden");
            mnextButton.classList.remove("is-hidden");
        }
    }

    // Manga Carousel Movement
    mprevButton.addEventListener('click',function(e){
        const mcurrentSlide = mtrack.querySelector(".current-slide");
        const mprevSlide = mcurrentSlide.previousElementSibling;
        const mcurrentDot = mcarouselNav.querySelector('.current-slide');
        const mprevDot = mcurrentDot.previousElementSibling;
        const mprevIndex = mslides.findIndex(mslide => mslide === mprevSlide);
        
        mmoveToSlide(mtrack, mcurrentSlide, mprevSlide);
        mupdateDots(mcurrentDot,mprevDot);
        mhideShowArrows(mslides, mprevButton, mnextButton, mprevIndex);
    });



    // when i click right, move slides to the right
    mnextButton.addEventListener('click',function(e){
        const mcurrentSlide = mtrack.querySelector(".current-slide");
        const mnextSlide = mcurrentSlide.nextElementSibling;
        const mcurrentDot = mcarouselNav.querySelector('.current-slide');
        const mnextDot = mcurrentDot.nextElementSibling;
        const mnextIndex = mslides.findIndex(mslide => mslide === mnextSlide);

        mmoveToSlide(mtrack, mcurrentSlide, mnextSlide);
        mupdateDots(mcurrentDot,mnextDot);
        mhideShowArrows(mslides, mprevButton, mnextButton, mnextIndex);
    });

    mcarouselNav.addEventListener('click', function(e){
        const mtargetDot = e.target.closest('button');

        if(!mtargetDot) return;

        const mcurrentSlide = mtrack.querySelector(".current-slide");
        const mcurrentDot = mcarouselNav.querySelector(".current-slide");
        const mtargetIndex = mdots.findIndex(mdot => mdot === mtargetDot);
        const mtargetSlide = mslides[mtargetIndex];

        mmoveToSlide(mtrack, mcurrentSlide, mtargetSlide);
        mupdateDots(mcurrentDot,mtargetDot);
        mhideShowArrows(mslides, mprevButton, mnextButton, mtargetIndex);
    })
});