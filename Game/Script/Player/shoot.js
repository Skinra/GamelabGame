#pragma strict

function Start () {

}

function Update () {

	var player = gameObject.Find('Player');
	/*var vec = player.transform.position.x + 1.0;
	var vecy = player.transform.position.y + 1.0; */
	
	if(Input.GetKey(KeyCode.N)){
		Instantiate(Resources.Load('shoot_player'), player.transform.position ,Quaternion.identity);
		
	}
	
	
}
