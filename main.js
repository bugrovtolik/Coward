import PIXI from "PIXI"

var renderer = PIXI.autoDetectRenderer(1000, 600,{backgroundColor : 0xffffff});
document.body.appendChild(renderer.view);

var stage = new PIXI.Container();

var postition = 0,
	background,
    background2,
    foreground,
    foreground2;

background = PIXI.Sprite.fromImage('./images/background.jpg');
background2 = PIXI.Sprite.fromImage('./images/background2.jpg');
stage.addChild(background);
stage.addChild(background2);

foreground = PIXI.Sprite.fromImage('./images/background.jpg');
foreground2 = PIXI.Sprite.fromImage('./images/background2.jpg');
stage.addChild(foreground);
stage.addChild(foreground2);
foreground.position.y = foreground2.position.y = 640 - foreground2.height;


animate();
function animate() {
    postition += 10;

    background.position.x = -(postition * 0.6);
    background.position.x %= 1286 * 2;
    if(background.position.x < 0)
    {
        background.position.x += 1286 * 2;
    }
    background.position.x -= 1286;

    background2.position.x = -(postition * 0.6) + 1286;
    background2.position.x %= 1286 * 2;
    if(background2.position.x < 0)
    {
        background2.position.x += 1286 * 2;
    }
    background2.position.x -= 1286;

    foreground.position.x = -postition;
    foreground.position.x %= 1286 * 2;
    if(foreground.position.x < 0)
    {
        foreground.position.x += 1286 * 2;
    }
    foreground.position.x -= 1286;

    foreground2.position.x = -postition + 1286;
    foreground2.position.x %= 1286 * 2;
    if(foreground2.position.x < 0)
    {
        foreground2.position.x += 1286 * 2;
    }
    foreground2.position.x -= 1286;

    requestAnimationFrame(animate);

    renderer.render(stage);
}