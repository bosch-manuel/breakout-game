import { Ball } from "./model/Ball";

function main(): number {
    let canvas: HTMLCanvasElement = document.createElement('canvas');
    canvas.id = "GameView";
    canvas.height = 480;
    canvas.width = 320;
    let ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(10, 20, 30, 0, Math.PI * 2);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
    document.body.appendChild(canvas);

    let ball = new Ball();
    return 0;
}

main();