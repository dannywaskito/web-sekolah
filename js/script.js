 $('.pendidikan-menu ul li').click(function(){
          $('.pendidikan-menu ul li').removeClass('active');
          $(this).addClass('active');
          
          var selector = $(this).attr('data-filter');
          $('.pendidikan-item').isotope({
            filter:selector
          });
          return  false;
         });
         $(document).ready(function() {
         var popup_btn = $('.popup-btn');
         popup_btn.magnificPopup({
         type : 'image',
         gallery : {
          enabled : true
         }
         });
         });
  var typed = new Typed(".typing", {
            strings: ["Web Developer", "Web Designer"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
          });
