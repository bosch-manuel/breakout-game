import { ISubject } from "./ISubject";

export class BasicSubject implements ISubject {
    private _observers: Map<any, Function> = new Map<any, Function>();

    public subscribe(observer: any, callBack: Function): void {
        if (!this._observers.has(observer)) {
            this._observers.set(observer, callBack);
        }
    }

    public unsubcribe(observer: any): void {
        let index = this._observers.has(observer);
        if (this._observers.has(observer)) {
            this._observers.delete(observer);
        }
    }

    public get amountObservers(): number {
        return this._observers.size;
    }

    /**
     * Calls the callback for every observer
     */
    protected notify(): void {
        this._observers.forEach((callBack: Function) => callBack());
    }

}
