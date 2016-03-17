


$(function(){


    $(".menu").draggable({ scroll: false });
    $(".nike").draggable({ scroll: false });


// botton to show/hide  info = .mito//

    $('.menu').click(function(e) {
        $('.mito').toggle("100");
        e.stopPropagation();
        $("#togglebut").html(function(_, html) {
            return $.trim(html) == '-' ? '+' : '-';
        });
    });




// botton to close  .nike//
    
    $('.nike').click(function(e) {
        e.stopPropagation();
    });  


  $("html").click(function(){
    $('.nike').hide();
  });
 
  $("html").click(function(){
    $('.menu').hide();
  });

  $(".info").click(function(){
    $('.nike').hide();
  });
 
  $(".info").click(function(){
    $('.menu').hide();
  });

  $(".close").click(function(){
    $('.nike').hide();
  });
 
  $(".close").click(function(){
    $('.menu').hide();
  });




// change z-index on hover //

    $('.nike').mouseover(function () {
            $(this).css("z-index", "9")
        });

    $('.nike').mouseout(function () {
            $(this).css("z-index", "0")
        });

// Makes links as target=_blank links (nouvel onglet) //


    $(document).ready(function(){
    $('.mito a').attr('target', '_blank');
    });
    
    $(document).ready(function(){
    $('.mito a').attr('target', '_blank');
    });



// Keydown -> next or previous sibling (page on the same level) //
    
var nextPage = $('#nextPage')[0],
    prevPage = $('#prevPage')[0];

$(window).keydown(function (e) {
    if ( e.which === 37 ) {
        window.location.href = prevPage.href;        
    } else if ( e.which === 39 ) {
        window.location.href = nextPage.href; 
    }
});



// end 

});

