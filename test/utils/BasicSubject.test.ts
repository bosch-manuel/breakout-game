import { BasicSubject } from "../../src/utils/observer/BasicSubject"
import { assert } from "chai";

describe('Check BasicSubject functionality', () => {
    let subject:BasicSubject;
    let oberserver: DummyObserver;
    beforeEach(() => {
        subject = new BasicSubject();
        oberserver = new DummyObserver();
    });

    it(`Subscribe: `, () => {
        subject.subscribe(oberserver, oberserver.notify.bind(oberserver));
        assert.equal(subject.amountObservers, 1);
    });

    it(`Unsubscribe: `, () => {
        subject.subscribe(oberserver, oberserver.notify.bind(oberserver));
        subject.unsubcribe(oberserver);
        assert.equal(subject.amountObservers, 0);
    });
});

export class DummyObserver {
    notificationCount: number = 0;

    notify(): void {
        this.notificationCount++;
    }
}