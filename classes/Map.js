import PIXI from 'PIXI'
import Movable from './Movable'

class Map {
	constructor(width, height, player, movableObjects) {
		this.width = width;
		this.height = height;
		this.movableObjects = movableObjects;
		this.player = player;

		this.dx = 0;
		this.dy = 0;

		this.container = new PIXI.Container();
		this.movableObjects.forEach(m => this.container.addChild(m.getSprite()));

		this.control = {
			keyW: false,
			keyA: false,
			keyS: false,
			keyD: false
		}
		document.addEventListener('keydown', this.onKeyDown.bind(this));
		document.addEventListener('keyup', this.onKeyUp.bind(this));
		document.addEventListener('mousemove', this.rotatePlayer.bind(this));
		//document.addEventListener('mousedown', this.shoot.bind(this));
	}

	getMyContainer() {
		var returnContainer = new PIXI.Container();
		returnContainer.addChild(this.container);
		returnContainer.addChild(this.player.getSprite());
		return returnContainer;
	}

	tick() {
		if(this.container.x + this.dx > (1024/2 - 32) || this.container.x + this.dx < (-this.width + 1024/2 + 32)) this.dx = 0;
		if(this.container.y + this.dy > (600/2 - 32) || this.container.y + this.dy < (-this.height + 600/2 + 32)) this.dy = 0;
		this.container.x += this.dx;
		this.container.y += this.dy;
	}

	onKeyDown(event) {
		var keyCode = event.keyCode;

		switch (keyCode) {
			case 87: //w
				this.control.keyW = true;
				this.dy = 1;
				break;
			case 65: //a
				this.control.keyA = true;
				this.dx = 1;
				break;
			case 83: //s
				this.control.keyS = true;
				this.dy = -1;
				break;
			case 68: //d
				this.control.keyD = true;
				this.dx = -1;
				break;
		}
	}

	onKeyUp(event) {
		var keyCode = event.keyCode;

		switch (keyCode) {
			case 87: //w
				this.control.keyW = false;
				this.dy = 0;
				break;
			case 65: //a
				this.control.keyA = false;
				this.dx = 0;
				break;
			case 83: //s
				this.control.keyS = false;
				this.dy = 0
				break;
			case 68: //d
				this.control.keyD = false;
				this.dx = 0;
				break;
		}
	}

	rotatePlayer(event) {
		var x = event.pageX - this.player.getX();
		var y = event.pageY - this.player.getY();
		this.player.getSprite().rotation = Math.atan2(y, x) + Math.PI/2;
	}
}

export default Map