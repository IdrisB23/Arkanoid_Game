import {Vector} from "~/types";
import { Sprite } from "./Sprite";

export class Ball extends Sprite {
    private speedVec: Vector;

    constructor(
        ballSize: number,
        speed: number,
        position: Vector,
        image: string,
    ) {
        super(
            ballSize, ballSize, // ball is a square image -> WIDTH == HEIGHT
            position, image
        );
        this.speedVec = {
            x: speed,
            y: -speed
        };
    }

    // Getters
    get speedVector(): Vector { return this.speedVec; }

    // Methods
    changeYDirection(): void {
        this.speedVec.y = -this.speedVec.y;
    }
    changeXDirection(): void {
        this.speedVec.x = -this.speedVec.x;
    }

    moveBall(): void {
        this.position.x += this.speedVec.x;
        this.position.y += this.speedVec.y;
    }

}