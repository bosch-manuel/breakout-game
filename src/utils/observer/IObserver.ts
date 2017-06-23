export interface IObserver {
    /**
     * Will be called by subjects for subscribed oberservers
     */
    update(): void;
}