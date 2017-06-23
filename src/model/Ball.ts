import { Point } from "./Point"

export class Ball {
    private _radius: number;
    private _position: Point;

    constructor(radius = 10, startPos: Point = new Point(0, 0)) {
        this._radius = radius;
        this._position = startPos;
    }

    public get radius(): number {
        return this._radius;
    }

    public set position(newPos: Point) {
        this._position = newPos;
    }

    public get position(): Point {
        return this._position;
    }
}