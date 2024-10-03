import kaboom, { KaboomCtx } from "kaboom";
import { GAME_WIDTH, GAME_HEIGHT } from "./config";
import { gameScene } from "./scenes/gameScene";
import { GameContext } from "./types/gameContext";
import { gameOverScene } from "./scenes/gameOverScene";

export function initGame(): KaboomCtx {
	const k = kaboom({
		global: false,
		width: GAME_WIDTH,
		height: GAME_HEIGHT,
		scale: 1,
		debug: true,
	}) as GameContext;

	// Load assets
	k.loadSprite("planet", "/sprites/n97.png");
	k.loadSprite("ufo", "/sprites/ufo.png");
	k.loadSprite("background", "/sprites/space-background.webp");
	k.loadSprite("earth", "/sprites/earth.png");
	k.loadSprite("jupiter", "/sprites/jupiter.png");
	k.loadSprite("mars", "/sprites/mars.png");
	k.loadSprite("mercury", "/sprites/mercury.png");
	k.loadSprite("neptune", "/sprites/neptune.png");
	k.loadSprite("saturn", "/sprites/saturn.png");
	k.loadSprite("uranus", "/sprites/uranus.png");
	k.loadSprite("venus", "/sprites/venus.png");

	// Add scenes
	k.scene("game", () => gameScene(k));
	k.scene("gameOver", gameOverScene(k));

	return k;
}
