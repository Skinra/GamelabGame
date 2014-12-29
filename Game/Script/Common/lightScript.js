var x : boolean = true;
var timer : float = 1.5;
var timer2 : float = 0.2;
var lighttimer : boolean = true;
var otherLight;
var otherLight2;


function Start () {
	
}


function relique(){	
	var intensity = gameObject.light.intensity;

	if(x && intensity < 1.5){
		
		timer2 = timer2 + Time.deltaTime * 0.1;
		gameObject.light.intensity = timer2;
		lighttimer = true;
	}	
	else if(intensity > 1.5 && lighttimer){
		yield WaitForSeconds(900);
		lighttimer = false;
		yield WaitForSeconds(900);
		
	}
	else if(intensity < 0.2 && lighttimer == false){
		yield WaitForSeconds(900);
		lighttimer = true;
		yield WaitForSeconds(900);
	}
	else{
		
		x = false;
		timer = timer - Time.deltaTime * 0.1;
		gameObject.light.intensity = timer;
		
		if(timer < 0.0){
			x = true;
			timer = 1.5;
			timer2 = 0.2;
		}

	}
}

function Update () {
	relique();
	
	
	otherLight = GameObject.Find('Point light 2');
	otherLight2 = GameObject.Find('Point light');
	
	if(gameObject.light.intensity > 0.9){
		if(otherLight){
			otherLight.light.intensity = 0.0;
		}
		otherLight2.light.intensity = 0.0;
	}
	else{
		if(otherLight){
			otherLight.light.intensity = 1.0;
		}
		otherLight2.light.intensity = 1.0;
	}
		
}