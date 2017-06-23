import { IObserver } from "./IObserver";

export interface ISubject {
    /**
     * Adds an observer to the subject
     */
    subscribe(observer: IObserver): void;
    /**
     * Removes an observer to the subject
     */
    unsubcribe(observer: IObserver): void;

    observers:Array<IObserver>;
}