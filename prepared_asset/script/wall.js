var particle:GameObject;

function OnCollisionEnter(collision : Collision) {
	if(collision.gameObject.tag == 'bullet'){
		audio.Play();
		Destroy(collision.gameObject);
		//Destroy(this.gameObject);
		Instantiate(particle, this.transform.position, Quaternion.identity);
	}
}