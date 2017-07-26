import { Point } from "./Point"
import { BasicSubject } from "../utils/observer/BasicSubject";

export class BallModel extends BasicSubject {
    private _radius: number;
    private _position: Point;
    private _color: string;
    private _velocity: number;
    private _angle: number;//in rad

    constructor(radius = 10, startPos: Point = new Point(0, 0), color = "#0095DD", velocity: number = 100) {
        super();
        this._radius = radius;
        this._position = startPos;
        this._color = color;
        this._velocity = velocity;
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

    /**
     * pixel per second
     */
    public set velocity(velocity: number) {
        this._velocity = velocity;
    }

    public get velocity(): number {
        return this._velocity;
    }

    public get angle(): number {
        return this._angle;
    }

    public set angle(value: number) {
        this._angle = value;
    }


    public clone(): BallModel {
        return new BallModel(this.radius, new Point(this.position.x, this.position.y));
    }
}