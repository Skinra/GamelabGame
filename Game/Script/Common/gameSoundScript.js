#pragma strict

function Start () {

}

function Update () {
	//var soundObj = gameObject.Find("Developers");
	
	var isactivate = PlayerPrefs.GetInt("Togglesound");
	Debug.Log(isactivate);
	
	if(isactivate == 1){
		audio.mute = false;
		PlayerPrefs.SetInt("Gactivateingui", 1);
		Debug.Log("1");
	}
	else{
		audio.mute = true;
		PlayerPrefs.SetInt("Gactivateingui", 0);
		Debug.Log("2");
	}
}