import { GameContext } from "../types/gameContext"

export function gameOverScene(k: GameContext) {
  return (score: number) => {
    k.add([k.text(`Game Over!\nYour score: ${score}`)])

    const startButton = k.add([
      k.text("Restart", { size: 32 }),
      k.pos(0, 150),
      k.area({ cursor: "pointer" }),
      { isStartButton: true },
    ])

    startButton.onClick(() => {
      k.go("game")
    })
  }
}
