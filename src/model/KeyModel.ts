export class KeyModel {
    private _key_pressed: Map<number, boolean>;

    constructor() {
        this._key_pressed = new Map<number, boolean>();
    }
    
    public isKeyPressed(keyCode: number): boolean {
        return this._key_pressed.has(keyCode) && this._key_pressed.get(keyCode);
    }

    public setKeyState(keyCode: number, isPressed: boolean): void {
        this._key_pressed.set(keyCode, isPressed);
    }
}