import Map from './Map'
import MapBorder from './MapBorder'
import Player from './Player'
import Background from './Background'

const width = 1000
const height = 1000

class FirstMap extends Map {
	constructor() {
		super(width, height, new Player('images/player.png',1024/2,600/2), [
			new Background('images/background.jpg',width,height),
			new MapBorder('images/border.png',width,20),
			new MapBorder('images/border.png',20,height,width-20),
			new MapBorder('images/border.png',width,20,0,height-20),
			new MapBorder('images/border.png',20,height)
		]);
	}
}

export default FirstMap