import { createPlanet } from "../objects/planet";
import { createUFO } from "../objects/ufo";
import { PLANET_TYPES, PLANET_SPAWN_TIME, UFO_SPAWN_TIME, INITIAL_LIFE } from "../config";
import { GameContext } from "../types/gameContext";
import { GameObj } from "kaboom";

export function gameScene(k: GameContext) {
	// Add background
	k.add([k.sprite("background"), k.pos(0, 0), k.scale(1)]);

	// Add score
	k.score = k.add([k.text("Score: 0"), k.pos(10, 10), { value: 0 }]) as GameContext["score"];

	// Add life
	k.life = k.add([k.text(`Life: ${INITIAL_LIFE}`), k.pos(10, 40), { value: INITIAL_LIFE }]) as GameContext["life"];

	// Spawn objects
	k.loop(PLANET_SPAWN_TIME, () => {
		const planetType = k.choose(PLANET_TYPES);
		createPlanet(k, k.vec2(k.rand(0, k.width()), 0), planetType);
	});

	k.loop(UFO_SPAWN_TIME, () => {
		createUFO(k, k.vec2(k.rand(0, k.width()), 0));
	});

	// Handle clicks
	k.onClick("planet", (p: GameObj) => {
		k.destroy(p);
		k.score.value += p.value;
		k.score.text = `Score: ${k.score.value}`;
		if (p.value < 0) {
			k.life.value += p.value;
			k.life.text = `Life: ${k.life.value}`;
			if (k.life.value <= 0) {
				k.go("gameOver", k.score.value);
			}
		}
	});

	k.onClick("ufo", (u: GameObj) => {
		k.destroy(u);
		k.score.value += u.value * 2;
		k.score.text = `Score: ${k.score.value}`;
	});

	// Destroy objects that go off screen
	const destroyOffscreen = (obj: GameObj) => {
		if (obj.pos.y > k.height()) {
			k.destroy(obj);
		}
	};

	k.onUpdate("planet", destroyOffscreen);
	k.onUpdate("ufo", destroyOffscreen);
}
