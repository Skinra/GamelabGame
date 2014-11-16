#pragma strict



var x : boolean = true;
var timer : float = 0.8;
var timer2 : float = 0.0;
function Start () {
	
}

function relique(){

		
	var intensity = gameObject.light.intensity;
	
	if(x && intensity < 0.8){
		timer2 = timer2 + Time.deltaTime;
		gameObject.light.intensity = timer2;
	}	
	else{
		x = false;
		timer = timer - Time.deltaTime;
		gameObject.light.intensity = timer;
		
		if(timer < 0.0){
			x = true;
			timer = 0.8;
			timer2 = 0.0;
		}
	}
}

function Update () {
	relique();
}