#pragma strict

public var mHealth  : float;
private var loop : int;
var randomNumber : float;

function start(){
	mHealth = 3.0;
	loop = 0;
}

function OnTriggerEnter2D(coll : Collider2D){
	Debug.Log(coll.gameObject.name);
	var coeur = new Vector2(this.transform.position.x + 0.1, this.transform.position.y);
	var mercure = new Vector2(this.transform.position.x - 0.1, this.transform.position.y);
	Debug.Log(coll.gameObject.name);
	
	if(coll.gameObject.name == 'shoot_player(Clone)'){
		mHealth = mHealth - 1.0;
	}
	
	else if(coll.gameObject.name == 'Attaquezone(Clone)'){
		mHealth = mHealth - 2.0;
	}
	
	else if(coll.gameObject.name == 'Lazer5(Clone)'){
		mHealth = mHealth - 3.0;
	}
	
	else if(coll.gameObject.name == 'explosion3(Clone)'){
		mHealth = mHealth - 3.0;
	}
	
	if(mHealth < 0.0 || mHealth == 0){

		randomNumber = Random.Range(0.0,2.0);
		randomNumber = Mathf.Round(randomNumber * 1) / 1;
		
		// instancier que une fois
		if(loop == 0){
			if(this.gameObject.name == 'Ennemi_proche'){
				Instantiate(Resources.Load('Coeur plein'), coeur ,Quaternion.identity);
			}
			else if(randomNumber == 1.0){
				Instantiate(Resources.Load('Pièce Mercure'), mercure, Quaternion.identity);
			}
		}
		Destroy(this.gameObject);
	}
}

