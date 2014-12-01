#pragma strict
var health : int = 3;


function Start () {
	
	
}

function OnCollisionEnter2D(){
	health = health - 1;

	if(health == 0){
		Destroy(this.gameObject);
	}
}

function move(){
    // deplacement gauche droite 
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

function player(){

	// a optimiser a la fin.. use tag instead of find. 

	var haut = GameObject.Find("Haut");
	var bas = GameObject.Find("Bas");
	var droite = GameObject.Find("Droite");
	var gauche = GameObject.Find("Gauche");
	
	if(Input.GetKeyDown(KeyCode.DownArrow)){
		haut.renderer.enabled = false;
		gauche.renderer.enabled = false;
		droite.renderer.enabled = false;
		bas.renderer.enabled = true;
	}
	else if(Input.GetKeyDown(KeyCode.LeftArrow)){
		haut.renderer.enabled = false;
		gauche.renderer.enabled = true;
		droite.renderer.enabled = false;
		bas.renderer.enabled = false;
	}
	else if(Input.GetKeyDown(KeyCode.RightArrow)){
		haut.renderer.enabled = false;
		gauche.renderer.enabled = false;
		droite.renderer.enabled = true;
		bas.renderer.enabled = false;
	}
	else if(Input.GetKeyDown(KeyCode.UpArrow)){
		haut.renderer.enabled = true;
		gauche.renderer.enabled = false;
		droite.renderer.enabled = false;
		bas.renderer.enabled = false;
	}
}


function Update () {
	move();
	player();

}