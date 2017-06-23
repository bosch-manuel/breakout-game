import { Point } from "../../src/model/Point"
import {assert} from "chai";

describe('Check Point functionality', () => {
    const fixture = [
        //x,y
        [1, 2],
        [-111, 22],
        [31, 22],
    ]

    fixture.forEach(function (input) {
        let point = new Point(input[0],input[1]);
        it(`Point(${input[0]},${input[1]}).x should return ${input[0]}`, () => {
                assert.equal(input[0],point.x);
        });
        it(`Point(${input[0]},${input[1]}).y should return ${input[1]}`, () => {
                assert.equal(input[1],point.y);
        });
    });
});