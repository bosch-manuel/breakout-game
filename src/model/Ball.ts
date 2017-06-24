import { Point } from "./Point"
import { BasicSubject } from "../utils/observer/BasicSubject";

export class Ball extends BasicSubject {
    private _radius: number;
    private _position: Point;
    private _color: string;

    constructor(radius = 10, startPos: Point = new Point(0, 0), color = "#0095DD") {
        super();
        this._radius = radius;
        this._position = startPos;
        this._color = color;
    }

    public get radius(): number {
        return this._radius;
    }

    public set position(newPos: Point) {
        this._position = newPos;
        this.notify();
    }

    public get position(): Point {
        return this._position;
    }

    public get color(): string {
        return this._color;
    }

    public clone(): Ball {
        return new Ball(this.radius, new Point(this.position.x, this.position.y));
    }
}