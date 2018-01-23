export class Queue<T> {
    static pop(): any {
        throw new Error("Method not implemented.");
    }

    static size(arg0: any, arg1: any): any {
        throw new Error("Method not implemented.");
    }

    private _container: Array<T> = [];
    private _size: number = 0;
    private _capacity: number = 0;

    constructor(capiticty: number) {
        this._capacity = capiticty;
    }

    /**
     * Adds and Element to the queues end if there is still free space left.
     * 
     * @param element 
     * @returns true = element was added; false= element was not added (queue already full)
     */
    public push(element: T): boolean {
        let wasAdded: boolean = false;
        if (this._capacity > this._size) {
            this._size = this._container.push(element);
            wasAdded = true;
        }
        return wasAdded;
    }

    /**
     * Removes the last element of the queue.
     * 
     * @returns last element of queue
     */
    public pop(): T {
        let element: T = null;
        if (this._size > 0) {
            element = this._container.shift();
            this._size--;
        }
        return element;
    }

    public get capacity(): number {
        return this._capacity;
    }

    public get size(): number {
        return this._size;
    }
}