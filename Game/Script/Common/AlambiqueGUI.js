#pragma strict

var customGuiStyle : GUIStyle;
var customGuiStyle2 : GUIStyle;
var autorisation : boolean;
var id : int;

function Start () {
	customGuiStyle.fontSize = 25;
	customGuiStyle.normal.textColor = Color.white;
	customGuiStyle.font = Resources.Load("small_font") as Font;
	customGuiStyle.wordWrap = true;
	autorisation = false;
}

function molecule(){
	
}

function OnGUI(){

	var isactivate = PlayerPrefs.GetInt("active");
	
	// background texture
	var background = Resources.Load("laboratoire_alambic_fond") as Texture2D;
	var backgroundC = Resources.Load("laboratoire_cross") as Texture2D;
	// var bouton
	var bouton = Resources.Load("laboratoire_alambic_bouton") as Texture2D;
	// chemical texture
	var chemical = ["chemical_four_blue_press", "chemical_one_white_press", "chemical_two_yerange_press", "chemical_two_yellow_press", "chemical_three_red_press"];
	var backArray = ["laboratoire_alambic_bleu", "laboratoire_alambic_yellowO", "laboratoire_alambic_yellow", "laboratoire_alambic_white", "laboratoire_alambic_rouge"];
	
	if(isactivate){
		var x2 = Screen.width / 2;
		var h = Screen.height / 2;
	
		GUI.BeginGroup(Rect(0,0,x2*2,h*2));
		
			GUI.DrawTexture(Rect(0,0,x2*2,h*2), background);
			GUI.Label(Rect(x2-25, h - 220, 300,150), "Alambic", customGuiStyle);
			GUI.DrawTexture(Rect(x2-46,h-95, 150, 150), backgroundC); 
			
			if(GUI.Button(Rect(x2,h-50,54,62), Resources.Load(chemical[0]) as Texture2D, customGuiStyle)){
				autorisation = true;
				id = 0;
			}
			else if(GUI.Button(Rect(x2,h-150,54,62), Resources.Load(chemical[1]) as Texture2D, customGuiStyle)){
				autorisation = true;
				id = 1;	
			}
			else if(GUI.Button(Rect(x2,h+50,54,62), Resources.Load(chemical[2]) as Texture2D, customGuiStyle)){
				autorisation = true;
				id = 2;
			}
			else if(GUI.Button(Rect(x2-100,h-50,54,62), Resources.Load(chemical[3]) as Texture2D, customGuiStyle)){
				autorisation = true;
				id = 3;
			}
			else if(GUI.Button(Rect(x2+100,h-50,54,62), Resources.Load(chemical[4]) as Texture2D, customGuiStyle)){
				autorisation = true;
				id = 4;
			}
			else if(GUI.Button(Rect(x2-50,h+150, 180, 63), bouton, customGuiStyle2)){
				autorisation = true;
				id = 5;
			}
		GUI.EndGroup();
		
		GUI.BeginGroup(Rect(0,0,200,h*2));
			Debug.Log(autorisation);
			if(autorisation){
				switch(id){
					case 0:
						GUI.DrawTexture(Rect(0,0,100,h*2), Resources.Load(backArray[0]) as Texture2D);
					break;
					case 1:
						GUI.DrawTexture(Rect(0,0,100,h*2), Resources.Load(backArray[3]) as Texture2D);
					break;
					case 2:
						GUI.DrawTexture(Rect(0,0,100,h*2), Resources.Load(backArray[2]) as Texture2D);
					break;
					case 3:
						GUI.DrawTexture(Rect(0,0,100,h*2), Resources.Load(backArray[4]) as Texture2D);
					break;
					case 4:
						GUI.DrawTexture(Rect(0,0,100,h*2), Resources.Load(backArray[1]) as Texture2D);
					break;
				}
			}
			
		GUI.EndGroup();
	}
	
	// close the gui
	if(Input.GetKeyDown(KeyCode.X)){
		Debug.Log("passe");
		PlayerPrefs.SetInt("active", 0);
		autorisation = false;
	}
	
}
