import { GameContext } from "../types/gameContext";

export function gameOverScene(k: GameContext) {
	return (score: number) => {
		// Add background
		k.add([k.sprite("background"), k.scale(3)]);
		k.add([k.text(`Game Over!\nYour score: ${score}`)]);

		const startButton = k.add([
      k.text("Restart", { size: 32 }),
      k.pos(0, 150),
      k.area({ cursor: "pointer" }),
      { isStartButton: true },
    ]);

    startButton.onClick(() => {
      k.go("game");
    });
	};
}
