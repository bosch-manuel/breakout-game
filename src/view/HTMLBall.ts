import { Ball } from "../model/Ball";
import { IObserver } from "../utils/observer/IObserver";
import { Point } from "../model/Point";

export class HTMLBall implements IObserver {
    private _context: CanvasRenderingContext2D;
    private _ball: Ball;
    private _previousBall: Ball;

    constructor(context: CanvasRenderingContext2D, ball: Ball) {
        this._context = context;
        this._ball = ball;
        this._previousBall = ball.clone();
        this.drawBall();
    }

    private clearOldPosition(): void {
        this.drawBall(this._previousBall, "#eee");
    }

    private drawBall(ball: Ball = this._ball, color: string = ball.color) {
        this._context.beginPath();
        this._context.arc(ball.position.x, ball.position.y, ball.radius, 0, Math.PI * 2);
        this._context.fillStyle = color;
        this._context.fill();
        this._context.closePath();
    }

    public update(): void {
        this.clearOldPosition();
        this._previousBall = this._ball.clone();
        this.drawBall(this._ball)
    }
}