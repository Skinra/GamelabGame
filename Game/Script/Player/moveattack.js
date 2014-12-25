#pragma strict



function Start () {
	 Destroy(gameObject, 4);
}

function OnTriggerEnter2D(coll : Collider2D){
		
	if(coll.gameObject.name != 'Arbre contour noir' && coll.gameObject.name != 'temple' && coll.gameObject.name != 'Player'){
		Destroy(this.gameObject);
	}
	else if(coll.gameObject.name != 'Player'){
		Destroy(this.gameObject);
	}
}


function Update (){
	
	transform.Translate(Time.deltaTime, 0 , 0);
	
}