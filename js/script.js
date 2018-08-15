
function move(root) {
  root = root || document;
  var elem =  $(root).find(".rectangle");
  var procent = $(root).find(".procent");      
  var width = 0;
  var maxWidth =  parseInt($(root).data('value')) || 100;
  var id = setInterval(frame, 20);

  function frame() {
    if (width >= maxWidth) {
      clearInterval(id);
    } else {
      width++; 
      elem.css('width', width + '%'); 
      procent.html(width * 1  + '%');
    }
  }
}


function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(function() {

  function runProgressIfVisible() {
    $('.pg-bar.untouched').each(function(index, elem) {
      if (isScrolledIntoView(elem)) {
        $(elem).removeClass('untouched')
        move(elem);
      }
    });
  }

  $(window).scroll(runProgressIfVisible);

  runProgressIfVisible();
})

 
$(document).ready(function(){
  $("#menu").on("click", "a.someclass", function (event) {
   
    event.preventDefault();

   
    var id  = $(this).attr('href'),

    
    top = $(id).offset().top;
    
   
    $('body,html').animate({scrollTop: top}, 1500);
  });
});