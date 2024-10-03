import { GameContext } from "../types/gameContext";

export function startScene(k: GameContext) {
	// Add bg
	k.add([k.sprite("background"), k.scale(3)]);

	k.add([k.text("Planet Shooter", { size: 48 })]);

	const startButton = k.add([
		k.text("Start", { size: 32 }),
		k.pos(0, 50),
		k.area({ cursor: "pointer" }),
		{ isStartButton: true },
	]);

	startButton.onClick(() => {
		k.go("game");
	});
}
