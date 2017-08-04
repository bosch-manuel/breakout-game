import { BallModel } from "../../model/BallModel";
import { IController } from "../IController";
import Point = require("victor");
import { GameModel } from "../../model/GameModel";
import Victor = require("victor");

export class BallController implements IController {
    private _ballModel: BallModel;
    private _gameModel: GameModel;

    private _screenMaxX: number;
    private _screenMaxY: number;

    constructor(ballModel: BallModel, gameModel: GameModel) {
        this._ballModel = ballModel;
        this._gameModel = gameModel;

        this._screenMaxX = this._gameModel.width;
        this._screenMaxY = this._gameModel.height;
    }

    public update(elapsedTime: number): void {
        this._ballModel.position = this.calculateNewPosition(elapsedTime);
    }

    private calculateNewPosition(elapsedTime: number): Point {
        //p_n = p_c + (d * r)/|r|
        let vec: Victor = new Victor(1, 2);

        let dy: number;
        let dx: number;

        //detect collision with borders
        if (this._ballModel.position.x >= this._screenMaxX || this._ballModel.position.x <= 0) {

        }

        let seconds = elapsedTime / 1000;

        let newX = this._ballModel.position.x + this._ballModel.velocity * seconds;
        let newY = this._ballModel.position.y + this._ballModel.velocity * seconds;
        console.log(seconds + ">>>> newX:" + newX);
        return new Point(newX, newY);


    }
    //direction of movement - angle 
    //calculates current postion of ball 
}