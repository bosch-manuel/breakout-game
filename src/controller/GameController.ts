import { Ball } from "../model/Ball";
import { IBallView } from "../view/ball/IBallView";
import { HTMLBall } from "../view/ball/HTMLBall";
import { Point } from "../model/Point";

export class GameController {
    private ball: Ball;
    private ball_view: IBallView;
    private _mainCanvas: HTMLCanvasElement;

    constructor(mainCanvas: HTMLCanvasElement) {
        this._mainCanvas = mainCanvas;
        this.ball = this.createBall();
        this.ball_view = this.initializeBallView(this._mainCanvas.getContext("2d"), this.ball);
    }

    private createBall(): Ball {
        return new Ball(50, new Point(this._mainCanvas.width / 2, this._mainCanvas.height / 2));
    }

    private initializeBallView(context: CanvasRenderingContext2D, ball: Ball): IBallView {
        return new HTMLBall(context, ball);
    }
}