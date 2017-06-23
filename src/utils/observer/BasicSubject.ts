import { ISubject } from "./ISubject";
import { IObserver } from "./IObserver";

export class BasicSubject implements ISubject {
    private _observers: IObserver[];

    public subscribe(observer: IObserver): void {
        if (this._observers.indexOf(observer) == -1) {
            this._observers.push(observer);
        }
    }

    public unsubcribe(observer: IObserver): void {
        let index = this._observers.indexOf(observer);
        if (index > -1) {
            this._observers.splice(index, 1);
        }
    }

    public get observers(): Array<IObserver> {
        return this._observers;
    }

    private notify(): void {
        this._observers.forEach((observer: IObserver) => observer.update());
    }

}