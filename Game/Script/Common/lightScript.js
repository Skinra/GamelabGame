public var x : boolean ;
var timer2 : float;
var timer : float;
var otherLight;
var otherLight2;

var minIntensity : float;
var maxIntensity : float;
var intensity : float;

function Start(){
	x = PlayerPrefsX.GetBool("xvalue");
	timer2 = PlayerPrefs.GetInt("timer");
		
	if(x){
		minIntensity = PlayerPrefs.GetInt("intensité");
		maxIntensity = 1.8f;
	}
	else{
		maxIntensity = PlayerPrefs.GetInt("intensité");
		minIntensity = 0.0f;
	}
}

function ambiantLight(){

	timer2 += Mathf.Clamp(Time.deltaTime, 0.0, 30.0);
	
	if(timer2 > 100){
		x = !x;
		timer2 = 0;
		minIntensity = 0.0f;
		maxIntensity = 1.8f;
	}

	if(x){
		intensity = light.intensity = Mathf.Lerp(minIntensity, maxIntensity, timer2 * 0.1);
	}
	else if(!x){
		intensity = light.intensity = Mathf.Lerp(maxIntensity, minIntensity, timer2 * 0.1);
	}
}

function Update () {
	ambiantLight();
	
	otherLight = GameObject.Find('Point light 2');
	otherLight2 = GameObject.Find('Point light');
	timer += Time.deltaTime;
	
	
	if(gameObject.light.intensity > 0.9){
		if(otherLight){
			//otherLight.light.intensity = 0.0;
			otherLight.light.intensity = Mathf.Lerp(3.0, 0.0, timer * 0.1);
		}
		if(otherLight2){
			//otherLight2.light.intensity = 0.0;
			otherLight2.light.intensity = Mathf.Lerp(3.0, 0.0, timer * 0.1);
		}
	}
	else{
		if(otherLight){
			otherLight.light.intensity = Mathf.Lerp(0.0, 3.0, timer * 0.1);
		}
		if(otherLight2){
			otherLight2.light.intensity = Mathf.Lerp(0.0, 3.0, timer * 0.1);;
		}
	}	
}
