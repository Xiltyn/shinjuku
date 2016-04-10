(function($, _) {

  function menuHide() {

    // get current distance from top of viewport
    currentTop = $(window).scrollTop();

    $(window).scroll({
        previousTop: 0
      },

    function() {
      // define the header height here
      var headerHeight = 60;
      // if user has scrolled past header, initiate the scroll up/scroll down hide show effect
      if ($(window).scrollTop() > headerHeight) {
        if (currentTop < this.previousTop) {
          $("#top-menu").removeClass("top-menu--hidden");
        } else {
          $("#top-menu").addClass("top-menu--hidden");
        }
      } else {
        $("#top-menu").removeClass("top-menu--hidden");
      }
      this.previousTop = currentTop;
      console.log(this.previousTop);
    });
  }

  function typeCoverHide() {
    var $blocks = $('.block');

    $blocks.each(function() {

      var $cover = $(this).find('.cover');

      $(this).hover(
        function() {
          $cover.fadeOut(250);
      }, function() {
          $cover.fadeIn(400);
      });
      // console.log($cover);
    });
  }

  function peopleShowDetails() {
    var $persons = $('.person');
    var $personPhoto = $(this).find('.person-cover--photo');
    var $personDescription = $(this).find('.person-cover--description');
    var $personUnder;

    $persons.each(function() {
      $personsUnder = $('.person-under');

      $(this).hover(
        function() {
          $personsUnder.addClass('hidden');
      }, function() {
          $personsUnder.removeClass('hidden');
      });
      // console.log($persons);
    });
    $persons.each(function() {

      $(this).hover(
        function() {
          $(this).find('.person-cover').fadeIn(300);
      }, function() {
          $(this).find('.person-cover').fadeOut(300);
      });
      // console.log($persons);
    });
  }

 function animateMenuItems() {
   var $menuButton = $('#navigation').find('li');

   $menuButton.each(function() {
     $(this).hover(function() {
      //  console.log(this);
       $(this).addClass('animated pulse');
     }, function() {
       $(this).removeClass('animated pulse bounceOut');
     });
   });

   $menuButton.each(function() {
     $(this).on('click', function() {
      //  console.log(this);
       $(this).addClass('animated bounceOut');
     });
   });
 }

 // Slick latest posts slider script
 // ========================||▷
 function latestPostsSlick() {
   $('.slick-slider').slick({

     // Slick configuration
     // ========================||▷
     arrows: false,
     dots: true,
     centerMode: true,
     centerPadding: '175px',
     autoplay: true,
     autplaySpeed: 5000,
     infinite: true,
     speed: 750,
     slidesToShow: 3,
     slidesToScroll: 1,
     responsive: [
       {
         breakpoint: 1024,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 1,
           infinite: true,
           dots: true
         }
       },
       {
         breakpoint: 600,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1
         }
       },
       {
         breakpoint: 480,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1
         }
       }
      ]
   });
}

menuHide();
typeCoverHide();
peopleShowDetails();
animateMenuItems();
latestPostsSlick();

})(window.$, window._);
