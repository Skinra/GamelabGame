#pragma strict

 var target : GameObject; //the enemy's target
 var moveSpeed = 3; //move speed
 var rotationSpeed = 3; //speed of turning
 var range : float=10f;
 var range2 : float=10f;
 var stop : float=0;
 var myTransform : Transform; //current transform data of this enemy
 

 function Awake()
 {
     myTransform = transform; //cache transform data for easy access/preformance
 }
  
 function Start()
 {
      target = GameObject.Find("Player");
 }
  
 function Update () {
 
 	var timeY : float = Time.deltaTime;
	var targetClamp = Mathf.Round(target.transform.position.x * 100) / 100;
	var playerClamp = Mathf.Round(this.transform.position.x * 100) / 100;
	
	Debug.Log(targetClamp);
 	// textureimg
 	
 	//var haut = GameObject.Find("Hautennemi");
	//var bas = GameObject.Find("Basennemi");
	var droite = GameObject.Find("Droiteennemi");
	var gauche = GameObject.Find("Gaucheennemi");
 
 	
     //rotate to look at the player
    var playerdist = (transform.position.y - Camera.main.transform.position.y); // calcul la position du player par rapport à la caméra
	
	// limitation de la cam p le player
	var leftborder = Camera.main.ViewportToWorldPoint(Vector3(0,0,playerdist)).x; //gauche
	var rightborder = Camera.main.ViewportToWorldPoint(Vector3(1,0,playerdist)).x; //droite
	
	var topborder = Camera.main.ViewportToWorldPoint(Vector3(0,0,playerdist)).y; //haut
	var bottomborder = Camera.main.ViewportToWorldPoint(Vector3(0,1,playerdist)).y; //bas
		
	transform.position.x = Mathf.Clamp(transform.position.x, leftborder, rightborder); //math.clamp permet de delimiter
	transform.position.y = Mathf.Clamp(transform.position.y, topborder, bottomborder); //math.clamp permet de delimiter
	
	
	if(targetClamp < playerClamp){
		//this.transform.Translate(,0,0);
		if(target.transform.position.y < this.transform.position.y){
			this.transform.Translate( -Time.deltaTime,-timeY * 0.5,0);
		}
		else if(target.transform.position.y > this.transform.position.y){
			this.transform.Translate( -Time.deltaTime,timeY * 0.5,0);
		}
		
		//haut.renderer.enabled = false;
		gauche.renderer.enabled = true;
		droite.renderer.enabled = false;
		//bas.renderer.enabled = false;
	}
	else if(targetClamp > playerClamp){
		//this.transform.Translate(,0,0);
		if(target.transform.position.y < this.transform.position.y){
			this.transform.Translate( Time.deltaTime,-timeY * 0.5,0);
		}
		else if(target.transform.position.y > this.transform.position.y){
			this.transform.Translate( Time.deltaTime,timeY * 0.5,0);
		}
		
		//haut.renderer.enabled = false;
		gauche.renderer.enabled = false;
		droite.renderer.enabled = true;
		//bas.renderer.enabled = false;
	}
	else{
		this.transform.Translate(0,0,0);
	}
 }
