import { SceneDef } from "kaplay"
import { GameContext } from "../types/GameContext"


export const StartScene = (k: GameContext): SceneDef => {
  return () => {
    const titleSize = 38
    const buttonSize = 32

    // Title
    k.add([
      k.text("PLANET SHOOTER", { size: titleSize }),
      k.pos(k.width() / 2, k.height() / 2 - 80),
      k.anchor("center"),
    ])

    // START Button
    const startButton = k.add([
      k.rect(200, 80, { radius: 8 }),
      k.area(),
      k.pos(k.width() / 2, k.height() / 2),
      k.anchor("center"),
    ])
    startButton.add([
      k.text("START", { size: buttonSize }),
      k.anchor("center"),
      k.color(0, 0, 0),
    ])
    startButton.onHoverUpdate(() => k.setCursor("crosshair"))
    startButton.onHoverEnd(() => k.setCursor("default"))
    startButton.onClick(() => k.go("game"))

    // INSTRUCTIONS Button
    const instructionsButton = k.add([
      k.rect(200, 80, { radius: 8 }),
      k.area(),
      k.pos(k.width() / 2, k.height() / 2 + 100),
      k.anchor("center"),
    ])
    instructionsButton.add([
      k.text("INSTRUCTIONS", { size: 24 }),
      k.anchor("center"),
      k.color(0, 0, 0),
    ])
    instructionsButton.onHoverUpdate(() => k.setCursor("crosshair"))
    instructionsButton.onHoverEnd(() => k.setCursor("default"))
    instructionsButton.onClick(() => k.go("instructions"))
  }
}
