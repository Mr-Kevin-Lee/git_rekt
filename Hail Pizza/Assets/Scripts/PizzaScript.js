﻿import System.Collections.Generic;

var speed = 10;
var health = 4;

var powerup;

function Start() {
}

function OnTriggerEnter2D(other : Collider2D) {
    Debug.Log(other.name);
    if (other.name == "pepperoni(Clone)") {
        powerup = "pepperoni";
        stats = gameObject.Find("PlayerHealth1").GetComponent(PlayerStatsScript);
        stats.updatePlayerHealth(true);
    }
}

function Update () {
	GetComponent.<Rigidbody2D>().velocity.y = Input.GetAxis("Vertical") * speed;
	if (GetComponent(Transform).position.y > 3) {
		GetComponent(Transform).position.y = 3;
	} 
	if (GetComponent(Transform).position.y < -4.5) {
		GetComponent(Transform).position.y = -4.5;
	}
}