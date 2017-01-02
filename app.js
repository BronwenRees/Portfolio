    console.log("hello");
$(".js-scroll").click(function(){
    $('body').animate({
        scrollTop: $("#my-work").offset().top-70
    }, 600);
    console.log("hello");
    return false;
});
