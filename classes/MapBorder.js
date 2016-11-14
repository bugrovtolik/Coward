import PIXI from "PIXI"
import MapObject from './MapObject'

class MapBorder extends MapObject {
	constructor(width, height, mapBorderUrl) {
		super();
		this.sprite = new PIXI.extras.TilingSprite(new PIXI.Texture.fromImage(mapBorderUrl), width, height);
	}
	getSprite() {
		return this.sprite;
	}
	set positionX(value) {
		this.sprite.position.x = value;
	}
	set positionY(value) {
		this.sprite.position.y = value;
	}
}

export default MapBorder