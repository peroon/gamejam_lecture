var speedVector:Vector3;

function Update () {
	this.transform.Translate(speedVector * Time.deltaTime);
}