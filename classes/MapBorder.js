import PIXI from "PIXI"
import Movable from './Movable'

class MapBorder extends Movable {
	constructor(mapBorderUrl, width, height, x, y) {
		super(new PIXI.extras.TilingSprite(new PIXI.Texture.fromImage(mapBorderUrl), width, height));
	}
}

export default MapBorder