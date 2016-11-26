import PIXI from "PIXI"
import Movable from './Movable'

class Background extends Movable {
	constructor(backgroundUrl, width, height) {
		super(new PIXI.extras.TilingSprite(new PIXI.Texture.fromImage(backgroundUrl), width, height));
	}
}

export default Background