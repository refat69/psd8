$(".banner-main").slick({
    slidesToShow:1,
    slidesToScroll:1,
    autoplay: true,
    speed:2000,
    arrows:false,
    dots:true,
})
$(".screenshorts").slick({
    slidesToShow:5,
    slidesToScroll:1,
    autoplay: true,
    speed:2000,
    arrows:false,
    dots:true,
})
new VenoBox({
    selector: ".my-video-links"
});

$('.feedback-text').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.feedback-img'
  });
  $('.feedback-img').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.feedback-text',
    dots: true,
    arrows: false,
    centerMode: true,
    centerPadding:'0',
    focusOnSelect: true
  });