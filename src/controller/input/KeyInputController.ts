export class KeyInputController {
    private eventQueue: Array<KeyboardEvent> = [];

    constructor() {
        document.addEventListener("keydown", this.onKeyDown.bind(this));
        document.addEventListener("keyup", this.onKeyUp.bind(this));
    }

    public onKeyDown(event: KeyboardEvent): void {
        this.eventQueue
    }

    public onKeyUp(event: Event): void {

    }
}