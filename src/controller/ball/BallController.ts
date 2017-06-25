import { BallModel } from "../../model/BallModel";
import { IController } from "../IController";
import { Point } from "../../model/Point";

export class BallController implements IController {
    private _model: BallModel;

    constructor(model: BallModel) {
        this._model = model;
    }

    public update(elapsedTime: number): void {
        throw new Error("Method not implemented.");
    }

    private calculateNewPosition(elapsedTime: number): Point {
        return new Point();
    }
    //direction of movement - angle 
    //calculates current postion of ball 
}