import { BallModel } from "../model/BallModel";
import { IBallView } from "../view/ball/IBallView";
import { HTMLBall } from "../view/ball/2DCanvasBall";
import Point = require("victor");
import { BallController } from "./ball/BallController";
import { GameModel } from "../model/GameModel";
import { KeyModel } from "../model/KeyModel";
import { KeyInputHandler } from "../utils/input/KeyInputHandler";
import { PaddelController } from "./PaddelController";
import { PaddelModel } from "../model/PaddleModel";

export class GameController {
    private handle: number;
    private ballModel: BallModel;
    private gameModel: GameModel;
    private ball_view: IBallView;
    private _mainCanvas: HTMLCanvasElement;
    private keyModel: KeyModel;
    private keyInputHandler: KeyInputHandler;
    private gameOver: boolean;

    private ballController: BallController;
    private paddelController: PaddelController;
    private paddelModel: PaddelModel;

    constructor(mainCanvas: HTMLCanvasElement) {
        this._mainCanvas = mainCanvas;
        this.gameModel = new GameModel(mainCanvas.width, mainCanvas.height);
        this.keyModel = new KeyModel();
        this.paddelModel = this.createPaddelModel();
        this.ballModel = this.createBallModel();
        this.ballController = this.initializeBallController(this.ballModel, this.gameModel);
        this.ball_view = this.initializeBallView(this._mainCanvas.getContext("2d"), this.ballModel);
        this.keyInputHandler = this.initializeKeyInputHandler(this.keyModel);
        this.paddelController = this.initializePaddelController(this.paddelModel, this.keyModel);
    }

    private createBallModel(): BallModel {
        return new BallModel(50, new Point(this._mainCanvas.width / 2, this._mainCanvas.height / 2));
    }

    private createPaddelModel(): PaddelModel {
        return new PaddelModel(10, 80)
    }

    private initializeBallView(context: CanvasRenderingContext2D, ball: BallModel): IBallView {
        return new HTMLBall(context, ball);
    }

    private initializeBallController(ball: BallModel, gameModel: GameModel): BallController {
        return new BallController(ball, gameModel);
    }

    private initializeKeyInputHandler(keyModel: KeyModel): KeyInputHandler {
        return new KeyInputHandler(keyModel);
    }

    private initializePaddelController(paddelModel: PaddelModel, keyModel: KeyModel): PaddelController {
        return new PaddelController(paddelModel, keyModel);
    }

    public startGame(): void {
        this.previousTime = window.performance.now();
        this.loop();
    }

    private stopGame(): void {
        window.cancelAnimationFrame(this.handle);
    }

    private previousTime: number; //loop previous execution time stamp
    private loop(): void { // will be called ~60 times per second
        //queue next call
        this.handle = window.requestAnimationFrame(this.loop.bind(this));
        //how much time has passed since last update?
        let currentTime = window.performance.now();
        let elapsedTime = currentTime - this.previousTime;
        this.previousTime = currentTime;
        //get input
        this.processInput();
        //update
        this.update(elapsedTime);
    }

    private processInput(): void {

    }

    private update(elapsedTime: number): void {
        this._mainCanvas.getContext("2d").clearRect(0, 0, this._mainCanvas.width, this._mainCanvas.height);
        this.ballController.update(elapsedTime);
    }

}