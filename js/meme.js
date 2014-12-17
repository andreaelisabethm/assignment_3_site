$(document).ready(function(){
	
	$('#image').change(function(){
		if($('#image').val() == 'berge'){
			$('#canvas1').drawImage({
				source: 'images/berge.jpg',
				x: 365,
				y: 260
			});
		} else if($('#image').val() == 'meer'){
			$('#canvas1').drawImage({
				source: 'images/meer.jpg',
				x: 365,
				y: 260
			});
		} else if($('#image').val() == 'steg'){
			$('#canvas1').drawImage({
				source: 'images/steg.jpg',
				x: 365,
				y: 260
			});
		} else if($('#image').val() == 'wueste'){
			$('#canvas1').drawImage({
				source: 'images/wueste.jpg',
				x: 365,
				y: 260
			});
		} else {
			$('#canvas1').drawImage({
				source: 'images/wueste.jpg',
				x: 365,
				y: 260
			});
		} //end if
	}); //end change
	
	$('#create').click(function(){
		var line1 = $('#line1').val().toUpperCase();
		var line2 = $('#line2').val().toUpperCase();
		
		
		$('#canvas1').drawText({
			fillStyle: '#fff',
			strokeStyle: '#000',
			strokeWidth: 3,
			x:365,
			y: 50,
			fontSize: '5em',
			fontFamily: 'Impact, sans-serif',
			text: line1
		})
		.drawText({
			fillStyle: '#fff',
			strokeStyle: '#000',
			strokeWidth: 3,
			x:365,
			y: 470,
			fontSize: '5em',
			fontFamily: 'Impact, sans-serif',
			text: line2
		}); //end draw text
	});//end click
	
}); //end ready