$(document).ready(function(){
    $('.partners-logos').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },{
            breakpoint: 520,
            settings: {
                slidesToShow: 2
            }
        }]
    });
});

// window.onload = function() {                
//     if (window.innerWidth >= 900) {
//         $("#notMobile").addClass("active");
//         $("#mobile").addClass("inactive");
//     } else {
//         $("#mobile").addClass("active");
//         $("#notMobile").addClass("inactive");
//     }
//     if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) == true) {
//         $("#mobile").addClass("active");
//         $("#notMobile").addClass("inactive");

//     }

// };

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}