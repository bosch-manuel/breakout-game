import { PaddelModel } from "../model/PaddleModel";
import { IController } from "./IController";
import { KeyModel } from "../model/KeyModel";

export class PaddelController implements IController {
    private _paddelModel: PaddelModel;
    private _keyModel: KeyModel;

    constructor(paddelModel: PaddelModel, keyModel: KeyModel) {
        this._paddelModel = paddelModel;
        this._keyModel = keyModel;
    }

    public update(elapsedTime: number): void {
        throw new Error("Method not implemented.");
    }

}