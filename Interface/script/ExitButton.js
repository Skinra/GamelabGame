#pragma strict

var customGuiStyle = new GUIStyle();

// toggle button

private var toggleIsound : boolean = false;
private var toggleGsound : boolean = false;
private var loop : int = 0;
private var oldValue : boolean;
var activeornot : int;


function Start () {
	customGuiStyle.fontSize = 18;
	customGuiStyle.normal.textColor = Color.white;
	customGuiStyle.font = Resources.Load("small_font");
	loop = 0;
}

function OnGUI(){

	var soundObj = gameObject.Find("Developers");
	
	var x = (Screen.width / 2) - 50;
	var x2 = Screen.width / 4;
	var h = Screen.height / 2;
	
	// button
	
	var buttonTrue : Texture = Resources.Load("on");
	var buttonFalse : Texture = Resources.Load("off");
	
	var ButtonExit : Texture = Resources.Load("exit");
	var bar : Texture = Resources.Load("bar");
	
	if(loop == 0){
		activeornot = PlayerPrefs.GetInt("activateingui");
		Debug.Log(activeornot);
		loop = 1;
		
		if(activeornot == 1){
			toggleIsound = false;
		}
		else{
			toggleIsound = true;
		}
	}
	

	GUI.DrawTexture(Rect(x2+75,h - 100,300,1), bar);
	GUI.DrawTexture(Rect(x2 + 75, h + 100, 300, 1), bar);
	GUI.Label(Rect(x2 - 100, h - 110, 250,100), "Interface sound", customGuiStyle);
	GUI.Label(Rect(x2 - 100, h + 90, 250,100), "Game sound", customGuiStyle);
	
	toggleGsound = GUI.Toggle(Rect(x + 220, h + 80,40,40),toggleGsound, buttonFalse, customGuiStyle);
	
	if(GUI.Button(Rect(x,0,100,100), ButtonExit, customGuiStyle)){
		Application.LoadLevel("Interface");
	}
	
	if(toggleIsound){
		toggleIsound = GUI.Toggle(Rect(x + 220, h - 120,40,40),toggleIsound, buttonFalse, customGuiStyle);
		soundObj.audio.mute = true;
		activeornot = 0;
		saveIsound(0);
	}
	
	else if(toggleIsound == false){		
		toggleIsound = GUI.Toggle(Rect(x + 220, h - 120,40,40),toggleIsound, buttonTrue, customGuiStyle);
		soundObj.audio.mute = false;
		activeornot = 1;
		saveIsound(1);
	}
}

function saveIsound(toggleIsound){
	PlayerPrefs.SetInt("Activate", toggleIsound);
}

function Update (){
	
}