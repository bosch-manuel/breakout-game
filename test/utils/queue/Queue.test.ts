import { Queue } from "../../../src/utils/queue/Queue"
import { assert } from "chai";

describe('Check Queue functionality', () => {
    let queue: Queue<number>;
    let cap: number = 5;

    beforeEach(() => {
        queue = new Queue<number>(5);
    });

    it(`Capacity of "new Queue<number>(${cap})" should be ${cap}`, () => {
        assert.equal(queue.capacity, cap);
    });

    it('Size of emtpy queue should be 0', () => {
        assert.equal(queue.size, 0);
        queue.push(6);
        assert.equal(queue.size, 1);
    });

    let values: Array<number> = [1, 2, 3, 4, 5];
    it(`Push and pop keep fifo order`, () => {
        values.forEach((value, index) => {
            queue.push(value);
            assert.equal(queue.size, index + 1);
        });
        let valuesFromQueue: Array<number> = [];
        let size: number = queue.size;
        for (var i = 0; i < size; i++) {
            valuesFromQueue.push(queue.pop());
        }

        values.forEach((value, index) => {
            assert.equal(value, valuesFromQueue[index]);
        });
    });
});
