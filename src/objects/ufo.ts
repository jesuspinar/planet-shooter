
import { GameObj, Vec2 } from "kaplay"
import { GameContext } from "../types/gameContext"

export function createUFO(k: GameContext, pos: Vec2, speed: number): GameObj {
  return k.add(
    [
      k.sprite("ufo"),
      k.pos(pos),
      k.area(),
      k.scale(0.07),
      k.move(k.DOWN, speed),
      "ufo",
      { value: 10 }
    ])
}
