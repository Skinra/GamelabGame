#pragma strict

public var mHealth : float = 3.0;

function Start () {

}

function OnCollisionEnter2D(col : Collision2D){
	
	if(col.gameObject.name != 'Arbre contour noir' && col.gameObject.name != 'temple' && col.gameObject.name != 'Ennemi_Left' && col.gameObject.name != 'Ennemi_Right' && col.gameObject.name != 'Ennemi_proche'){
		if(col.gameObject.name == 'Player'){
			mHealth = mHealth - 0.5;
		}
		else{
			mHealth = mHealth - 0.95;
		}
		
		//Debug.Log('la vie de l ennemie : '+mHealth);
	}
	if(mHealth <= 0){
		Destroy(this.gameObject);
	}

}

function Update () {

}