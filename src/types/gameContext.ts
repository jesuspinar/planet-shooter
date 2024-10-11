import { GameObj, KAPLAYCtx } from "kaplay"

export interface GameContext extends KAPLAYCtx {
  score: GameObj & { value: number }
  life: GameObj & { value: number }
}
