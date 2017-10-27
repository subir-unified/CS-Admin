$(window).on('load', function(){
	$('body').addClass('loaded');
	setTimeout(function(){
		$('.log-content').addClass('visible-elem');
	},1300);
});

$(document).ready(function(){
	AOS.init();

	$('.refine-link').on('click', function(){
		$(this).parents('.refine-wrap').toggleClass('active');
			var nextContent = $(this).next();
			$(nextContent).slideToggle(600, function() {
			setTimeout(
			pscroll('refine-list-wrap-inr'),1000)
		});
	});

	$('.refine-wrap').on('click', function(event){
		event.stopPropagation();
	});

	$(document).on('click', function(){
	  $('.refine-list-wrap').slideUp(600);
	  $('.refine-wrap').removeClass('active');
	});

	$('.topSearch-group .search-btn').on('click', function(){
		$('.topSearch-group').toggleClass('active');
	});

	$('.sidebar-tgl-bar').on('click', function(){
		$('.sidebar').toggleClass('off');
		$('.main-wrapper').toggleClass('full');
	});

	$('.ntfDropdown').on('show.bs.dropdown', function () {
	  setTimeout(function(){pscroll('dropdown-menu-list-wrap');}, 200);
	});

	  $('.msgDropdown').on('show.bs.dropdown', function () {
	  setTimeout(function(){pscroll('msgDropdown-pScroll')},200);
	});

	  $('.caldDropdown').on('show.bs.dropdown', function () {
	  setTimeout(function(){pscroll('caldDropdown-pScroll')},200);
	});

	$('.company-check').change(function () {                
		$('#company-info').toggle(this.checked);
	}).change();

});


(function() {
	// trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
	if (!String.prototype.trim) {
		(function() {
			// Make sure we trim BOM and NBSP
			var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
			String.prototype.trim = function() {
				return this.replace(rtrim, '');
			};
		})();
	}

	[].slice.call( document.querySelectorAll( 'input.input__field' ) ).forEach( function( inputEl ) {
		// in case the input is already filled..
		if( inputEl.value.trim() !== '' ) {
			classie.add( inputEl.parentNode, 'input--filled' );
		}

		// events:
		inputEl.addEventListener( 'focus', onInputFocus );
		inputEl.addEventListener( 'blur', onInputBlur );
	} );

	function onInputFocus( ev ) {
		classie.add( ev.target.parentNode, 'input--filled' );
	}

	function onInputBlur( ev ) {
		if( ev.target.value.trim() === '' ) {
			classie.remove( ev.target.parentNode, 'input--filled' );
		}
	}
})();


function pscroll(x){
	  const ps = new PerfectScrollbar('.'+x, {
	  wheelSpeed: 2,
	  wheelPropagation: true,
	  minScrollbarLength: 20
	});
}


function heightCal(){
	var wHeight = $(window).height();
	var calHeight = wHeight - 100;
	$('.refine-list-wrap').css('height', calHeight);
}
$(document).ready(function(){ 
	heightCal();
});
$(window).resize(function(){
	heightCal();
});






