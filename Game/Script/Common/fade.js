#pragma strict

var timer2 : float = 0.0;
var fade : float = 1.0;

function Start () {

}

function fadeOut(){
	if(fade > 0.0){
		renderer.material.color = Color(0,0,0,fade);
		fade = fade - 0.01;
		yield WaitForSeconds(3);
	}
	else if(fade < 0.0){
		renderer.material.color = Color(0,0,0,0);
	}
}

function fadeIn(){
	if(fade < 1.0){
		renderer.material.color = Color(0,0,0,fade);
		fade = fade + 0.01;
		yield WaitForSeconds(3);
	}
	else if(fade > 1.0){
		renderer.material.color = Color(0,0,0,1);
	}
}

function Update () {
	var collision = GameObject.Find("Player");
	
	if(collision){
		var valeur = collision.GetComponent(move);
		var fadeInActivate = valeur.fadeInactivate;
		
		if(fadeInActivate){
			fadeIn();	
		}
		else{
			fadeOut();
		}
	}

}
