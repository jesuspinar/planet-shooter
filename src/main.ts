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
  k.loadSprite("planet", "/sprites/n97.png")
  k.loadSprite("ufo", "/sprites/ufo.png")
  k.loadSprite("background", "/sprites/background.png")
  k.loadSprite("earth", "/sprites/earth.png")
  k.loadSprite("jupiter", "/sprites/jupiter.png")
  k.loadSprite("mars", "/sprites/mars.png")
  k.loadSprite("mercury", "/sprites/mercury.png")
  k.loadSprite("neptune", "/sprites/neptune.png")
  k.loadSprite("saturn", "/sprites/saturn.png")
  k.loadSprite("uranus", "/sprites/uranus.png")
  k.loadSprite("venus", "/sprites/venus.png")

  // Add scenes
  k.scene("start", () => startScene(k))
  k.scene("game", () => gameScene(k))
  k.scene("gameOver", gameOverScene(k))

  return k
}

initGame().go("start")
