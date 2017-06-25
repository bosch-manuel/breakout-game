import { BallModel } from "./model/BallModel";
import { HTMLBall } from "./view/ball/HTMLBall";
import { GameController } from "./controller/GameController"
function createMainCanvas(): HTMLCanvasElement {
    let canvas: HTMLCanvasElement = document.createElement('canvas');
    canvas.id = "MainCanvas";
    canvas.height = 480;
    canvas.width = 320;
    document.body.appendChild(canvas);

    return canvas;
}

function main(): number {
    let mainCanvas = createMainCanvas();
    let gameController = new GameController(mainCanvas);


    return 0;
}

main();