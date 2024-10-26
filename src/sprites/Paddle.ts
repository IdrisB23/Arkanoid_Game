import {Vector} from "~/types";
import { Sprite } from "./Sprite";

export class Paddle extends Sprite {
    private moveRight: boolean;
    private moveLeft: boolean;

    constructor(
        private paddleSpeed: number,
        paddleWidth: number,
        paddleHeight: number,
        paddlePosition: Vector,
        paddleImage: string
    ) {
        super(paddleWidth, paddleHeight, paddlePosition, paddleImage);
        this.paddleSpeed = paddleSpeed;
        this.moveRight = false;
        this.moveLeft = false;
        // Event Listeners
        document.addEventListener('keyup', this.handleKeyUp);
        document.addEventListener('keydown', this.handleKeyDown);
    }

    // Getters
    get isMovingRight(): boolean { return this.moveRight; }
    get isMovingLeft(): boolean { return this.moveLeft; }
    // Setters


    // Methods
    movePaddle(): void {
        if(this.moveRight) this.position.x += this.paddleSpeed; // access parent/super attribute via parent getter
        if(this.moveLeft) this.position.x -= this.paddleSpeed; // access parent/super attribute via parent getter
    }

    handleKeyUp = (e: KeyboardEvent): void => {
        if (e.code == "ArrowLeft" || e.key == "ArrowLeft") this.moveLeft = false;
        if (e.code == "ArrowRight" || e.key == "ArrowRight") this.moveRight = false;
    };

    handleKeyDown = (e: KeyboardEvent): void => {
        if (e.code == "ArrowLeft" || e.key == "ArrowLeft") this.moveLeft = true;
        if (e.code == "ArrowRight" || e.key == "ArrowRight") this.moveRight = true;
    };
}