

// changing individual properties with code and using setInterval

//var rotationSpeed = -0.05;
var yas = 0.01;
var xas = -0.05;
var zas = 0.05;
var color;
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
	myOtherBox.object3D.rotation.x += xas;
	myOtherBox.object3D.rotation.y += yas;
	myOtherBox.object3D.rotation.z += zas;
	console.log(myOtherBox.object3D.rotation.x, myOtherBox.object3D.rotation.y, myOtherBox.object3D.rotation.z, myOtherBox.object3D.color);
}

setInterval(spin, 16); //equivalent to 60 fps