import { Ball } from "../model/Ball";
import { IBallView } from "../view/ball/IBallView";

export class GameControler {
    private ball: Ball;
    private ball_view: IBallView;
    constructor(mainCanvas: HTMLCanvasElement) {
        this.ball = new Ball()
    }
}