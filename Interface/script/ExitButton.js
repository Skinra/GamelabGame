#pragma strict

var customGuiStyle : GUIStyle;

// toggle button

private var toggleIsound : boolean = false;
private var toggleGsound : boolean = false;
private var loop : int = 0;

function Start () {

}

/*function getISound(){
	if(loop == 0){
		var activate = 
		loop = 1;
	}

	return activate;
}*/

function OnGUI(){

	var activeornot : int = PlayerPrefs.GetInt("activateingui");
	var oldactiveornot : int;
	var loop = 0;
	
	if(activeornot != oldactiveornot && loop == 0){
		oldactiveornot = activeornot;
		loop = 1;
	}
	
	Debug.Log(oldactiveornot);
	
	var x = (Screen.width / 2) - (180 / 2);
	var x2 = Screen.width / 4;

	
	var ButtonExit : Texture = Resources.Load("exit");
	var bar : Texture = Resources.Load("bar");
	
	// button
	
	var buttonTrue : Texture = Resources.Load("on");
	var buttonFalse : Texture = Resources.Load("off");
	
	GUI.DrawTexture(Rect(x2+75,110,300,1), bar);
	GUI.DrawTexture(Rect(x2 + 75, 180, 300, 1), bar);
	GUI.DrawTexture(Rect(x2 + 75, 250, 300, 1), bar);
	GUI.Label(Rect(x2 - 100, 100, 250,100), "Interface sound");
	GUI.Label(Rect(x2 - 100, 170, 250,100), "Game sound");
	GUI.Label(Rect(x2 - 100, 240, 250,100), "Screen size");
	

	toggleIsound = GUI.Toggle(Rect(x + 220, 90,40,40),toggleIsound, buttonFalse, customGuiStyle);
	toggleGsound = GUI.Toggle(Rect(x + 220, 160,40,40),toggleGsound, buttonFalse, customGuiStyle);
	
	if(oldactiveornot == 1){
		toggleIsound = GUI.Toggle(Rect(x + 220, 90,40,40),toggleIsound, buttonTrue, customGuiStyle);
		if(toggleIsound){
			oldactiveornot = 0;
			
			toggleIsound = GUI.Toggle(Rect(x + 220, 90,40,40),toggleIsound, buttonFalse, customGuiStyle);
			
		}
		saveIsound(oldactiveornot);
	}
	else if(oldactiveornot == 0){
		toggleIsound = GUI.Toggle(Rect(x + 220, 90,40,40),toggleIsound, buttonFalse, customGuiStyle);
		if(toggleIsound){
			toggleIsound = GUI.Toggle(Rect(x + 220, 90,40,40),toggleIsound, buttonTrue, customGuiStyle);
			oldactiveornot = 1;
		}
		saveIsound(oldactiveornot);
	}
	
	/*if(toggleIsound){
		toggleIsound = GUI.Toggle(Rect(x + 220, 90,40,40),toggleIsound, buttonTrue, customGuiStyle);
	}*/
	
	Debug.Log(oldactiveornot);
	
	if(toggleGsound){
		toggleGsound = GUI.Toggle(Rect(x + 220, 160,40,40),toggleGsound, buttonTrue, customGuiStyle);
	}
	
	if(GUI.Button(Rect(x,0,100,100), ButtonExit, customGuiStyle)){
		loop = 0;
		Application.LoadLevel("Interface");
	}
	
}

function saveIsound(toggleIsound){
	PlayerPrefs.SetInt("Activate", toggleIsound);
}

function Update (){
	
}