var canvas = document.getElementById("slate");
var context = canvas.getContext("2d");
context.fillStyle = "red";
var circle = document.getElementById("circle");
var animCircle = function(){
    end();
    var radius = 0;
    var rate = 1;
    var makeCircle = function(){
	     clear();
	      context.beginPath();
	       context.arc(canvas.width/2, canvas.height/2, radius, 0, 2*Math.PI)
	        context.stroke();
	         context.fill();
	          radius += rate;
	           if(radius == canvas.width/2) rate = -1;
	            if(radius == 0) rate = 1;
                requestID = window.requestAnimationFrame(makeCircle);
    }
    makeCircle();
}

var end = function(){
    window.cancelAnimationFrame(requestID);
}

var dvd = document.getElementById("dvd");
var animateDvd = function(){
    end();
     var xPos = 250;
      var yPos = 250;
        var xVel = -3 + Math.floor(Math.random() * 6);
          var yVel = -3 + Math.floor(Math.random() * 6);

    var drawDvd = function(){
	     clear();
	      context.arc(xPos, yPos, 20, 0, 2*Math.PI)
	       context.stroke();
	        context.fill();
	         xPos += xVel;
	          yPos += yVel;
	           if(yPos <= 20 || yPos >= 480) yVel = -1*yVel
	            if(xPos <= 20 || xPos >= 480) xVel = -1*xVel
	             requestID = window.requestAnimationFrame(drawDvd);
    }

    drawDvd();
}

var stop = document.getElementById("stop");
var requestID = 0;

var clear = function(){
    context.clearRect(0,0,500,500);
      context.beginPath();
}

circle.addEventListener("click", animCircle);
dvd.addEventListener("click", animateDvd);
stop.addEventListener("click", end);
