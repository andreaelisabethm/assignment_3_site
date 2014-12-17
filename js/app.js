$(document).ready(function(){
	
	// Draw rainbow
	$('#button1').click(function(){
		$('#canvas').drawArc({
		  strokeStyle: '#86008C',
		  strokeWidth: 10,
		  x: 170, y: 350,
		  radius: 150
	  	})
	  	.drawArc({
	  	  strokeStyle: '#0200C4',
	  	  strokeWidth: 10,
	  	  x: 170, y: 350,
	  	  radius: 160
	  	})
		.drawArc({
		  strokeStyle: '#00EBED',
		  strokeWidth: 10,
		  x: 170, y: 350,
		  radius: 170	
		})
		.drawArc({
		  strokeStyle: '#00DF0D',
		  strokeWidth: 10,
		  x: 170, y: 350,
		  radius: 180
		})
		.drawArc({
		  strokeStyle: '#FFFE18',
		  strokeWidth: 10,
		  x: 170, y: 350,
		  radius: 190
		})
		.drawArc({
		  strokeStyle: '#FF010A',
		  strokeWidth: 10,
		  x: 170, y: 350,
		  radius: 200
		}); //end draw rainbow
	}); //end rainbow click
	
	$('#clear').click(function(){
		$('#canvas').clearCanvas();
	}); //end click clear
	
	//draw raindrop
	$('#button2').click(function(){
		$('#canvas').drawArc({
			layer: true,
			name: 'circle',
			fillStyle: '#00EBED',
			x: 120,
			y: 100,
			radius: 30
		})
		.drawSlice({
			layer: true,
			name: 'slice',
			fillStyle: '#00EBED',
			x: 120, 
			y: 40,
			radius: 50,
			// start and end angles in degrees
			start: 150, end: 210	
		}); //end draw raindrop
	
		//animate the raindrop
		$('#canvas').animateLayer('circle', {
			x: 120,
			y: 320
		}, 2500);
	
		$('#canvas').animateLayer('slice', {
			x: 120,
			y: 260
		}, 2500);
	}); // end raindrop click
	
	//draw sun
	$('#button3').click(function(){
		$('#canvas').drawArc({
			layer: true,
			name: 'kreis',
			fillStyle: '#FFFE18',
			x: 120,
			y: 400,
			radius: 80
		})
		.drawSlice({
			layer: true,
			name: 'strahl1',
			fillStyle: '#FFFE18',
			x: 120, 
			y: 350,
			radius: 60,
			// start and end angles in degrees
			start: 150, end: 210
		})
		.drawSlice({
			layer: true,
			name: 'strahl2',
			fillStyle: '#FFFE18',
			x: 150, 
			y: 400,
			radius: 60,
			// start and end angles in degrees
			start: 200, end: 260
		})
		.drawSlice({
			layer: true,
			name: 'strahl3',
			fillStyle: '#FFFE18',
			x: 150, 
			y: 400,
			radius: 60,
			// start and end angles in degrees
			start: 100, end: 160	
		}); //end draw sun
	
		//animate the sun
		$('#canvas').animateLayer('kreis', {
			x: 120,
			y: 320
		}, 2500);
	
		$('#canvas').animateLayer('strahl1', {
			x: 120,
			y: 200
		}, 2500);
		
		$('#canvas').animateLayer('strahl2', {
			x: 200,
			y: 240
		}, 2500);
		
		$('#canvas').animateLayer('strahl3', {
			x: 40,
			y: 240
		}, 2500);
	}); // end sun click
	
	//draw text
	$('#button4').click(function(){
		$('#canvas').drawText({
			layer: true,
			fillStyle: '#DD6A61',
			x: 150,
			y: 150,
			fontSize: '10px',
			fontFamily: 'Verdana, sans-serif',
			text: 'Be happy!',
			click: function() {
			    // Click the text to make it grow
			    $(this).animateLayer(0, {
			      scale: '+=0.75',
			    }, 250);
			  }
		}); //end draw text
	}); //end text click
	
}); //end ready