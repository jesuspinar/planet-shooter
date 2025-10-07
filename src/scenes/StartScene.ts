import { SceneDef } from "kaplay"
import { GameContext } from "../types/GameContext"

export const StartScene = (k: GameContext): SceneDef => {
  return () => {
    const titleSize = 38
    const startButtonSize = 32

    k.add(
      [
        k.text("PLANET SHOOTER", { size: titleSize }),
        k.pos(k.width() / 2, k.height() / 2 - 30),
        k.anchor("center"),
      ]
    )

    const startButton = k.add(
      [
        k.rect(200, 80, { radius: 8 }),
        k.area(),
        k.pos(k.width() / 2, k.height() / 2 + 50),
        k.anchor("center"),
      ]
    )
    startButton.add(
      [
        k.text("START", { size: startButtonSize }),
        k.anchor("center"),
        k.color(0, 0, 0),
      ]
    )
    startButton.onHoverUpdate(() => {
      k.setCursor("crosshair")
    })
    startButton.onHoverEnd(() => {
      k.setCursor("default")
    })

    startButton.onClick(() => k.go("game"))
  }
}
