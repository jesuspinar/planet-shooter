import { GameObj, Vec2 } from "kaboom";

import { PLANET_SPEED } from "../config";
import { GameContext } from "../types/gameContext";
import { PlanetType } from "../types/planetType";

export function createPlanet(k: GameContext, pos: Vec2, type: PlanetType): GameObj {
	return k.add([
		k.sprite(type.sprite),
		k.pos(pos),
		k.area(),
		k.scale(type.scale),
		k.color(k.rgb(type.color[0], type.color[1], type.color[2])),
		k.move(k.DOWN, PLANET_SPEED),
		"planet",
		{ value: type.value },
	]);
}
