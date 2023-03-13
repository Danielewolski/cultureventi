$(document).ready(function(){
    $('.partners-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
            }
        },{
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});

// window.onload = function() {
                
//     if (window.innerWidth >= 900) {
//         false;
//     } else {
//         true;
//     }
//     if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) == true) {
//         true;
//     }

// };

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}