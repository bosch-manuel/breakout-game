import { BallModel } from "../../model/BallModel";
import { IController } from "../IController";
import { Point } from "../../model/Point";

export class BallController implements IController {
    private _model: BallModel;

    constructor(model: BallModel) {
        this._model = model;
    }

    public update(elapsedTime: number): void {
        this._model.position = this.calculateNewPosition(elapsedTime);
    }

    private calculateNewPosition(elapsedTime: number): Point {
        let seconds = elapsedTime / 1000;
        
        let newX = this._model.position.x + this._model.velocity * seconds;
        console.log(seconds + ">>>> newX:" + newX);
        return new Point(newX, this._model.position.y);


    }
    //direction of movement - angle 
    //calculates current postion of ball 
}