export class GameModel {
    private _width: number;
    private _height: number;
    private _key_pressed: Map<number, boolean>;

    constructor(width: number, height: number) {
        this._width = width;
        this._height = height;
        this._key_pressed = new Map<number, boolean>();
    }
    public get width(): number {
        return this._width;
    }

    public set width(value: number) {
        this._width = value;
    }

    public get height(): number {
        return this._height;
    }

    public set height(value: number) {
        this._height = value;
    }

    public isKeyPressed(keyCode: number): boolean {
        return this._key_pressed.has(keyCode) && this._key_pressed.get(keyCode);
    }

    public setKeyState(keyCode: number, isPressed: boolean): void {
        this._key_pressed.set(keyCode, isPressed);
    }
}