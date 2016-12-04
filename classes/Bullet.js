import PIXI from "PIXI"
import Movable from './Movable'

class Bullet extends Movable {
	constructor(bulletUrl, x, y) {
		super(new PIXI.Sprite(new PIXI.Texture.fromImage(bulletUrl)));
		this.sprite.position.x = x;
		this.sprite.position.y = y;
	}
}

export default Bullet