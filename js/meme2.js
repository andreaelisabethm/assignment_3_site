$(document).ready(function(){
	
	$('#create').click(function(){
		
		var imgsrc = $('#image').val();
		switch(imgsrc){
		case 'berge':
			imgsrc ="images/berge.jpg";
			break;
		case 'meer':
			imgsrc ="images/meer.jpg";
			break;
		case 'steg':
			imgsrc ="images/steg.jpg";
			break;
		default:
			imgsrc ="images/wueste.jpg";
		} //end switch
		
		function memetext(){
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
	  }//end memetext
	  
	  //Make the magic happen and write to web page!
	  $('#canvas1').drawImage({
		  source: imgsrc,
		  x: 365,
		  y: 260,
		  load: memetext
	  }); //end draw image
	});//end click
	
}); //end ready