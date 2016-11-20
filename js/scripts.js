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

$(document).ready(function(){

//smooth scrolling
// <script type="text/javascript">
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
$(document).click(function (event) {
    var clickover = $(event.target);
    var $navbar = $(".navbar-collapse");               
    var _opened = $navbar.hasClass("in");
    if (_opened === true && !clickover.hasClass("navbar-toggle")) {      
        $navbar.collapse('hide');
    }
});

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
  var name=$('.name').val().toUpperCase();
  var tel=$('.tel').val();
  var email=$('.email').val(); 
  $('#visible-namenumber').html('Thank you'+' '+name);
  $('#visible-email').html('I will answer via this email address:'+' '+email); 
  $('#visible-comment').html('without delay.');
  $('#first').html(name + ' ');
  $('.message').hide();
  $('.email').hide();
  $('.tel').hide();
  $('.name').hide();
  console.log( name + tel + email + comment );
  return false;
});

$(".name").css("border", "2px solid #039");

$(".tel").css("border", "2px solid #039");

$(".email").css("border", "2px solid #039");

$(".message").css({"border": "2px solid #039", "background-color": "#dabdff"});

//parallax
$('#blog').stellar();

});