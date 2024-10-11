import { GameContext } from "../types/gameContext"

export function gameOverScene(k: GameContext) {
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
        k.text("Game Over!"),
        k.pos(k.width() / 2, k.height() / 2 - 35),
        k.anchor("center"),
      ]
    )
    // Restart button
    const restartButton = k.add([
      k.text("Restart?", { size: 32 }),
      k.area({ cursor: "pointer" }),
      k.pos(k.width() / 2, k.height() / 2 + 30),
      k.anchor("center"),
      { isStartButton: true },
    ])

    restartButton.onClick(() => k.go("game"))
  }
}
