#pragma strict


public var health : float; 
public var money : int;
public var fadeInactivate : boolean;
public var position;
var vector;
var downstair : float;

function Start(){
	
	var lastsceneload = PlayerPrefs.GetString("loadLevel");
	health = 5.0;
	money = 0;
	fadeInactivate = false;
	Debug.Log(lastsceneload);
	Debug.Log(Application.loadedLevelName);

		
	switch (lastsceneload){
		case "laboratoire" :
			transform.position = Vector3(-4.46, 5.66, 2.45);
		break;
		case "level1":
			if(Application.loadedLevelName == "Level1_c"){
				transform.position = Vector3(0.035, 1.732, 2.45);
			}
			else{
				transform.position = Vector3(-2.43, -0.57, 0);
			}
		break;
		case "level1_c":
			Debug.Log("here");
			if(Application.loadedLevelName == "level1_d"){
				transform.position = Vector3(-3.68, -2.32, 2.45);
			}
			else if(Application.loadedLevelName == "level1"){
				transform.position = Vector3(1.686393, -0.674112, 2.45);
			}
		break;
		case "level1_d" :
			transform.position = Vector3(1.83, 0.12, 2.45);
		break;
	}
	
	Debug.Log(transform.position);
	
	// set new spawn position when spike come from the boss's place
}

function OnCollisionEnter2D(col : Collision2D){
	var player = GameObject.Find("Player");
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
	
	// test
	
	var player = GameObject.Find("Player");
	position = player.GetComponent(move).pos;
	
	Debug.Log(position);
	
	downstair += Time.deltaTime * 0.1;
	
	if(coll.gameObject.name != "Chemin" && coll.gameObject.name && "Coeur plein(Clone)" && coll.gameObject.name != "Pièce Mercure(Clone)" && coll.gameObject
	.name != "teleporteur_level"){
		 Debug.Log("ha");
		 var lightscript = GameObject.Find("Directional light");
		 // get the value
		 var timer = lightscript.GetComponent(lightScript).timer2;
		 var x = lightscript.GetComponent(lightScript).x;
		 var intensity = lightscript.GetComponent(lightScript).intensity;
				 
		 PlayerPrefs.SetInt("timer", timer);
		 PlayerPrefs.SetInt("intensité", intensity);
		 PlayerPrefsX.SetBool("xvalue", x);
	}

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
			PlayerPrefs.SetString("loadLevel", "level1");
			Application.LoadLevel("laboratoire");
		break;
		case "gradientTop":
			fadeInactivate = true;
			yield WaitForSeconds(2);
			PlayerPrefs.SetString("loadLevel", "level1_c");
			Application.LoadLevel("Level1");	
		break;
		case "teleporteur_level":
			fadeInactivate = true;
			yield WaitForSeconds(2);
			PlayerPrefs.SetString("loadLevel", "laboratoire");
			Application.LoadLevel("Level1");
		break;
		case "gradient" :
			fadeInactivate = true;
			yield WaitForSeconds(2);
			PlayerPrefs.SetString("loadLevel", "level1");
		    Application.LoadLevel("Level1_c");
		break;
		case "gradientD":
			fadeInactivate = true;
			yield WaitForSeconds(2);
			PlayerPrefs.SetString("loadLevel", "level1_d");
		    Application.LoadLevel("Level1_c");
		break;
		case "gradientRight":
			fadeInactivate = true;
			yield WaitForSeconds(2);
			PlayerPrefs.SetString("loadLevel", "level1_c");
		    Application.LoadLevel("Level1_d");
		break;
		case "Chemin" :
			
			if(position == 0 || position == 3){
				//var j = Mathf.Lerp(transform.position.x, transform.position.x + 0.01, downstair);
				transform.position.x += 0.02;
				}
				
			else{
				transform.position.y += 0.02;
			}
		break;
		case "red_layer":
			
			if(position == 1){
				transform.position.y += 0.02;
			}
			else if(position == 2){
				transform.position.y -= 0.02;
			}
		break;
	
	}
	
	
	
	
}


