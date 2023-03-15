$(document).ready(function(){
    $('.partners-logos').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
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

    var countDownDate = new Date("March 18, 2023 23:00:00").getTime();
    var x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();
      
        // Find the distance between now and the count down date
        var distance = countDownDate - now;
      
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
        // Display the result in the element with id="demo"
        document.getElementById("demo").innerHTML = days + "D " + hours + "H "
        + minutes + "M " + seconds + "S ";
      
        // If the count down is finished, write some text
        if (distance < 0) {
          clearInterval(x);
          document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);

    
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