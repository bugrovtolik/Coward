const NOT_DEFINED_ERROR = (functionName) => new Error(functionName + " function is not defined");

class MapObject {
	constructor(sprite) {
		if (sprite === undefined) {
			throw new Error("sprite cannot be undefined");
		}
		this.sprite = sprite;
	}
	getSprite() {
		return this.sprite;
	}
	getWidth() {
		return this.sprite.width;
	}
	getHeight() {
		return this.sprite.height;
	}
	getX() {
		return this.sprite.position.x;
	}
	getY() {
		return this.sprite.position.y;
	}
	set positionX(value) {
		this.sprite.position.x = value;
	}
	set positionY(value) {
		this.sprite.position.y = value;
	}
}

export default MapObject