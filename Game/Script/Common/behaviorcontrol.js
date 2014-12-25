#pragma strict

var boolfor1 : boolean = false;
var boolfor2 : boolean = false;
var boolfor3 : boolean = false;
var boolfor4 : boolean = false;
var boolfor5 : boolean = false;
private var moneyValue : int;
var customGuiStyle = new GUIStyle();
var textStyle = new GUIStyle();

// value to pos the health element.


function Start () {
	textStyle.font = Resources.Load("small_font") as Font;
	textStyle.normal.textColor = Color.white;
	textStyle.fontSize = 20;
}

function OnGUI(){
	var x = Screen.width / 2;
	var rightcorner = Screen.width - 20;
	var center = Screen.height / 2;
	var y = Screen.height - 80;
	
	//set the texture in a variable
	var formule1 = Resources.Load("chemical_one_white_noState") as Texture;
	var formule1Press = Resources.Load("chemical_one_white_press") as Texture;
	
	var formule2 = Resources.Load("chemical_four_blue_noState") as Texture;
	var formule2Press = Resources.Load("chemical_four_blue_press") as Texture;
	
	var formule3 = Resources.Load("chemical_two_yerange_noState") as Texture;
	var formule3Press = Resources.Load("chemical_two_yerange_press") as Texture;
	
	var formule4 = Resources.Load("chemical_three_red_noState") as Texture;
	var formule4Press = Resources.Load("chemical_three_red_press") as Texture;
	
	var formule5 = Resources.Load("chemical_two_yellow_noState") as Texture;
	var formule5Press = Resources.Load("chemical_two_yellow_press") as Texture;
	
	var background = Resources.Load("background") as Texture;
	var heart = Resources.Load("heart") as Texture;
	var life = Resources.Load("life") as Texture;
	var polymere = Resources.Load("polymere") as Texture;
	
	var moneyTexture = Resources.Load("Mmoney") as Texture;
	var relique = Resources.Load("relique") as Texture;
	
	var reload = Resources.Load("buttonreload") as Texture;
	
	// triggering buttons.
	if(Input.GetKey(KeyCode.C)){
		GUI.Button(Rect(x,y,45,50), formule2Press, customGuiStyle);
		
	}
	else if(Input.GetKey(KeyCode.F)){
		if(Input.GetKey(KeyCode.H)){
			GUI.Button(Rect(x - 60,y,45,50), formule1Press, customGuiStyle);
			GUI.Button(Rect(x - 180 ,y,45,50), formule1Press, customGuiStyle);
		}
		else{
			GUI.Button(Rect(x - 60,y,45,50), formule1Press, customGuiStyle);
		}
	}
	else if(Input.GetKey(KeyCode.G)){
		GUI.Button(Rect(x - 120 ,y,45,50), formule3Press, customGuiStyle);
	}
	else if(Input.GetKey(KeyCode.H)){
		GUI.Button(Rect(x - 180 ,y,45,50), formule1Press, customGuiStyle);
	}
	else if(Input.GetKey(KeyCode.J)){
		GUI.Button(Rect(x + 60,y,45,50), formule4Press, customGuiStyle);
	}
	else if(Input.GetKey(KeyCode.K)){
		if(Input.GetKey(KeyCode.L)){
			GUI.Button(Rect(x + 120,y,45,50), formule5Press, customGuiStyle);
			GUI.Button(Rect(x + 180,y,45,50), formule5Press, customGuiStyle);
		}
		else{
			GUI.Button(Rect(x + 120,y,45,50), formule5Press, customGuiStyle);
		}
	}
	else if(Input.GetKey(KeyCode.L)){
		GUI.Button(Rect(x + 180,y,45,50), formule5Press, customGuiStyle);
	}
	else{
		// button
		
		GUI.Button(Rect(x,y,45,50), formule2, customGuiStyle);
		GUI.Button(Rect(x - 60,y,45,50), formule1, customGuiStyle);
		GUI.Button(Rect(x - 120 ,y,45,50), formule3, customGuiStyle);
		GUI.Button(Rect(x - 180 ,y,45,50), formule1, customGuiStyle);
		GUI.Button(Rect(x + 60,y,45,50), formule4, customGuiStyle);
		GUI.Button(Rect(x + 120,y,45,50), formule5, customGuiStyle);
		GUI.Button(Rect(x + 180,y,45,50), formule5, customGuiStyle);
		
		//label
		
		GUI.Label(Rect(x+17,y + 55, 10,10), "C", textStyle);
		GUI.Label(Rect(x-43,y+55, 10,10), "F", textStyle);
		GUI.Label(Rect(x-103,y+55,10,10), "G", textStyle);
		GUI.Label(Rect(x-167,y+55,10,10), "H", textStyle);
		GUI.Label(Rect(x+77,y+55,10,10), "I", textStyle);
		GUI.Label(Rect(x+137,y+55,10,10), "J", textStyle);
		GUI.Label(Rect(x+197,y+55,10,10), "K", textStyle);
	}
	
				
	// life of the player
	// basic of the life UI.
	
	GUI.DrawTexture(Rect(x - 160,0,355,56), background);
	GUI.DrawTexture(Rect(x - 105, 15, 28,24), heart);
	
	var playerLife = GameObject.Find('Player');
		
	if(playerLife){
		var otherscript = playerLife.GetComponent(move);
		// assigning the new variable to a new health variable.
		var healthp = otherscript.health;
		moneyValue = otherscript.money;
		
		if(healthp > 0){
			if(healthp > 0){
				GUI.DrawTexture(Rect(x-63,20,10,10), life);
			}
			if(healthp > 1){
				GUI.DrawTexture(Rect(x-20,20,10,10), life);
				GUI.DrawTexture(Rect(x-50,25,27,1), polymere); 
			}
			if(healthp > 2){
				GUI.DrawTexture(Rect(x + 23,20,10,10), life);
				GUI.DrawTexture(Rect(x-7,25,27,1), polymere); 
			}
			if(healthp > 3){
				GUI.DrawTexture(Rect(x + 65,20,10,10), life);
				GUI.DrawTexture(Rect(x+35,25,27,1), polymere);
			}
			if(healthp > 4){
				GUI.DrawTexture(Rect(x+78,25,27,1), polymere);
				GUI.DrawTexture(Rect(x + 108,20,10,10), life);
			}
		}
	}
	else{ 
		GUI.Label(Rect(x-90,center - 100,300,300), "Vous avez perdu !", textStyle);
		
		if(GUI.Button(Rect(x-30,center, 100,100), reload, customGuiStyle)){
			Application.LoadLevel("level1");
		}
	}
	
	// money
	
	GUI.DrawTexture(Rect(20,y+25,28,15), moneyTexture);
	GUI.Label(Rect(50,y+25,160,40), " "+moneyValue+" ", textStyle);
	
	// reliques
	
	GUI.DrawTexture(Rect(rightcorner - 70, y+20,25,25), relique); 
	GUI.Label(Rect(rightcorner - 20,y+25,160,40), "5", textStyle);
				
}

function Update () {

	
	
}