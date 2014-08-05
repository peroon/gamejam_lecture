function Update () {
	guiText.text = "bullet : " + global.bulletNum + ', score : ' + global.score;
}

function OnGUI(){
	if ( GUI.Button( Rect(0, 0, 100, 100), "Retry" ) ){
		Application.LoadLevel ("game");
	}
}