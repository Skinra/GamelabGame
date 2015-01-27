var customGuiStyle : GUIStyle;
var customGuiStyle2 : GUIStyle;
var autorisation : boolean;
var id : int;

public  var moleculeFormula;

public var formule = ['C3H6O', 'O2', 'CH4'];
public var formule2 = ['LOX', 'C3H5N3O9', 'LH2'];
public var formule3 = ['XO','OX','GG'];
public var formule4 = ['CH', 'MA', 'IP'];
public var formule5 = ['acide', 'LU', 'MU'];
// regroupement de variable de molecule
public var recapFormule = [formule, formule2, formule3, formule4, formule5];

// variable texte
public var formuleTexte = ['J aime mangé des Charlotte au fraise', 'Tahiiiiiiiiiiiiiiitiiiiiii', 'Mais ce sont des thug chez Gamelab #thuglife'];
public var formuleTexte2 = ['LE PSG VA GAGNE CE SOIR', 'Le paté de campagne de Thibault', 'Amour fou entre Alexis et Rachel, great !'];
public var formuleTexte3 = ['Les', 'Asiat', 'Sont'];
public var formuleTexte4 = ['meilleurs', 'nigga', '!'];
public var formuleTexte5 = ['H2SO4', 'you', 'eat'];

// enregistrer les différentes valeurs des molecules.
// creation d'un tableau de sauvegarde de molecule

public var choixFormule : String[] = new String[5];
public var recapTexte = [formuleTexte, formuleTexte2, formuleTexte3, formuleTexte4, formuleTexte5];



function Start () {
	customGuiStyle.fontSize = 25;
	customGuiStyle2.fontSize = 18;
	customGuiStyle2.wordWrap = true;
	customGuiStyle.normal.textColor = Color.black;
	customGuiStyle.font = Resources.Load("small_font") as Font;
	customGuiStyle.wordWrap = true;
	autorisation = false;
	
	if(PlayerPrefsX.GetStringArray("UseFormule").length != 0){
		choixFormule = PlayerPrefsX.GetStringArray("UseFormule");
	}

}

function OnGUI(){
Debug.Log(choixFormule.length);
	

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
		
			moleculeFormula = function(id){
				var yOffset = 0;
				var yOffset2 = 0;

				for(var i in recapFormule[id]){
				
					if(GUI.Button(Rect(20, 25 + yOffset,60,69), Resources.Load(i) as Texture2D,  customGuiStyle)){
						choixFormule[id] = i;
						Debug.Log("case du tableau numero "+id+" sa valeur est "+choixFormule[id]);
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
			
			var displayFormula = function(id){
		
				switch (id){
					case 0:
						GUI.DrawTexture(Rect(x2+25,h*0.6,180,208), Resources.Load(chemicalB[0]));
						GUI.Label(Rect(x2+80,h+150,100,208), choixFormule[0], customGuiStyle2);
					break;
					case 1:
						GUI.DrawTexture(Rect(x2+25,h*0.6,180,208), Resources.Load(chemicalB[1]));
						GUI.Label(Rect(x2+80,h+150,100,208), choixFormule[1], customGuiStyle2);
					break;
					case 2:
						GUI.DrawTexture(Rect(x2+25,h*0.6,180,208), Resources.Load(chemicalB[2]));
						GUI.Label(Rect(x2+80,h+150,100,208), choixFormule[2], customGuiStyle2);
					break;
					case 3:
						GUI.DrawTexture(Rect(x2+25,h*0.6,180,208), Resources.Load(chemicalB[3]));
						GUI.Label(Rect(x2+80,h+150,100,208), choixFormule[3], customGuiStyle2);
					break;
					case 4:
						GUI.DrawTexture(Rect(x2+25,h*0.6,180,208), Resources.Load(chemicalB[4]));
						GUI.Label(Rect(x2+80,h+150,100,208), choixFormule[4], customGuiStyle2);
					break;
				}
			};
			
			// call the function
			displayFormula(id);
			moleculeFormula(id);
			// when a new molecule has been choose, use prototype to redefine the function
			
			GUI.DrawTexture(Rect(x2 - 100,10,3,h*1.9), bar);
			GUI.Label(Rect(x2+15, h*1.8, 200, 200), "Press X to quit and save", customGuiStyle2);
		GUI.EndGroup();
	}
	
	// close the gui
	if(Input.GetKeyDown(KeyCode.X)){
		PlayerPrefsX.SetStringArray ("UseFormule", choixFormule);
		PlayerPrefs.SetInt("active", 0);
		autorisation = false;
	}
	
}
