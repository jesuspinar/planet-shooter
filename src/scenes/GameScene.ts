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
    let planetsPerSpawn = 1
    let spawnCounter = 0

    // Initialize score and life displays
    k.score = k.add([
      k.text("Score: 0"),
      k.pos(10, 10),
      { value: 0 }
    ]) as GameContext["score"]

    k.life = k.add([
      k.text(`Life: ${INITIAL_LIFE}`),
      k.pos(10, 50),
      { value: INITIAL_LIFE }
    ]) as GameContext["life"]

    // Helper functions
    const updateScore = (points: number) => {
      k.score.value += points
      k.score.text = `Score: ${k.score.value}`
    }

    const updateLife = (amount: number) => {
      k.life.value += amount
      k.life.text = `Life: ${k.life.value}`
      if (k.life.value <= 0) {
        k.go("gameOver", k.score.value)
      }
    }

    const getRandomX = () => k.rand(MARGIN_L, k.width() - MARGIN_R)

    // Spawn loops
    k.loop(PLANET_SPAWN_TIME, () => {
      planetSpeed += PLANET_SPEED_INCREMENT

      // Increase planets per spawn every 10 cycles
      spawnCounter++
      if (spawnCounter % 10 === 0) {
        planetsPerSpawn = Math.min(planetsPerSpawn + 1, 5) // Max 5 planets
      }

      // Spawn multiple planets with staggered timing
      for (let i = 0; i < planetsPerSpawn; i++) {
        k.wait(i * 0.321, () => {
          createPlanet(k, k.vec2(getRandomX(), -50), k.choose(PLANET_TYPES), planetSpeed)
        })
      }
    })

    k.loop(UFO_SPAWN_TIME, () => {
      ufoSpeed += UFO_SPEED_INCREMENT
      createUFO(k, k.vec2(getRandomX(), 0), ufoSpeed)
    })

    // Click handlers
    k.onClick("planet", (p: GameObj) => {
      k.destroy(p)
      if (p.value < 0) {
        updateLife(p.value)
      } else {
        updateScore(p.value)
      }
    })

    k.onClick("ufo", (u: GameObj) => {
      k.destroy(u)
      updateScore(u.value * 2)
      missedPlanets = 0
    })

    // Off-screen cleanup
    k.onUpdate("planet", (obj: GameObj) => {
      if (obj.pos.y > k.height()) {
        k.destroy(obj)
        // Don't count Earth (negative value) as missed
        if (obj.value > 0 && ++missedPlanets === 3) {
          updateLife(-1)
          missedPlanets = 0
        }
      }
    })
  }
}
