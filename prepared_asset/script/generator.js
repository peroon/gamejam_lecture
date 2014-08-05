var prefab:GameObject;
var interval:float;
var passedTime:float;

function Update () {
	passedTime += Time.deltaTime;
	if(passedTime > interval){
		Instantiate(prefab, this.transform.position, Quaternion.identity);
		passedTime = 0.0;
	}
}