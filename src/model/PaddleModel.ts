import Point = require("victor");

export class PaddelModel {
    private _width: number;
    private _height: number;
    private _position: Point;
    private _color: string;
    private _velocity: number; // pixel per second
    private _direction: Point;//direction of movement


	constructor(width: number, height: number, position: Point, color: string, velocity: number, direction: Point) {
		this._width = width;
		this._height = height;
		this._position = position;
		this._color = color;
		this._velocity = velocity;
		this._direction = direction;
	}

	public get width(): number {
		return this._width;
	}

	public get height(): number {
		return this._height;
	}

	public get position(): Point {
		return this._position;
	}

	public get color(): string {
		return this._color;
	}

	public get velocity(): number {
		return this._velocity;
	}

	public get direction(): Point {
		return this._direction;
	}
    
}