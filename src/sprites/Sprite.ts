import { Vector } from "~/types";

export class Sprite {
    private spriteImage: HTMLImageElement = new Image();

    constructor(
        private spriteWidth: number,
        private spriteHeight: number,
        private spritePosition: Vector,
        image: string
    ) {
        this.spriteWidth = spriteWidth;
        this.spriteHeight = spriteHeight;
        this.spritePosition = spritePosition;
        this.spriteImage.src = image;
    }

    // Getters
    get width(): number { return this.spriteWidth; }
    get height(): number { return this.spriteHeight; }
    get position(): Vector { return this.spritePosition; }
    get image(): HTMLImageElement { return this.spriteImage; }

    // Setters
    set width(width: number) { this.spriteWidth = width; }
    set height(height: number) { this.spriteHeight = height; }
    set position(position: Vector) { this.spritePosition = position; }
    set image(image: HTMLImageElement) { this.spriteImage = image; }
}