import { GameObj, KaboomCtx } from "kaboom";

export interface GameContext extends KaboomCtx {
  score: GameObj & { value: number };
  life: GameObj & { value: number };
}
