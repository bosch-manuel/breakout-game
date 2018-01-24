import { Queue } from "../../utils/queue/Queue"

export class KeyInputController {
    private _eventQueue: Queue<KeyboardEvent>;

    constructor() {
        this._eventQueue = new Queue<KeyboardEvent>(10);
        document.addEventListener("keydown", this.onKeyDown.bind(this));
        document.addEventListener("keyup", this.onKeyUp.bind(this));
    }

    public onKeyDown(event: KeyboardEvent): void {
        this._eventQueue.push(event);
    }

    public onKeyUp(event: KeyboardEvent): void {
        this._eventQueue.push(event);
    }

    public get eventQueue(): Queue<KeyboardEvent> {
        return this._eventQueue;
    }
}