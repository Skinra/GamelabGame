#pragma strict
public var health : float; 
private var loop : int;
private var pos : int;
public var money : int;


function start(){
	health  = 5.0;
	loop = 0;
	money = 0;
}

private var move_or_not : boolean = true;

function OnCollisionEnter2D(col : Collision2D){
	
	if(col.gameObject.name != 'Arbre contour noir' && col.gameObject.name != 'temple'){
		if(col.gameObject.name == 'Ennemi_left'){
			health = health - 0.25;
		}
		else{
			health = health - 1.0;
		}
		
		blink();
	}
	if(health <= 0){
		Destroy(this.gameObject);
	}
	
	return health;
}

function OnTriggerEnter2D(coll : Collider2D){
	
	if(coll.gameObject.name == 'Coeur plein(Clone)'){
		health = health + 0.5;
		Destroy(coll.gameObject);
		Debug.Log(health);
	}
	else if(coll.gameObject.name == 'Pièce Mercure(Clone)'){
		money = money + 10;
		Destroy(coll.gameObject);
		Debug.Log(money);
	}
}

function move(){
    // deplacement gauche droite 
    
    if(move_or_not){
    		var inputx : float = Input.GetAxis("Horizontal");
    
		    // deplacement en haut et en bas
			var inputy : float = Input.GetAxis("Vertical");
						
			var playerdist = (transform.position.y - Camera.main.transform.position.y); // calcul la position du player par rapport à la caméra
			
			// limitation de la cam p le player
			var leftborder = Camera.main.ViewportToWorldPoint(Vector3(0,0,playerdist)).x; //gauche
			var rightborder = Camera.main.ViewportToWorldPoint(Vector3(1,0,playerdist)).x; //droite
			
			var topborder = Camera.main.ViewportToWorldPoint(Vector3(0,0,playerdist)).y; //haut
			var bottomborder = Camera.main.ViewportToWorldPoint(Vector3(0,1,playerdist)).y; //bas
				
			transform.position.x = Mathf.Clamp(transform.position.x, leftborder, rightborder); //math.clamp permet de delimiter
			transform.position.y = Mathf.Clamp(transform.position.y, topborder, bottomborder); //math.clamp permet de delimiter
			

			transform.Translate(inputx / 40, inputy / 40, 0);	
    }

}

function player(){

	// a optimiser a la fin.. use tag instead of find. 

	if(move_or_not){
		var haut = GameObject.Find("Haut");
		var bas = GameObject.Find("Bas");
		var droite = GameObject.Find("Droite");
		var gauche = GameObject.Find("Gauche");

		
		if(Input.GetKeyDown(KeyCode.DownArrow)){
			haut.renderer.enabled = false;
			gauche.renderer.enabled = false;
			droite.renderer.enabled = false;
			bas.renderer.enabled = true;
			pos = 0;
		}
		else if(Input.GetKeyDown(KeyCode.LeftArrow)){
			haut.renderer.enabled = false;
			gauche.renderer.enabled = true;
			droite.renderer.enabled = false;
			bas.renderer.enabled = false;
			pos = 1;
		}
		else if(Input.GetKeyDown(KeyCode.RightArrow)){
			haut.renderer.enabled = false;
			gauche.renderer.enabled = false;
			droite.renderer.enabled = true;
			bas.renderer.enabled = false;
			pos = 2;
		}
		else if(Input.GetKeyDown(KeyCode.UpArrow)){
			haut.renderer.enabled = true;
			gauche.renderer.enabled = false;
			droite.renderer.enabled = false;
			bas.renderer.enabled = false;
			pos = 3;
		}
	}
	
}

function blink(){
	// disable moving
	move_or_not = false;
	
	var haut = GameObject.Find("Haut");
	var bas = GameObject.Find("Bas");
	var droite = GameObject.Find("Droite");
	var gauche = GameObject.Find("Gauche");
	
	var tab = [bas, gauche, droite, haut];
	
	tab[pos].renderer.enabled = false;
	yield WaitForSeconds(0.25);
	tab[pos].renderer.enabled = true;
	yield WaitForSeconds(0.25);
	tab[pos].renderer.enabled = false;
	yield WaitForSeconds(0.25);
	tab[pos].renderer.enabled = true;
	yield WaitForSeconds(0.25);
	tab[pos].renderer.enabled = false;
	yield WaitForSeconds(0.25);
	tab[pos].renderer.enabled = true;

	// enable moving
	move_or_not = true;
}

function Update () {
	move();
	player();

}