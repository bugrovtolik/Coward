import PIXI from "PIXI"

class Game {
	constructor(map) {
		this.container = new PIXI.Container();
		this.container.addChild(map.getMyContainer());
		this.map = map;

		this.renderer = PIXI.autoDetectRenderer(1024, 600,{backgroundColor : 0xffffff});
		document.body.appendChild(this.renderer.view);
	}

	tick() {
		this.map.tick();
	}

	getContainer() {
		return this.container;
	}

	start() {
		this.tickInterval = setInterval(() => {
			this.tick();
		}, 10);
		this.renderInterval = setInterval(() => {
			this.renderer.render(this.getContainer());
		}, 10);
	}
}

export default Game