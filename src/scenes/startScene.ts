import { GameContext } from "../types/gameContext"

export function startScene(k: GameContext) {
  const titleSize = 38
  const startButtonSize = 32

  k.add(
    [
      k.text("PLANET SHOOTER", { size: titleSize }),
      k.pos(k.width() / 2, k.height() / 2),
      k.anchor("center"),
    ]
  )

  const startButton = k.add(
    [
      k.text("Start", { size: startButtonSize }),
      k.area({ cursor: "pointer" }),
      k.pos(k.width() / 2, k.height() / 2 + 60),
      k.anchor("center"),
    ]
  )

  startButton.onClick(() => k.go("game"))
}
