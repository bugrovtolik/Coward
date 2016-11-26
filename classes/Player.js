import PIXI from "PIXI"
import MapObject from './MapObject'

class Player extends MapObject {
	constructor(playerUrl, x, y) {
		super(new PIXI.Sprite(new PIXI.Texture.fromImage(playerUrl)));
		this.sprite.position.x = x || 0;
		this.sprite.position.y = y || 0;
		this.sprite.anchor.set(0.5,0.5);
	}
}

export default Player