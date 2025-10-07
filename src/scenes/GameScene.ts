import { createPlanet } from "../objects/Planet"
import { createUFO } from "../objects/UFO"
import {
  PLANET_TYPES,
  PLANET_SPAWN_TIME,
  UFO_SPAWN_TIME,
  INITIAL_LIFE,
  INITIAL_UFO_SPEED,
  INITIAL_PLANET_SPEED,
  PLANET_SPEED_INCREMENT,
  UFO_SPEED_INCREMENT,
  MARGIN_L,
  MARGIN_R
} from "../config"
import { GameContext } from "../types/GameContext"
import { GameObj, SceneDef } from "kaplay"

export const GameScene = (k: GameContext): SceneDef => {
  return () => {
    let missedPlanets = 0
    let planetSpeed = INITIAL_PLANET_SPEED
    let ufoSpeed = INITIAL_UFO_SPEED

    // Add score
    k.score = k.add([k.text("Score: 0"), k.pos(10, 10), { value: 0 }]) as GameContext["score"]

    // Add life
    k.life = k.add([k.text(`Life: ${INITIAL_LIFE}`), k.pos(10, 50), { value: INITIAL_LIFE }]) as GameContext["life"]

    // Spawn objects
    k.loop(PLANET_SPAWN_TIME, () => {
      const planetType = k.choose(PLANET_TYPES)
      const xPos = k.rand(MARGIN_L, k.width() - MARGIN_R)
      createPlanet(k, k.vec2(xPos, 0), planetType, (planetSpeed += PLANET_SPEED_INCREMENT))
    })

    k.loop(UFO_SPAWN_TIME, () => {
      const xPos = k.rand(MARGIN_L, k.width() - MARGIN_R)
      createUFO(k, k.vec2(xPos, 0), (ufoSpeed += UFO_SPEED_INCREMENT))
    })

    // Handle clicks
    k.onClick("planet", (p: GameObj) => {
      k.destroy(p)
      if (p.value < 0) {
        if (k.life.value <= 0) {
          k.go("gameOver", k.score.value)
        }
        k.life.value += p.value
        k.life.text = `Life: ${k.life.value}`
      } else {
        k.score.value += p.value
        k.score.text = `Score: ${k.score.value}`
      }
    })

    k.onClick("ufo", (u: GameObj) => {
      k.destroy(u)
      k.score.value += u.value * 2
      k.score.text = `Score: ${k.score.value}`
      missedPlanets = 0
    })

    // Destroy planets that go off screen
    const destroyOffscreen = (obj: GameObj) => {
      if (obj.pos.y > k.height()) {
        k.destroy(obj)

        missedPlanets += 1
        if (missedPlanets === 3) {
          k.life.value -= 1
          k.life.text = `Life: ${k.life.value}`
          missedPlanets = 0

          if (k.life.value <= 0) {
            k.go("gameOver", k.score.value)
          }
        }
      }
    }

    k.onUpdate("planet", destroyOffscreen)
  }
}
