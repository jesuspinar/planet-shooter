import { GameContext } from "../types/gameContext"

export function startScene(k: GameContext) {
  const titleSize = 48
  const startButtonSize = 32

  const title = k.add(
    [
      k.text("PLANET SHOOTER", { size: titleSize }),
      k.pos(0, 0)
    ]
  )

  const titleWidth = title.text.length * (titleSize * 0.6)
  title.pos.x = (k.width() - titleWidth) / 2
  title.pos.y = k.height() / 2 - 60

  const startButton = k.add(
    [
      k.text("Start", { size: startButtonSize }),
      k.area({ cursor: "pointer" }),
      k.pos(0, 0)
    ]
  )

  const buttonWidth = startButton.text.length * (startButtonSize * 0.6)
  startButton.pos.x = (k.width() - buttonWidth) / 2
  startButton.pos.y = k.height() / 2 + 60

  startButton.onClick(() => k.go("game"))
}
