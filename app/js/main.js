$(function(){
	
$('.slider__panel-star').rateYo({
	rating: 3.2,
	starWidth: "14px"
});

$('.slider__items').slick({
	dots: false,
	prevArrow: '<button type="button" class="slick-prev lnr-chevron-left"></button>',
	nextArrow: '<button type="button" class="slick-next lnr-chevron-right"></button>',
});
	
$('.slider__bot-item').slick({
	dots: false,
	prevArrow: '<button type="button" class="slick-prev lnr-chevron-left"></button>',
	nextArrow: '<button type="button" class="slick-next lnr-chevron-right"></button>',
	slidesToShow: 3,
	slidesToScroll: 3,
	variableWidth: true,
});

	$('.remember__me').on('click', function(){
		$('.remember__me-circle').addClass('remember__me-circle-bg');
});
	
var mixer = mixitup('.product__items');
  
});