import kaplay from "kaplay"
import "kaplay/global"

const k = kaplay()

k.loadSprite("mars", "sprites/mars.png")

k.add([
  k.pos(120, 80),
  k.sprite("mars"),
])

k.onClick(() => k.addKaboom(k.mousePos()))
