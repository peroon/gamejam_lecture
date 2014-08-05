var prefab:GameObject;

function Update () {
	if (Input.GetKeyUp(KeyCode.Space) && global.bulletNum > 0){
		Instantiate(prefab, this.transform.position, Quaternion.identity);
		audio.Play();
		global.bulletNum -= 1;
	}
}