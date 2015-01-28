#pragma strict
public var health : float; 
private var loop : int;
public var pos : int;
public var money : int;
public var fadeInactivate : boolean;



function start(){
	health  = 5.0;
	loop = 0;
	money = 0;
	fadeInactivate = false;
}

private var move_or_not : boolean = true;

function OnCollisionEnter2D(col : Collision2D){

	Debug.Log(col.gameObject.name);
		// ajouter les autres monstres...
	if(col.gameObject.name == 'Ennemi_Left' || col.gameObject.name == 'Ennemi_Right'){
		health--;
		blink();
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
			//Application.LoadLevel("Level1");
		break;
		case "Chemin" :
			if(pos == 0 || pos == 3){
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

function move(){
    // deplacement gauche droite 
    
    var inputx : float = Input.GetAxis("Horizontal");
	var inputy : float = Input.GetAxis("Vertical");
	
	if(inputx > 0){
		inputx = 0.001;
	}
	else if(inputx < 0){
		inputx = -0.001;
	}
	else{
		inputx = 0;
	}
	
	if(inputy > 0){
		inputy = 0.001;
	}
	else if(inputy < 0){
		inputy = -0.001;
	}
	else{
		inputy = 0;
	}

    if(move_or_not){
    		
			var playerdist = (this.transform.position.y - Camera.main.transform.position.y); // calcul la position du player par rapport à la caméra
			
			// limitation de la cam p le player
			var leftborder = Camera.main.ViewportToWorldPoint(Vector3(0,0,playerdist)).x; //gauche
			var rightborder = Camera.main.ViewportToWorldPoint(Vector3(1,0,playerdist)).x; //droite
			
			var topborder = Camera.main.ViewportToWorldPoint(Vector3(0,0,playerdist)).y; //haut
			var bottomborder = Camera.main.ViewportToWorldPoint(Vector3(0,1,playerdist)).y; //bas
				
			transform.position.x = Mathf.Clamp(transform.position.x, leftborder, rightborder); //math.clamp permet de delimiter
			transform.position.y = Mathf.Clamp(transform.position.y, topborder, bottomborder); //math.clamp permet de delimiter
			
			//transform.Translate(inputx / 40, inputy / 40, 0);	
			
			if(inputx != 0 || inputy != 0){
				this.gameObject.rigidbody2D.AddForce(Vector2(inputx, inputy));
			}
			else{
				this.gameObject.rigidbody2D.velocity = Vector2.zero;
				//this.gameObject.rigidbody2D.angularVelocity = Vector2.zero;
			}
			
    }
}

function player(){

	// a optimiser a la fin.. use tag instead of find. 

	if(move_or_not){
		var haut = GameObject.Find("Haut");
		var bas = GameObject.Find("Bas");
		var droite = GameObject.Find("Droite");
		var gauche = GameObject.Find("Gauche");

		
		if(Input.GetKey(KeyCode.DownArrow)){
			haut.renderer.enabled = false;
			gauche.renderer.enabled = false;
			droite.renderer.enabled = false;
			bas.renderer.enabled = true;
			bas.GetComponent(Animator).enabled = true;
			pos = 0;
		}
		else if(Input.GetKey(KeyCode.LeftArrow)){
			haut.renderer.enabled = false;
			gauche.renderer.enabled = true;
			droite.renderer.enabled = false;
			bas.renderer.enabled = false;
			gauche.GetComponent(Animator).enabled = true;
			pos = 1;
		}
		else if(Input.GetKey(KeyCode.RightArrow)){
			haut.renderer.enabled = false;
			gauche.renderer.enabled = false;
			droite.renderer.enabled = true;
			bas.renderer.enabled = false;
			droite.GetComponent(Animator).enabled = true;
			pos = 2;
		}
		else if(Input.GetKey(KeyCode.UpArrow)){
			haut.renderer.enabled = true;
			gauche.renderer.enabled = false;
			droite.renderer.enabled = false;
			bas.renderer.enabled = false;
			haut.GetComponent(Animator).enabled = true;
			
			pos = 3;
		}
		else{
			haut.GetComponent(Animator).enabled = false;
			gauche.GetComponent(Animator).enabled = false;
			droite.GetComponent(Animator).enabled = false;
			bas.GetComponent(Animator).enabled = false;
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

 
function FixedUpdate()
   {
         if(rigidbody2D.velocity.magnitude > 1)
         {	
         		rigidbody2D.velocity = rigidbody2D.velocity.normalized * 1;   
         }
   }