document.addEventListener("DOMContentLoaded", function() {

    // NAVIGATION TOGGLE ON BUTTON FUNCTION
    var nav = document.querySelector(".nav-main-container");
    var mainSemantic = document.querySelector("main");
    nav.addEventListener("click", function (e) {
        if (e.target.classList.contains("fa-bars")) {
            e.target.className = "fas fa-times";
            mainSemantic.style.top = "175px";
        }  else if (e.target.classList.contains("fa-times")) {
            e.target.className = "fas fa-bars";
            mainSemantic.style.top = "0";
        }  
    });

    // NAVIGATION TOGGLE HELPER FUNCTION
    var checkMediaQuery = window.matchMedia('(min-width:768px)');
    checkMediaQuery.addEventListener("change", function(e) {
        if (checkMediaQuery.matches) {
            mainSemantic.style.top = "0";
            document.querySelector(".nav-toggler").firstElementChild.className = "fas fa-bars";
        }
    });

    // IMAGE GALLERY MODAL FUNCTION
    var modalSection = document.querySelector(".top-section-2");
    var modalShow = document.querySelector(".modal-img");
    modalSection.addEventListener("click", (e)=> {
        if (e.target.tagName == "IMG" || e.target.tagName == "img") {

            var targetSource = e.target.src;
            var modalDisplayImg = document.querySelector(".modal-display-img");
            modalDisplayImg.src = targetSource;
            modalShow.style.display = "block";
        }
    });

    modalShow.addEventListener("click", (e) => {
        if (e.target.classList.contains("modal-area")) {
            modalShow.style.display = "none";
        }   else if (e.target.classList.contains("hide-modal")) {
            modalShow.style.display = "none";
        }
    });
    
});

