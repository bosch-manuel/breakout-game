import { BallModel } from "../model/BallModel";
import { IBallView } from "../view/ball/IBallView";
import { HTMLBall } from "../view/ball/HTMLBall";
import Point = require("victor");
import { BallController } from "./ball/BallController";
import { GameModel } from "../model/GameModel";
import { KeyInputController } from "./input/KeyInputController";
import { Queue } from "../utils/queue/Queue";

export class GameController {
    private handle: number;
    private ball: BallModel;
    private gameModel: GameModel;
    private ball_view: IBallView;
    private _mainCanvas: HTMLCanvasElement;
    private gameOver: boolean;
    private keyInputController:KeyInputController;

    private _ballController: BallController;

    constructor(mainCanvas: HTMLCanvasElement) {
        this._mainCanvas = mainCanvas;
        this.gameModel = new GameModel(mainCanvas.width, mainCanvas.height);
        this.ball = this.createBall();
        this._ballController = this.initializeBallController(this.ball, this.gameModel);
        this.ball_view = this.initializeBallView(this._mainCanvas.getContext("2d"), this.ball);
    }

    private createBall(): BallModel {
        return new BallModel(50, new Point(this._mainCanvas.width / 2, this._mainCanvas.height / 2));
    }

    private initializeBallView(context: CanvasRenderingContext2D, ball: BallModel): IBallView {
        return new HTMLBall(context, ball);
    }

    private initializeBallController(ball: BallModel, gameModel: GameModel): BallController {
        return new BallController(ball, gameModel);
    }

    private initializeKeyInputController():KeyInputController {
        return new KeyInputController();
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
        //render
        this.render();
    }

    private processInput(): void {
        let event:KeyboardEvent;
        let eventQueue:Queue<KeyboardEvent> = this.keyInputController.eventQueue;
        while(this.keyInputController.eventQueue.size>0) {
            event = eventQueue.pop();
            this._ballController.processInput(event);
        }        
    }

    private update(elapsedTime: number): void {
        this._mainCanvas.getContext("2d").clearRect(0, 0, this._mainCanvas.width, this._mainCanvas.height);
        this._ballController.update(elapsedTime);
    }

    private render(): void {

    }
}