import { BallModel } from "../../model/BallModel";
import { IController } from "../IController";
import { Point } from "../../model/Point";
import { GameModel } from "../../model/GameModel";

export class BallController implements IController {
    private _ballModel: BallModel;
    private _gameModel: GameModel;

    constructor(ballModel: BallModel, gameModel: GameModel) {
        this._ballModel = ballModel;
    }

    public update(elapsedTime: number): void {
        this._ballModel.position = this.calculateNewPosition(elapsedTime);
    }

    private calculateNewPosition(elapsedTime: number): Point {
        let dy: number;
        let dx: number;

        //detect collision
        if()

        let seconds = elapsedTime / 1000;

        let newX = this._ballModel.position.x + this._ballModel.velocity * seconds;
        let newY = this._ballModel.position.y + this._ballModel.velocity * seconds;
        console.log(seconds + ">>>> newX:" + newX);
        return new Point(newX, newY);


    }
    //direction of movement - angle 
    //calculates current postion of ball 
}