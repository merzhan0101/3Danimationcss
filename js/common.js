document.addEventListener('DOMContentLoaded', function() {

	//карусель
	const showSlider = new Swiper('.showcase-carousel', {
		loop: true,
		slidesPerView: 3,//кол эл
		speed: 1800,
		centeredSlides: true,//активный эл центральный
		navigation: {
			nextEl: '.showcase-navigation_next',
			prevEl: '.showcase-navigation_prev'
		}
	})


	document.querySelector('video').playbackRate = 2;



})
