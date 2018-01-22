export class Queue<T> {
    private container: Array<T> = [];
    private size: number = 0;
    private capacity: number = 0;

    constructor(capiticty: number) {
        this.capacity = capiticty;
    }

    /**
     * Adds and Element to the queues end if there is still free space left.
     * 
     * @param element 
     * @returns true = element was added; false= element was not added (queue already full)
     */
    public push(element: T): boolean {
        let wasAdded: boolean = false;
        if (this.capacity < this.size) {
            this.container.push(element);
            wasAdded = true;
            this.size++;
        }
        return wasAdded;
    }
}