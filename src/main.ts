import { GameContext } from "./types/GameContext"
import { GameScene } from "./scenes/GameScene"
import { GameOverScene } from "./scenes/GameOverScene"
import { StartScene } from "./scenes/StartScene"
import kaplay, { KAPLAYCtx } from "kaplay"
import { InstructionsScene } from "./scenes/InstructionsScene"

export function initGame(): KAPLAYCtx {
  const k = kaplay({
    scale: 2.5,
    background: [0, 0, 0]
  }) as GameContext

  // Load assets
  k.loadSprite("ufo", "/planet-shooter/sprites/ufo.png")
  k.loadSprite("earth", "/planet-shooter/sprites/earth.png")
  k.loadSprite("jupiter", "/planet-shooter/sprites/jupiter.png")
  k.loadSprite("mars", "/planet-shooter/sprites/mars.png")
  k.loadSprite("mercury", "/planet-shooter/sprites/mercury.png")
  k.loadSprite("neptune", "/planet-shooter/sprites/neptune.png")
  k.loadSprite("saturn", "/planet-shooter/sprites/saturn.png")
  k.loadSprite("uranus", "/planet-shooter/sprites/uranus.png")
  k.loadSprite("venus", "/planet-shooter/sprites/venus.png")

  // Add scenes
  k.scene("start", StartScene(k))
  k.scene("game", GameScene(k))
  k.scene("gameOver", GameOverScene(k))
  k.scene("instructions", InstructionsScene(k))

  return k
}

initGame().go("start")
