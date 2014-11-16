#pragma strict

function Start () {

}

function Update () {
	
  if(transform.position.y < 1.5){
  	transform.Translate(0, Time.deltaTime / 10, 0);
  }
}