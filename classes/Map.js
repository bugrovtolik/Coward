import PIXI from 'PIXI'
import MapClass from './MapClass'
import MapBorder from './MapBorder'

class Map extends MapClass {
	constructor(width, height) {
		super(width, height);
		this.sprite = new PIXI.extras.TilingSprite(new PIXI.Texture.fromImage('images/background.jpg'), width, height);
		this.borders = [new MapBorder(width,20,'images/border.png'), 
						new MapBorder(20,height,'images/border.png'), 
						new MapBorder(width,20,'images/border.png'), 
						new MapBorder(20,height,'images/border.png')];
		this.borders[1].positionX = width-20;
		this.borders[2].positionY = height-20;
	}
	getSprite() {
		return this.sprite;
	}
}

export default Map