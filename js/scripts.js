// facebook
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

//twitter
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

// Google map
function initMap() {
  var montreal = {lat: 45.4373316, lng: -73.6038};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: montreal
  });
  var marker = new google.maps.Marker({
    position: montreal,
    map: map
  });
}

// var map;
// function initMap() {
//   map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: 45.4373316, lng: -73.6038},
//     zoom: 15
//   });
// }

$(document).ready(function(){

//smooth scrolling
var $root = $('html, body');
  $('.navbar-nav a').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top
      }, 500, function () {
         window.location.hash = href;
      });
      return false;
});

//navbar collapse
$(".navbar-nav li a").click(function(event) {
    if (!$(this).parent().hasClass('dropdown'))
        $(".navbar-collapse").collapse('hide');
});
// $(document).click(function (event) {
//     var clickover = $(event.target);
//     var $navbar = $(".navbar-collapse");               
//     var _opened = $navbar.hasClass("in");
//     if (_opened === true && !clickover.hasClass("navbar-toggle")) {      
//         $navbar.collapse('hide');
//     }
// });

// tootips
$(function(){
  $('[data-toggle="tooltip"]').tooltip();
});

$('#item2').tooltip({ show:{ effect: "blind", duration: 800 } 
});

$('#item1').tooltip({ show:{ effect: "blind", duration: 800 } 
});

$(function () {
  $('#item1').tooltip();
});

// form
$("#submit").on("click", function() {
  var comment=$('.message').val();
  if(comment==="") {
    $(".message").css("border", "2px solid red");
  } else {
    $(".message").hide();
  }
  var name=$('.name').val().toUpperCase();
  var tel=$('.tel').val();
  var email=$('.email').val();
  $('#visible-namenumber').html('Thank you'+' '+name);
  $('#visible-email').html('I will answer via this email address:'+' '+email); 
  $('#visible-comment').html('without delay.');
  $('#first').html(name + ' ');
  $('.email').hide();
  $('.tel').hide();
  $('.name').hide();
  console.log( name + tel + email + comment );
  return false;
});

$(".message").on("keyup", function(){
  console.log("keyup happened");
  var charCount=$(".message").val().length;
  console.log("charCount");
  $("#char-count").html(charCount);
  if (charCount > 50) {
    $("#char-count").css("color", "red");
  } else {
    $("#char-count").css("color", "black");
  }

});


$(".name").css("border", "2px solid #039");

$(".tel").css("border", "2px solid #039");

$(".email").css("border", "2px solid #039");

$(".message").css({"border": "2px solid #039", "background-color": "#dabdff"});

//parallax
$('#blog').stellar();

});

// works section

// for(var i = 0; i < works.length; ++i ) {
//   $("#portfolio").append('\
//   <div class="col-md-3 col-xs-12 col-sm-4 col-lg-2">\
//     <a href="' + works[i].URL + '" class="work-img">\
//      <img class="img-responsive" src="' + works[i].pics + '" alt="Portfolio1" style="width:180px;height:180px">\
//      <span class="info"><p class="proj-title">' + works[i].title + '</p></span>\
//     </a>\
//   </div>\
//   ');
//   var images = $("#portfolio img");
//   if (i%2 === 0){
//     $(images[i]).css("border", "2px solid #039");
//   } else {
//     $(images[i]).css("border", "2px solid orange");
//   };
// };

var i = 0 
do {
  $("#portfolio").append('\
  <div class="col-md-3 col-xs-12 col-sm-4 col-lg-2">\
    <a href="' + works[i].URL + '" class="work-img">\
     <img class="img-responsive" src="' + works[i].pics + '" alt="Portfolio1" style="width:180px;height:180px">\
     <span class="info"><p class="proj-title">' + works[i].title + '</p></span>\
    </a>\
  </div>\
  ');
  var images = $("#portfolio img")
  if (i%2 === 0){
    $(images[i]).css("border", "2px solid #039");
  } else {
    $(images[i]).css("border", "2px solid orange");
  };
  ++i;
} while (i < works.length);

  $(".work-img").mouseenter( function() {
    $(".info", this).show();
  }).mouseleave(function() {
    $(".info", this).hide();
  });

  