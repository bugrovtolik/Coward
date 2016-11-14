import PIXI from 'PIXI'

class MapClass {
	constructor(width, height) {
		this.width = width;
		this.height = height;
	}
	getSprite() {
		return this.sprite;
	}
}

export default MapClass