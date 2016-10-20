(function($) {
//  alert("test");
//  console.log("test");
  $(document).ready(function(){
    $('a').on('click', function() {
      $(this).blur();
    });
  });
})(jQuery);
