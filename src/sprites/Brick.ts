import { Vector } from "~/types";
import { Sprite } from "./Sprite";

export class Brick extends Sprite {

    constructor(
        brickWidth: number,
        brickHeight: number,
        brickPosition: Vector,
        brickImage: string,
        private brickEnergy: number
    ) {
        super(brickWidth, brickHeight, brickPosition, brickImage);
        this.brickEnergy = brickEnergy;
    }

    // Getters
    get energy(): number { return this.brickEnergy; }

    // Setters
    set energy(energy: number) { this.brickEnergy = energy; }
}