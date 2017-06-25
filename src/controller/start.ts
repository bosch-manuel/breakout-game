import { Ball } from "../model/Ball";
import { Point } from "../model/Point";
import { HTMLBall } from "../view/HTMLBall";

function main(): number {
    let canvas: HTMLCanvasElement = document.getElementById("myCanvas") as HTMLCanvasElement;
    let ctx = canvas.getContext("2d");


    let ball = new Ball(20, new Point(240, 160), "green");
    let ball_view = new HTMLBall(ctx, ball);
    return 0;
}

main();


