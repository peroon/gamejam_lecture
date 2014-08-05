var moveSpeed:float;
var moveLimit:float;

function Update () {
	if (Input.GetKey ("right"))
		this.transform.Translate(new Vector3(moveSpeed * Time.deltaTime, 0, 0));
	if (Input.GetKey ("left"))
		this.transform.Translate(new Vector3(-moveSpeed * Time.deltaTime, 0, 0));
	
	//limit position
	if(this.transform.position.x > moveLimit)
		this.transform.position.x = moveLimit;
	if(this.transform.position.x < -moveLimit)
		this.transform.position.x = -moveLimit;
}