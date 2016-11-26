const NOT_DEFINED_ERROR = (functionName) => new Error(functionName + " function is not defined");
import MapObject from './MapObject'

class Movable extends MapObject {
	constructor(sprite) {
		super(sprite);

		this._dx = 0;
		this._dy = 0;
	}
	
	getDx() {
		return this._dx;
	}
	getDy() {
		return this._dy;
	}
	set dx(dx) {
		this._dx = dx;
	}
	set dy(dy) {
		this._dy = dy;
	}
	move(dx, dy) {
		this._dx += dx;
		this._dy += dy;
	}
	tick() {
		this.sprite.position.x += this._dx;
		this.sprite.position.y += this._dy;
	}
}

export default Movable