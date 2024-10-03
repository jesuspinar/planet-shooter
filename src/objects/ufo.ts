import { GameObj, Vec2 } from "kaboom";
import { UFO_SPEED } from "../config";
import { GameContext } from "../types/gameContext";

export function createUFO(k: GameContext, pos: Vec2): GameObj {
	return k.add([k.sprite("ufo"), k.pos(pos), k.area(), k.scale(0.05), k.move(k.DOWN, UFO_SPEED), "ufo", { value: 10 }]);
}
