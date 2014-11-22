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
     //rotate to look at the player
    var playerdist = (transform.position.y - Camera.main.transform.position.y); // calcul la position du player par rapport à la caméra
	
	// limitation de la cam p le player
	var leftborder = Camera.main.ViewportToWorldPoint(Vector3(0,0,playerdist)).x; //gauche
	var rightborder = Camera.main.ViewportToWorldPoint(Vector3(1,0,playerdist)).x; //droite
	
	var topborder = Camera.main.ViewportToWorldPoint(Vector3(0,0,playerdist)).y; //haut
	var bottomborder = Camera.main.ViewportToWorldPoint(Vector3(0,1,playerdist)).y; //bas
		
	transform.position.x = Mathf.Clamp(transform.position.x, leftborder, rightborder); //math.clamp permet de delimiter
	transform.position.y = Mathf.Clamp(transform.position.y, topborder, bottomborder); //math.clamp permet de delimiter
	
	Debug.Log(target.transform.position.x);
	Debug.Log(this.transform.position.x);
	
	if(target.transform.position.x < this.transform.position.x){
		//this.transform.Translate(,0,0);
		if(target.transform.position.y < this.transform.position.y){
			this.transform.Translate( -Time.deltaTime,-Time.deltaTime,0);
		}
		else if(target.transform.position.y > this.transform.position.y){
			this.transform.Translate( -Time.deltaTime,Time.deltaTime,0);
		}
	}
	else if(target.transform.position.x > this.transform.position.x){
		//this.transform.Translate(,0,0);
		if(target.transform.position.y < this.transform.position.y){
			this.transform.Translate( Time.deltaTime,-Time.deltaTime,0);
		}
		else if(target.transform.position.y > this.transform.position.y){
			this.transform.Translate( Time.deltaTime,Time.deltaTime,0);
		}
	}
	else{
		this.transform.Translate(0,0,0);
	}
	
	
	
     
  
 }
