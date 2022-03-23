
var canvas = new fabric.canvas('myCanvas');

ball_y = 5;
ball_x = 5;
hole_y = 250;
hole_x = 250



block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png",function(Img) {
	hole_obj = Img;
	hole_obj.scaleToWidth(50);
	hole_obj.scaleToHeight(50);
	hole_obj.set({
		top : hole_y,
		left : hole_x
	});
	canvas.add(hole_obj);
});
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png",function(Img) {
		ball_obj = Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
			top : ball_y,
			left : ball_x
		});
		canvas.add(ball_obj);
	});
}


window.addEventListener("keydown", my_keydown);

{
	function my_keydown(e)
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if ((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove(ball_object);
		document.getElementById("hd3").innerHTML = "You have hit the goal and you won it !!!!!Congratulations Golf player !!!!!";
		document.getElementById("myCanvas").style.borderColor = "red";}
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
	    if(ball_y <=0)
		{
          ball_y = ball_y - block_image_height;
		  console.log("block image height = "+block_image_height);
		  console.log("When up arrow is pressed, X = "+ block_x+ ",Y ="+block_y);  			
		  canvas.remove(ball_obj)
		  load_img()
		}
	}

	function down()
	{
		if(ball_y >=450)
		{
			ball_y = ball_y + block_image_height;
			console.log("block image height = "+block_image_height);
			console.log("When down arrow is pressed, X = "+ block_x+ ",Y ="+block_y);  			
			canvas.remove(ball_obj)
			load_img()
		}
	}

	function left()
	{
		if(ball_x >=5)
		{
			ball_x = ball_x - block_image_height;
		  console.log("block image height = "+block_image_height);
		  console.log("When left arrow is pressed, X = "+ block_x+ ",Y ="+block_y);  			
		  canvas.remove(ball_obj)
		  load_img()
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_x = ball_x + block_image_height;
		  console.log("block image height = "+block_image_height);
		  console.log("When up arrow is pressed, X = "+ block_x+ ",Y ="+block_y);  			
		  canvas.remove(ball_obj)
		  load_img()
		}
	}
	
}


