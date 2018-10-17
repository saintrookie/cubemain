var $ = jQuery.noConflict();

$(document).ready(function($) {

	var loadBgImg = false
		loadVideo = true;
	var getHomepages = false;

	$winWidth = $(window).width();

	$(function() {
		var windowH = $(window).height();
		var wrapperH = $('.fullheight').height();
		if (windowH > wrapperH) {
			$('.fullheight').css({
				'height': ($(window).height()) + 'px'
			});
		}
		$(window).resize(function() {
			var windowH = $(window).height();
			var wrapperH = $('.fullheight').height();
			var differenceH = windowH - wrapperH;
			var newH = wrapperH + differenceH;
			var truecontentH = $('.fullheight').height();
			if (windowH > truecontentH) {
				$('.fullheight').css('height', (newH) + 'px');
			}
		})
	});


	if($.browser.mobile) {
			$('video').remove();
		} else {

	}
	
	function cekLoader(){
		if( loadBgImg == true && loadVideo == true ){ 	
			var xx2 = setTimeout( function(){
				$('#loading').removeClass('active');
				$('body').removeClass('body_locked');
				// $('#header').removeClass('active');
				clearTimeout(xx2);
			},300);	
		}
	}

	$('.bgimg-loaded').bgLoaded({
		doneAllLoaded : function(){
			loadBgImg = true;
			cekLoader();
			createFullpage();			
		}
	});

	$(function() {
		$('#collapse').on('shown.bs.collapse', function() {
			$('#hamburger').addClass('open');
			$('body').addClass('body_locked');
		}).on('hidden.bs.collapse', function() {
			$('#hamburger').removeClass('open');
			$('body').removeClass('body_locked');
		});
	});

	$(".slick").slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: false,
		speed: 800,
		arrows: true,
		nextArrow: '<div  class="slick-next slick-arrow"><i class="fa fa-chevron-circle-right"></i></div>',
  		prevArrow: '<div  class="slick-prev slick-arrow"><i class="fa fa-chevron-circle-left"></i></div>',
		responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
			}
		}, {
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				arrows: false,
				autoplay: true
			}
		}, {
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				speed: 1500,
				arrows: false,
				autoplay: true
			}
		}]
	});

	$( function() {
		$(".fancybox").fancybox({
	        openEffect: 'none',
	        closeEffect: 'none',
	        width: 400,
	        height: 300,
	        autoDimensions: true,
	        tpl: {
		        next: '<a class="fancybox-nav fancybox-next" href="javascript:;"><span><i class="fa fa-chevron-circle-right fa-2x " aria-hidden="true"></i></span></a>',
	  			prev: '<a class="fancybox-nav fancybox-prev" href="javascript:;"><span><i class="fa fa-chevron-circle-left fa-2x " aria-hidden="true"></i></span></a>',
	  			closeBtn: '<a class="fancybox-item fancybox-close" href="javascript:;"><span><i class="fa fa-times fa-2x " aria-hidden="true"></i></span></a>'
	  		}
	    });
	});

	$(function(){
			$(".dropdown").hover(            
	        function() {
	            $('.dropdown-menu', this).not('.in .dropdown-menu').stop( true, true ).slideDown("fast");
	            $(this).toggleClass('open');        
	        },
	        function() {
	            $('.dropdown-menu', this).not('.in .dropdown-menu').stop( true, true ).slideUp("fast");
	            $(this).toggleClass('open');       
	        });
	});

	$( function() {
		var $newGrid = $('.grid');
		$newGrid.masonry({
		    itemSelector: '.grid-item',
		    percentPosition: true,
		    columnWidth: '.grid-sizer'
		}); 
	});



	$(function() {
	    jQuery.validator.addMethod("mobilephone", function (phone_number, element) {
			phone_number = phone_number.replace(/\s+/g, "");
	    	return this.optional(element) || phone_number.length > 8 &&
	        phone_number.match(/^08\d{9,10}$/);
		}, "Valid Phone Number Please");

		$('#touch').validate({
			rules:{name:{required: true},email:{required: true, email:true},  phone:{required: true, mobilephone:true}, msg:{required: true} },
		    messages: { name: "Your Name Please", email: "Email Please", phone: "Phone Number Please", msg:'Please'
		    },

		    errorElement: "span",
		    errorClass: "help-block",

		    highlight: function (element, errorClass, validClass) {
		        $(element).closest('.form-group').addClass('has-error');
		    },

		    unhighlight: function (element, errorClass, validClass) {
		        $(element).closest('.form-group').removeClass('has-error');
		    },

		    // errorPlacement: function (error, element) {
		    //     element.attr("span", error.text());
		    // },

			submitHandler: function(form) {
		        $.ajax({
		            url: 'inc/send_mail.php',
		            type: form.method,
		            data: $(form).serialize(),
		            success: function(response) {
		            	if(response == 'true'){
		            		$('#answers').html('<i class="fa fa-refresh fa-spin fa-fw"></i> Sending Data');
		               		setTimeout(function() {
							  window.location.href = "thankyou.html";
							  $('#answers').html('');
							}, 2500);

		            	}else{
		            		$('#answers').html('Fail to send request. Please try again in few minutes.');
		                	$('#touch').trigger('reset');
		            	}
		            }            
		        });
		    }

		});
	});


});

function createFullpage() {
	var $fullpage = document.getElementById('fullpage');
	var $header = document.getElementById('header');
	if( $fullpage ){
		$('#fullpage').fullpage({
			navigation: true,
			navigationPosition: 'right',
			scrollOverflow: true,
			autoScrolling: true,
			mouseScrolling: true,
			css3: true,
			scrollbar: true
		});
	}
}