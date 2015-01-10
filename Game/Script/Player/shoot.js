#pragma strict
var firerate : float = 0.5;
var nextFire : float = 1.0;

function Start () {
}
function Update () {
	var player = gameObject.Find('Player');
	/*var vec = player.transform.position.x + 1.0;
	var vecy = player.transform.position.y + 1.0; */
	
	if(Input.GetKey(KeyCode.N)){
		if(Time.time / 2 > nextFire){
		
		nextFire = Time.time / 2 + 0.5 * firerate;
		
		var bullet : GameObject = Instantiate(Resources.Load('shoot_player'), player.transform.position ,player.transform.rotation);
		//bullet.rigidbody2D.AddForce(1,1);
		
		var script = player.GetComponent(move);
		var post = script.pos;
		
		if(post == 0){
			bullet.rigidbody2D.AddForce(Vector3.down * 100);
		}
		else if(post == 1){
			bullet.rigidbody2D.AddForce(Vector3.left * 100);
		}
		else if(post == 2){
			bullet.rigidbody2D.AddForce(Vector3.right * 100);
		}
		else if(post == 3){
			bullet.rigidbody2D.AddForce(Vector3.up * 100);
		}
		}
	}
	
	
}
