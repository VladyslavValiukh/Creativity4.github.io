// Back to top
(function($) {
$(function() {

  $('#up').click(function() {
    $('body,pug').animate({scrollTop:0},500);
    return false;
  })

})
})(jQuery)


// Skroll to bottom
 $(document).ready(function(){
    $("#button").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,pug').animate({scrollTop: top}, 1500);
    });
});


// menu

(function($){
  $(function() {
    $('.menu__icon').on('click', function() {
      $(this).closest('.menu').toggleClass('menu_state_open');
    });
  });
})(jQuery);
