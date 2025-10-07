
import { GameObj, Vec2 } from "kaplay"
import { GameContext } from "../types/GameContext"
import { PlanetType } from "../types/PlanetType"

export const createPlanet = (k: GameContext, pos: Vec2, type: PlanetType, speed: number): GameObj => {
  return k.add(
    [
      k.sprite(type.sprite),
      k.pos(pos),
      k.area(),
      k.scale(type.scale),
      k.color(k.rgb(type.color[0], type.color[1], type.color[2])),
      k.move(k.DOWN, speed),
      "planet",
      { value: type.value },
    ]
  )
}
