export interface ISubject {
    /**
     * Adds an observer to the subject
     */
    subscribe(observer: any, callBack:Function): void;
    /**
     * Removes an observer to the subject
     */
    unsubcribe(observer: any): void;
}
