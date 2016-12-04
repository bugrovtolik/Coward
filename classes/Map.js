import PIXI from 'PIXI'
import Bullet from './Bullet'

class Map {
	constructor(width, height, player, movableObjects) {
		this.width = width;
		this.height = height;
		this.movableObjects = movableObjects;
		this.player = player;

		this.dx = 0;
		this.dy = 0;

		this.bullets = [];
		this.movableContainer = new PIXI.Container();
		this.movableObjects.forEach(m => this.movableContainer.addChild(m.getSprite()));
		this.unmovableContainer = new PIXI.Container();
		this.unmovableContainer.addChild(this.player.getSprite());
		this.container = new PIXI.Container();
		this.container.addChild(this.movableContainer);
		this.container.addChild(this.unmovableContainer);

		this.control = {
			keyW: false,
			keyA: false,
			keyS: false,
			keyD: false
		}
		document.addEventListener('keydown', this.onKeyDown.bind(this));
		document.addEventListener('keyup', this.onKeyUp.bind(this));
		document.addEventListener('mousemove', this.rotatePlayer.bind(this));
		document.addEventListener('mousedown', this.shoot.bind(this));
	}

	getContainer() {
		var tempCont = new PIXI.Container();
		tempCont.addChild(this.container);
		this.bullets.forEach(b => tempCont.addChild(b.getSprite()));
		return tempCont;
	}

	tick() {
		if(this.movableContainer.x + this.dx > (1024/2 - 32) || this.movableContainer.x + this.dx < (-this.width + 1024/2 + 32)) this.dx = 0;
		if(this.movableContainer.y + this.dy > (600/2 - 32) || this.movableContainer.y + this.dy < (-this.height + 600/2 + 32)) this.dy = 0;
		this.movableContainer.x += this.dx;
		this.movableContainer.y += this.dy;

		this.checkBulletsCollision();
		for(var i = 0; i < this.bullets.length; i++)
				{
					this.bullets[i].x = this.bullets[i].getX() + this.bullets[i].getDx() + this.dx;
					this.bullets[i].y = this.bullets[i].getY() + this.bullets[i].getDy() + this.dy;
				}
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

	shoot(event) {
		var bullet = new Bullet('images/bulletimg.png',this.player.getX(),this.player.getY());
		bullet.dx = Math.sin(this.player.getSprite().rotation) * 2;
		bullet.dy = -Math.cos(this.player.getSprite().rotation) * 2;
		this.bullets.push(bullet);
	}

	checkBulletsCollision() {
		for(var i = 0; i < this.bullets.length; i++)
		{
			if (this.bullets[i].getX() <= this.movableContainer.x ||
				this.bullets[i].getX() >= this.movableContainer.x + this.width ||
				this.bullets[i].getY() <= this.movableContainer.y ||
				this.bullets[i].getY() >= this.movableContainer.y + this.height) {
				this.bullets.splice(i,1);
				i--;
				break;
			}
		}
	}
}

export default Map