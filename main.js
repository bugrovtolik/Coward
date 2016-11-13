import PIXI from "PIXI"
import Map from './classes/Map'

var renderer = PIXI.autoDetectRenderer(1024, 600,{backgroundColor : 0xffffff});
document.body.appendChild(renderer.view);

var stage = new PIXI.Container();

const map = new Map(2000,2000);

stage.addChild(map.getSprite());
for(var i = 0; i < 4; i++) stage.addChild(map.borders[i].getSprite());

animate();
function animate() {
	requestAnimationFrame(animate);
	renderer.render(stage);
}