import { GameObj, Vec2 } from "kaboom";
import { GameContext } from "../types/gameContext";

export function createUFO(k: GameContext, pos: Vec2, speed: number): GameObj {
	return k.add([k.sprite("ufo"), k.pos(pos), k.area(), k.scale(0.05), k.move(k.DOWN, speed), "ufo", { value: 10 }]);
}
