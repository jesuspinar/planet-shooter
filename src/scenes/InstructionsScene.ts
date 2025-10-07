
import { SceneDef } from "kaplay"
import { GameContext } from "../types/GameContext"
import { INSTRUCTIONS } from "../config"

export const InstructionsScene = (k: GameContext): SceneDef => {
  return () => {
    const textSize = 24
    const instructions = INSTRUCTIONS

    k.add([
      k.text("HOW TO PLAY", { size: 36 }),
      k.pos(k.width() / 2, 80),
      k.anchor("center"),
    ])

    instructions.forEach((line, i) => {
      k.add([
        k.text(line, { size: textSize }),
        k.pos(k.width() / 2, 160 + i * 50),
        k.anchor("center"),
      ])
    })

    // BACK Button
    const backButton = k.add([
      k.rect(180, 70, { radius: 8 }),
      k.area(),
      k.pos(k.width() / 2, k.height() - 70),
      k.anchor("center"),
    ])
    backButton.add([
      k.text("BACK", { size: 28 }),
      k.anchor("center"),
      k.color(0, 0, 0),
    ])
    backButton.onHoverUpdate(() => k.setCursor("crosshair"))
    backButton.onHoverEnd(() => k.setCursor("default"))
    backButton.onClick(() => k.go("start"))
  }
}
