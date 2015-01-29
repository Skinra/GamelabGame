#pragma strict


public var health : float; 
public var money : int;
public var fadeInactivate : boolean;
public var position;

function Start(){
	health = 5.0;
	money = 0;
	fadeInactivate = false;
}

function OnCollisionEnter2D(col : Collision2D){

	var player = GameObject.Find("Player");
	position = player.GetComponent(move).pos;

	Debug.Log(col.gameObject.name);
		// ajouter les autres monstres...
	if(col.gameObject.name == 'Ennemi_Left' || col.gameObject.name == 'Ennemi_Right'){
		health--;
		player.GetComponent(move).blink();
	}
	else if(col.gameObject.name == "cuve"){
		PlayerPrefs.SetInt("active", 1);
		var anim = GameObject.Find("cuve");
		anim.GetComponent(Animator).enabled = true;
		anim.GetComponent(Animator).speed =1 ;
	}
	else{

	}
	if(health <= 0){
		Destroy(this.gameObject);
		
	}
}

function OnTriggerEnter2D(coll : Collider2D){

	Debug.Log(coll.gameObject.name);

	switch (coll.gameObject.name){
		
		case "Coeur plein(Clone)" :
			health = health + 0.5;
			Destroy(coll.gameObject);
		break;
		case "Pièce Mercure(Clone)" :
			money = money + 10;
			Destroy(coll.gameObject);
		break;
		case "teleporteur_lab" :
			fadeInactivate = true;
			yield WaitForSeconds(2);
			Application.LoadLevel("Laboratoire");
		break;
		case "teleporteur_level":
			fadeInactivate = true;
			yield WaitForSeconds(2);
			Application.LoadLevel("Level1");
		break;
		case "gradient" :
			fadeInactivate = true;
			yield WaitForSeconds(2);
		    Application.LoadLevel("Level1_c");
		break;
		case "Chemin" :
			if(position == 0 || position == 3){
				var j = Mathf.Lerp(transform.position.x, transform.position.x + 0.01, 2.0);
				Debug.Log(j);
				transform.position.x += 0.02;
				}
				
			else{
				transform.position.y += 0.02;
			}
			
		break;

	}
}
