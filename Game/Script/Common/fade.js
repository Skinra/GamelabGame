#pragma strict

var timer2 : float = 0.0;
var fade : float = 1.0;

function Start () {

}

function fadeOut(){
	Debug.Log(fade);
	if(fade > 0.0){
		renderer.material.color = Color(0,0,0,fade);
		fade = fade - 0.01;
		yield WaitForSeconds(3);
	}
	else if(fade < 0.0){
		renderer.material.color = Color(0,0,0,0);
	}
}

function Update () {
	fadeOut();
}
