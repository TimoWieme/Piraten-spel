import { gameObject } from "./gameobject.js"

export class Background extends gameObject {

    constructor(tag: HTMLElement) {
        super("background")
        this.x = 0
        tag.prepend(this.div)
    }

    public update() {
        // Make the background move
        this.x--
        this.div.style.backgroundPosition = `${this.x}px 0px`
    }
}