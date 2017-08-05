import { BallModel } from "../../model/BallModel";
import { IController } from "../IController";
import Point = require("victor");
import { GameModel } from "../../model/GameModel";

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
        let direction = this._ballModel.direction;
        let seconds = elapsedTime / 1000;
        let delta = this._ballModel.velocity * seconds; //        
        let new_pos = this._ballModel.position.add(direction.multiplyScalar(delta).divideScalar(direction.length()));
        //p_n = p_c + (d * r)/|r|

        //detect collision with borders
        if (this._ballModel.position.x + this._ballModel.radius >= this._screenMaxX || this._ballModel.position.x - this._ballModel.radius <= 0) {
            this._ballModel.direction.multiplyScalarX(-1);
        }
        if (this._ballModel.position.y + this._ballModel.radius >= this._screenMaxY || this._ballModel.position.y - this._ballModel.radius <= 0) {
            this._ballModel.direction.multiplyScalarY(-1);
        }

        return new_pos;
    }
}