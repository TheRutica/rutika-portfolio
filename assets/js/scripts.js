/*
Author       : theme_ocean
Template Name: Anushka - Personal Portfolio Template
Version      : 1.0
*/
(function ($) {
	'use strict';

	jQuery(document).on('ready', function () {

		/*PRELOADER JS*/
		$(window).on('load', function () {
			$('.status').fadeOut();
			$('.preloader').delay(350).fadeOut('slow');
		});
		/*END PRELOADER JS*/

		/*START MENU JS*/
		$('#main-menu').slicknav({
			label: '',
			duration: 1000,
			easingOpen: "easeOutBounce", //available with jQuery UI
			prependTo: '#mobile_menu',
			closeOnClick: true,
			easingClose: "swing",
			easingOpen: "swing",
			openedSymbol: "&#9660;",
			closedSymbol: "&#9658;"
		});

		if ($(window).scrollTop() > 200) {
			$('.fixed-top').addClass('menu-bg');
		} else {
			$('.fixed-top').removeClass('menu-bg');
		}
		$(window).on('scroll', function () {
			if ($(window).scrollTop() > 70) {
				$('.site-navigation, .header-white, .header').addClass('navbar-fixed');
			} else {
				$('.site-navigation, .header-white, .header').removeClass('navbar-fixed');
			}
		});
		/*END MENU JS*/

		/*START PROGRESS BAR*/
		$('.progress-bar > span').each(function () {
			var $this = $(this);
			var width = $(this).data('percent');
			$this.css({
				'transition': 'width 2s'
			});

			setTimeout(function () {
				$this.appear(function () {
					$this.css('width', width + '%');
				});
			}, 500);
		});
		/*END PROGRESS BAR*/

		/* START COUNTDOWN JS*/
		$('.counter_feature').on('inview', function (event, visible, visiblePartX, visiblePartY) {
			if (visible) {
				$(this).find('.counter-num').each(function () {
					var $this = $(this);
					$({ Counter: 0 }).animate({ Counter: $this.text() }, {
						duration: 2000,
						easing: 'swing',
						step: function () {
							$this.text(Math.ceil(this.Counter));
						}
					});
				});
				$(this).unbind('inview');
			}
		});
		/* END COUNTDOWN JS */

		/* START JQUERY LIGHTBOX*/
		jQuery('.lightbox').venobox({
			numeratio: true,
			infinigall: true
		});
		/* END JQUERY LIGHTBOX*/

		/* START MIX JS */
		$('.portfolio_item').mixItUp({

		});

		/*START VIDEO JS*/
		$('.video-play').magnificPopup({
			type: 'iframe'
		});
		/*END VIDEO JS*/

	});
	const myModal = new bootstrap.Modal(document.getElementById('projectModal'), {
		backdrop: 'static',
		keyboard: false
	});

	// Optional: Manually trigger the modal if needed HRMGo
	document.querySelector('[data-bs-target="#projectModal"]').addEventListener('click', function (e) {
		e.preventDefault();
		myModal.show();
	});

	const myModal2 = new bootstrap.Modal(document.getElementById('projectModal2'), {
		backdrop: 'static',
		keyboard: false
	});

	// Optional: Manually trigger the modal if needed AccountGo
	document.querySelector('[data-bs-target="#projectModal2"]').addEventListener('click', function (e) {
		e.preventDefault();
		myModal2.show();
	});


	const myModal3 = new bootstrap.Modal(document.getElementById('projectModal3'), {
		backdrop: 'static',
		keyboard: false
	});

	// Optional: Manually trigger the modal if needed Dash
	document.querySelector('[data-bs-target="#projectModal3"]').addEventListener('click', function (e) {
		e.preventDefault();
		myModal3.show();
	});
	
	const myModal4 = new bootstrap.Modal(document.getElementById('projectModal4'), {
		backdrop: 'static',
		keyboard: false
	});

	// Optional: Manually trigger the modal if needed papacasino777
	document.querySelector('[data-bs-target="#projectModal4"]').addEventListener('click', function (e) {
		e.preventDefault();
		myModal4.show();
	});

	const myModal5 = new bootstrap.Modal(document.getElementById('projectModal5'), {
		backdrop: 'static',
		keyboard: false
	});

	// Optional: Manually trigger the modal if needed baskhelo
	document.querySelector('[data-bs-target="#projectModal5"]').addEventListener('click', function (e) {
		e.preventDefault();
		myModal5.show();
	});

	const myModal6 = new bootstrap.Modal(document.getElementById('projectModal6'), {
		backdrop: 'static',
		keyboard: false
	});

	// Optional: Manually trigger the modal if needed zaropay
	document.querySelector('[data-bs-target="#projectModal6"]').addEventListener('click', function (e) {
		e.preventDefault();
		myModal6.show();
	});

	const myModal7 = new bootstrap.Modal(document.getElementById('projectModal7'), {
		backdrop: 'static',
		keyboard: false
	});

	// Optional: Manually trigger the modal if needed jobly
	document.querySelector('[data-bs-target="#projectModal7"]').addEventListener('click', function (e) {
		e.preventDefault();
		myModal7.show();
	});

	const myModal8 = new bootstrap.Modal(document.getElementById('projectModal18'), {
		backdrop: 'static',
		keyboard: false
	});

	// Optional: Manually trigger the modal if needed fansclub
	document.querySelector('[data-bs-target="#projectModal18"]').addEventListener('click', function (e) {
		e.preventDefault();
		myModal8.show();
	});
	const myModal9 = new bootstrap.Modal(document.getElementById('projectModal19'), {
		backdrop: 'static',
		keyboard: false
	});

	// Optional: Manually trigger the modal if needed TaxTribe
	document.querySelector('[data-bs-target="#projectModal19"]').addEventListener('click', function (e) {
		e.preventDefault();
		myModal9.show();
	});
	const myModal10 = new bootstrap.Modal(document.getElementById('projectModal20'), {
		backdrop: 'static',
		keyboard: false
	});

	// Optional: Manually trigger the modal if needed TrackMyDoc
	document.querySelector('[data-bs-target="#projectModal20"]').addEventListener('click', function (e) {
		e.preventDefault();
		myModal10.show();
	});
	document.getElementById("year").textContent = new Date().getFullYear();
	/*START TESTIMONIAL JS*/
	$("#testimonial-slider").owlCarousel({
		items: 1,
		itemsDesktop: [1000, 1],
		itemsDesktopSmall: [979, 1],
		itemsTablet: [768, 1],
		itemsMobile: [650, 1],
		pagination: true,
		autoPlay: false
	});
	$("#testimonial-slider1").owlCarousel({
		items: 1,
		itemsDesktop: [1000, 1],
		itemsDesktopSmall: [979, 1],
		itemsTablet: [768, 1],
		itemsMobile: [650, 1],
		pagination: true,
		autoPlay: false
	});
	$("#testimonial-slider2").owlCarousel({
		items: 1,
		itemsDesktop: [1000, 1],
		itemsDesktopSmall: [979, 1],
		itemsTablet: [768, 1],
		itemsMobile: [650, 1],
		pagination: true,
		autoPlay: false
	});
	$("#testimonial-slider3").owlCarousel({
		items: 1,
		itemsDesktop: [1000, 1],
		itemsDesktopSmall: [979, 1],
		itemsTablet: [768, 1],
		itemsMobile: [650, 1],
		pagination: true,
		autoPlay: false
	});
	$("#testimonial-slider4").owlCarousel({
		items: 1,
		itemsDesktop: [1000, 1],
		itemsDesktopSmall: [979, 1],
		itemsTablet: [768, 1],
		itemsMobile: [650, 1],
		pagination: true,
		autoPlay: false
	});
	$("#testimonial-slider5").owlCarousel({
		items: 1,
		itemsDesktop: [1000, 1],
		itemsDesktopSmall: [979, 1],
		itemsTablet: [768, 1],
		itemsMobile: [650, 1],
		pagination: true,
		autoPlay: false
	});
	$("#testimonial-slider6").owlCarousel({
		items: 1,
		itemsDesktop: [1000, 1],
		itemsDesktopSmall: [979, 1],
		itemsTablet: [768, 1],
		itemsMobile: [650, 1],
		pagination: true,
		autoPlay: false
	});
	$("#testimonial-slider7").owlCarousel({
		items: 1,
		itemsDesktop: [1000, 1],
		itemsDesktopSmall: [979, 1],
		itemsTablet: [768, 1],
		itemsMobile: [650, 1],
		pagination: true,
		autoPlay: false
	});
	$("#testimonial-slider8").owlCarousel({
		items: 1,
		itemsDesktop: [1000, 1],
		itemsDesktopSmall: [979, 1],
		itemsTablet: [768, 1],
		itemsMobile: [650, 1],
		pagination: true,
		autoPlay: false
	});
	$("#testimonial-slider9").owlCarousel({
		items: 1,
		itemsDesktop: [1000, 1],
		itemsDesktopSmall: [979, 1],
		itemsTablet: [768, 1],
		itemsMobile: [650, 1],
		pagination: true,
		autoPlay: false
	});
	$("#testimonial-slider10").owlCarousel({
		items: 1,
		itemsDesktop: [1000, 1],
		itemsDesktopSmall: [979, 1],
		itemsTablet: [768, 1],
		itemsMobile: [650, 1],
		pagination: true,
		autoPlay: false
	});
	/*END TESTIMONIAL JS*/

	/* START PARALLAX JS */
	(function () {

		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

		} else {
			$(window).stellar({
				horizontalScrolling: false,
				responsive: true
			});
		}

	}());
	/* END PARALLAX JS  */

	/*START WOW ANIMATION JS*/
	new WOW().init();
	/*END WOW ANIMATION JS*/

})(jQuery);




