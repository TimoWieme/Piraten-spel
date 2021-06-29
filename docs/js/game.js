import { EndScreen } from "./end.js";
import { GameScreen } from "./gamescreen.js";
import { StartScreen } from "./start.js";
export class Game {
    constructor() {
        this.showStartScreen();
        this.gameLoop();
    }
    showStartScreen() {
        this.screen = new StartScreen(this);
    }
    showGameScreen() {
        this.screen = new GameScreen(this);
    }
    showEndScreen() {
        this.screen = new EndScreen(this);
    }
    gameLoop() {
        this.screen.update();
        requestAnimationFrame(() => this.gameLoop());
    }
}
new Game();
//# sourceMappingURL=game.js.map