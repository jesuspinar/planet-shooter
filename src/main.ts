import { gameScene } from "./scenes/gameScene"
import { GameContext } from "./types/gameContext"
import { gameOverScene } from "./scenes/gameOverScene"
import { startScene } from "./scenes/startScene"
import kaplay, { KAPLAYCtx } from "kaplay"

export function initGame(): KAPLAYCtx {
  const k = kaplay({
    scale: 1.5,
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
  k.scene("start", () => startScene(k))
  k.scene("game", () => gameScene(k))
  k.scene("gameOver", gameOverScene(k))

  return k
}

initGame().go("start")
