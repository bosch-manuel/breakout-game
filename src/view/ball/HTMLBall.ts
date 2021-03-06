import { BallModel } from "../../model/BallModel";
import Point = require("victor");
import { IBallView } from "./IBallView";

export class HTMLBall implements IBallView {
    private _context: CanvasRenderingContext2D;
    private _data: BallModel;

    constructor(context: CanvasRenderingContext2D, ball: BallModel) {
        this._context = context;
        this.data = ball;
    }

    private drawBall(ball: BallModel = this._data, color: string = ball.color) {
        this._context.beginPath();
        this._context.arc(ball.position.x, ball.position.y, ball.radius, 0, Math.PI * 2);
        this._context.fillStyle = color;
        this._context.fill();
        this._context.closePath();
    }

    public update(): void {
        this.drawBall(this._data)
    }

    public get data(): BallModel {
        return this._data;
    }

    public set data(ball: BallModel) {
        if (this._data) {
            this._data.unsubcribe(this);
        }
        this._data = ball;
        this._data.subscribe(this, this.update.bind(this));
        this.update();
    }
}