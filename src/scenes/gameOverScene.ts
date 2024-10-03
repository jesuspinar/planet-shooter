import { GameContext } from "../types/gameContext";

export function gameOverScene(k: GameContext) {
	return (score: number) => {
		k.add([k.text(`Game Over!\nYour score: ${score}`), k.pos(k.width() / 2, k.height() / 2)]);

		k.onKeyPress("space", () => {
			k.go("game");
		});
	};
}
