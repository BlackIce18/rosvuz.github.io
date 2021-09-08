$(document).ready(function () {
    var child__height=$(".scroll__child").height()
    $('.scroll').css({
        minHeight: child__height
      });
    $(window).scroll(function (event) {
        var window_height=$(window).height();
    var window_scroll=$(window).scrollTop();
    var block__height=$(".scroll").height()+$(".scroll").position().top;
    var scroll_toEnd=block__height-window_height-window_scroll;
    if(scroll_toEnd<0){
        $(".scroll__child").toggleClass("can__scroll",false);
    }
    else{
        $(".scroll__child").toggleClass("can__scroll",true);
    }
        
    });})