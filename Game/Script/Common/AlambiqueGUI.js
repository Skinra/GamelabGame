var customGuiStyle : GUIStyle;
var customGuiStyle2 : GUIStyle;
var autorisation : boolean;
var id : int;
public static var displayFormula;
public static var moleculeFormula;

public var formule = ['C3H6O', 'O2', 'CH4'];
public var formule2 = ['LOX', 'C3H5N3O9', 'LH2'];
// regroupement de variable de molecule
public var recapFormule = [formule, formule2];

// variable texte
public var formuleTexte = ['J aime mangé des Charlotte au fraise', 'Tahiiiiiiiiiiiiiiitiiiiiii', 'Mais ce sont des thug chez Gamelab #thuglife'];
public var formuleTexte2 = ['LE PSG VA GAGNE CE SOIR', 'Le paté de campagne de Thibault', 'Amour fou entre Alexis et Rachel, great !'];

public var recapTexte = [formuleTexte, formuleTexte2];


function Start () {
	customGuiStyle.fontSize = 25;
	customGuiStyle2.fontSize = 18;
	customGuiStyle2.wordWrap = true;
	customGuiStyle.normal.textColor = Color.black;
	customGuiStyle.font = Resources.Load("small_font") as Font;
	
	customGuiStyle.wordWrap = true;
	autorisation = false;
}

function OnGUI(){

	var isactivate = PlayerPrefs.GetInt("active");
	
	// background texture
	var background = Resources.Load("laboratoire_alambic_fond") as Texture2D;
	var chemicalB = ["affichage_bleu", "affichage_blanc", "affichage_red", "affichage_yellow", "affichage_orange"];
	var bar = Resources.Load("Vbar") as Texture2D;
	// var bouton
	var bouton = Resources.Load("laboratoire_alambic_bouton") as Texture2D;
	// chemical texture
	var chemical = ["chemical_four_blue_noState", "chemical_one_white_noState", "chemical_three_red_noState", "chemical_two_yellow_noState", "chemical_two_yerange_noState"];
	var backArray = ["affichage_bleu", "affichage_blanc", "affichage_red", "affichage_yellow", "affichage_orange"];
	
	if(isactivate){
		var x2 = Screen.width / 2;
		var h = Screen.height / 2;
	
		GUI.BeginGroup(Rect(0,0,x2*2,h*2));
		
			GUI.DrawTexture(Rect(0,0,x2*2,h*2), background);
			if(GUI.Button(Rect(x2*1.8, h - 200, 54,62), Resources.Load(chemical[0]) as Texture2D,  customGuiStyle)){
				id = 0;
			}
			else if(GUI.Button(Rect(x2*1.8, h - 120, 54,62), Resources.Load(chemical[1]) as Texture2D,  customGuiStyle)){
				id = 1;
			}
			else if(GUI.Button(Rect(x2*1.8, h - 40, 54,62), Resources.Load(chemical[2]) as Texture2D,  customGuiStyle)){
				id = 2;
			}
			else if(GUI.Button(Rect(x2*1.8, h + 40, 54,62), Resources.Load(chemical[3]) as Texture2D,  customGuiStyle)){
				id = 3;
			}
			else if(GUI.Button(Rect(x2*1.8, h + 120, 54,62), Resources.Load(chemical[4]) as Texture2D,  customGuiStyle)){
				id = 4;
			}
			
			// function which display molecule

			var i : int;		
			moleculeFormula = function(id){
				var yOffset = 0;
				var yOffset2 = 0;

				for(var i in recapFormule[id]){
				
					if(GUI.Button(Rect(20, 25 + yOffset,60,69), Resources.Load(i) as Texture2D,  customGuiStyle)){
						Debug.Log(i);
					}
					GUI.Label(Rect(170, 25 + yOffset, 200,150), i, customGuiStyle);
					yOffset += 100;
				}
				// for loop to show information about this molecule
				for(var k in recapTexte[id]){
						GUI.Label(Rect(100, 50 + yOffset2, 190,150), k, customGuiStyle2);
						yOffset2 += 100;
				}
			};
			
			displayFormula = function(id){
		
				switch (id){
					case 0:
						GUI.DrawTexture(Rect(x2+25,h*0.6,180,208), Resources.Load(chemicalB[0]));
						
					break;
					case 1:
						GUI.DrawTexture(Rect(x2,h*0.65,139,161), Resources.Load(chemicalB[1]));
					break;
					case 2:
						GUI.DrawTexture(Rect(x2,h*0.65,139,161), Resources.Load(chemicalB[2]));
					break;
					case 3:
						GUI.DrawTexture(Rect(x2,h*0.65,139,161), Resources.Load(chemicalB[3]));
					break;
					case 4:
						GUI.DrawTexture(Rect(x2,h*0.65,139,161), Resources.Load(chemicalB[4]));
					break;
				}
			};
			
			// call the function
			displayFormula(id);
			moleculeFormula(id);
			// when a new molecule has been choose, use prototype to redefine the function
			
			GUI.DrawTexture(Rect(x2 - 100,10,3,h*1.9), bar);
		GUI.EndGroup();
	}
	
	// close the gui
	if(Input.GetKeyDown(KeyCode.X)){
		Debug.Log("passe");
		PlayerPrefs.SetInt("active", 0);
		autorisation = false;
	}
	
}
