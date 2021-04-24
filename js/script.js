document.addEventListener("DOMContentLoaded", function() {

    // GOOGLE MAP
    var checkMediaQueryMap = window.matchMedia('(max-width:500px)');
    checkMediaQueryMap.addEventListener("change", function(e) {
        if (checkMediaQueryMap.matches) {
            document.querySelector(".show-location-container .map").innerHTML = `
            <div class="mapouter"><div class="gmap_canvas"><iframe width="350" height="250" id="gmap_canvas" src="https://maps.google.com/maps?q=196%20tabigo%20st&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><br><style>.mapouter{position:relative;text-align:right;height:250px;width:350px;}</style><a href="https://www.embedgooglemap.net"></a><style>.gmap_canvas {overflow:hidden;background:none!important;height:250px;width:350px;}</style></div></div>
            `;
        }  else {
            document.querySelector(".show-location-container .map").innerHTML = `
            <div class="mapouter"><div class="gmap_canvas"><iframe width="500" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=196%20tabigo%20st&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><br><style>.mapouter{position:relative;text-align:right;height:300px;width:500px;}</style><a href="https://www.embedgooglemap.net"></a><style>.gmap_canvas {overflow:hidden;background:none!important;height:300px;width:500px;}</style></div></div>
            `;
        }
    });

    // FREQUENTLY ASKED QUESTIONS
    var faqs = document.querySelector(".faqs");
    faqs.addEventListener("click", function(e) {
        if (e.target.classList.contains("fa-angle-down")) {
            e.target.className = "fas fa-angle-up ";
            e.target.parentElement.parentElement.parentElement.children[1].style.display = "block";
        }   else if (e.target.classList.contains("fa-angle-up")) {
            e.target.className = "fas fa-angle-down";
            e.target.parentElement.parentElement.parentElement.children[1].style.display = "none";
        }
    });

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

