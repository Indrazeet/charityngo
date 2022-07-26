$(function(){

    $('.slider_content').slick({
        prevArrow: '.arrow_prev',
        nextArrow: '.arrow_next',
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 200000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
               
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
        });
    });
				
   

 
// $(document).ready(function(){
//     $('.progress-value > span').each(function(){
//         $(this).prop('Counter',0).animate({
//             Counter: $(this).text()
//         },{
//             duration: 1500,
//             easing: 'swing',
//             step: function (now){
//                 $(this).text(Math.ceil(now));
//             }
//         });
//     });
// });