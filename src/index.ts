import { Ball } from "./model/Ball";
import { HTMLBall } from "./view/ball/HTMLBall";

function main(): number {
    let canvas: HTMLCanvasElement = document.createElement('canvas');
    canvas.id = "GameView";
    canvas.height = 480;
    canvas.width = 320;
    let context2d = canvas.getContext("2d");
    document.body.appendChild(canvas);


    let ball = new Ball();
    let ball_view = new HTMLBall(context2d, ball);


    return 0;
}

main();