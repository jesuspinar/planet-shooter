import { SceneDef } from "kaplay"
import { GameContext } from "../types/GameContext"

export const GameOverScene = (k: GameContext): SceneDef => {
  return (score: number) => {
    // Score text
    k.add(
      [
        k.text(`${score}`),
        k.pos(k.width() / 2, k.height() / 2 - 75),
        k.anchor("center"),
      ]
    )
    // Game over text
    k.add(
      [
        k.text("GAME OVER!"),
        k.pos(k.width() / 2, k.height() / 2 - 35),
        k.anchor("center"),
      ]
    )
    // Restart button
    const restartButton = k.add([
      k.text("RESTART", { size: 32 }),
      k.area(),
      k.pos(k.width() / 2, k.height() / 2 + 30),
      k.anchor("center"),
      { isStartButton: true },
    ])

    restartButton.onHoverUpdate(() => {
      k.setCursor("pointer")
    })
    restartButton.onHoverEnd(() => {
      k.setCursor("default")
    })

    restartButton.onClick(() => k.go("game"))
  }
}
