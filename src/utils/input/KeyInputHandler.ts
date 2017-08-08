import { KeyModel } from "../../model/KeyModel";

export class KeyInputHandler {
    private _keyModel: KeyModel;

    constructor(keyModel: KeyModel) {
        this._keyModel = keyModel;
        window.addEventListener("keydown", this.onKeyDown.bind(this), false);
        window.addEventListener("keyup", this.onKeyUp.bind(this), false);
    }

    private onKeyDown(event: KeyboardEvent): void {
        this._keyModel.setKeyState(event.keyCode, true);
    }

    private onKeyUp(event: KeyboardEvent): void {
        this._keyModel.setKeyState(event.keyCode, false);
    }
}