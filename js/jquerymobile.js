$(document).ready(function(){
	
//loader
	$( document ).on( "click", ".show-page-loading-msg", function() {
		var $this = $( this ),
			theme = $this.jqmData( "theme" ) || $.mobile.loader.prototype.options.theme,
			msgText = $this.jqmData( "msgtext" ) || $.mobile.loader.prototype.options.text,
			textVisible = $this.jqmData( "textvisible" ) || $.mobile.loader.prototype.options.textVisible,
			textonly = !!$this.jqmData( "textonly" );
		html = $this.jqmData( "html" ) || "";
		$.mobile.loading( "show", {
			text: "loading a dream for you",
			textVisible: textVisible,
			theme: theme,
			textonly: textonly,
			html: html
		});
	})
	.on( "click", ".hide-page-loading-msg", function() {
		$.mobile.loading( "hide" );
	});//end loader
	
	$('button').tap(function(submit){
		if($('#name').val().length == 0){
			$('.noname').text('Please enter your name.');
			submit.preventDefault();
		} else {
			$('.noname').text('');
			alert('Thank you for submitting the form!');
			submit.preventDefault();
		}
	}); //end tap
	$('#name').tap(function(){
		$('.noname').text('');
	}); //end tap
	
	$('.main').bind('swipeleft', function(event){
		$('#kitteh').removeClass().addClass('one');
	}); //end swipeleft
	
	$('.main').bind('swiperight', function(event){
		$('#kitteh').removeClass().addClass('two');
	}); //end swiperight
	
	$('.main').bind('taphold', function(event){
		$('#kitteh').removeClass().addClass('lots');
	}); //end taphold
	
	$(window).on('orientationchange', function(){
		if(window.orientation == 0){
			$('#kitteh').removeClass().addClass('three');
		} else {
			$('#kitteh').removeClass().addClass('puppy');
		}
	}); //end orientationchange
}); //end document ready