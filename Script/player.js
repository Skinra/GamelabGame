#pragma strict

var health : int = 1;

function Start () {

}

function OnCollisionEnter2D(){
	health = health - 1;
	
	if(health == 0){
		
	}
}

function move(){
    
    // deplacement du personnage
    
    // deplacement gauche droite 
	var inputx : float = Input.GetAxis("Horizontal");
    
    // deplacement en haut et en bas
	var inputy : float = Input.GetAxis("Vertical");
				
	var playerdist = (transform.position.y - Camera.main.transform.position.y); // calcul la position du player par rapport a la cam
	
	// limitation de la cam p le player
	var leftborder = Camera.main.ViewportToWorldPoint(Vector3(0,0,playerdist)).x; //gauche
	var rightborder = Camera.main.ViewportToWorldPoint(Vector3(1,0,playerdist)).x; //droite
	
	var topborder = Camera.main.ViewportToWorldPoint(Vector3(0,0,playerdist)).y; //haut
	var bottomborder = Camera.main.ViewportToWorldPoint(Vector3(0,1,playerdist)).y; //bas
		
	transform.position.x = Mathf.Clamp(transform.position.x, leftborder, rightborder); //math.clamp permet de delimiter
	transform.position.y = Mathf.Clamp(transform.position.y, topborder, bottomborder); //math.clamp permet de delimiter
	
	transform.Translate(Time.deltaTime * 1.05 + inputx / 7, inputy / 7, 0);
	
}

function Update () {
	move();
}
