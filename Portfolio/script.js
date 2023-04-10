 $(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrolly > 20){
            $('.navbar').addClass("sticky");
         }else{
           $('.navbar').removeClass("sticky");
    }
    if(this.scroll > 500){
      $('.scroll-up-btn').addClass("show");
    }
    else{
      $('.scroll-up-btn').removeClass("show");
    }
   });


  //  typing animation script
  var typed = new Typed(".typing", {
    strings: ["Developer" , "Freelancer" , "Youtuber"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  var typed = new Typed(".typing-2", {
    strings: ["Developer" , "Freelancer" , "Youtuber"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });
  





  //  slide-up script
  $('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0});

  });

  
//   toggle menu/navbar script
$('.menu-btn').click(function(){
    $('.menu').css("left","0");
    // $('.menu-btn i').toggle("fast");
    
});
$('.close-menu').click(function(){
  $('.menu').css("left","-100%");
})


// typing animation script
var typed = new typed("", {
  strings
     
 });



// owl carouse1 script

$('.carouse1').owlCarouse1({
  margin: 20,
  loop: true,
  autoplayTimeOut: 2000,
  autoplayHoverPause: true,
  responsive: {
    0:{
      item: 1,
      nav: false
    },
    600:{
      item: 2,
      nav: false
    },
    1000:{
      item: 3,
      nav: false
    }
  }
});

});

var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");

        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active-link");
            }
            for(tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");

        }