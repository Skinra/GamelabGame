#pragma strict

var customGuiStyle : GUIStyle;

function Start () {

}



function OnGUI(){

	// get background element.

	var x = Screen.width / 2;
	var y = Screen.height / 3;
	
	// texture
	var buttonPlay : Texture = Resources.Load('buttonPlay');
	var buttonBoutique : Texture = Resources.Load('buttonStore');
	var buttonSettings : Texture = Resources.Load('buttonSettings');
	var leftarrow : Texture = Resources.Load('left');
	var rightarrow : Texture = Resources.Load('right');
	
	GUI.DrawTexture(Rect(x - 100, y + 150, 100,100), leftarrow);
    GUI.DrawTexture(Rect(x + 50, y + 175, 100,100), rightarrow);

    if(GUI.Button(Rect(x - 50 ,y + 100 ,125,125), buttonPlay, customGuiStyle)){
    	Debug.Log('Play');
    }
    
    if(GUI.Button(Rect(x - 150,y + 225, 80, 80), buttonBoutique, customGuiStyle)){
    	Debug.Log('Boutique');
    }
    
    if(GUI.Button(Rect(x + 100, y + 225, 80,80), buttonSettings, customGuiStyle)){
    	Debug.Log('Settings');
    }
    
    
}

function Update () {

}
