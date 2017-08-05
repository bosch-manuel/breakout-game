import { DummyObserver } from "../utils/BasicSubject.test";
import { BallModel } from "../../src/model/BallModel"
import Point = require("victor");
import { assert } from "chai";


describe('Check Ball position updates', () => {
    const fixture = [
        //x,y
        new Point(1, 2),
        new Point(-111, 22),
        new Point(31, 22)
    ]
    let ball: BallModel = new BallModel();
    let observer: DummyObserver = new DummyObserver();
    ball.subscribe(observer, observer.notify.bind(observer));

    fixture.forEach(function (input, index) {
        it(`Change position to (${input.x},${input.y}) notification count should be ${index + 1}  `, () => {
            ball.position = input;
            assert.equal(observer.notificationCount, index + 1);
        });
    });

    it(`Notification count should stay unchanged after unsubscribing`, () => {
        let ball: BallModel = new BallModel();
        let observer: DummyObserver = new DummyObserver();
        ball.subscribe(observer, observer.notify.bind(observer));
        fixture.forEach(function (input, index) { ball.position = input; });
        let oldCount = observer.notificationCount;
        ball.unsubcribe(observer);
        fixture.forEach(function (input, index) { ball.position = input; });
        assert.equal(oldCount, observer.notificationCount);
    });
});