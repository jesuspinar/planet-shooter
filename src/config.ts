import { PlanetType } from "./types/planetType";
// UI
export const GAME_WIDTH = 800;
export const GAME_HEIGHT = 600;
// SPEED
export const INITIAL_PLANET_SPEED = 120;
export const INITIAL_UFO_SPEED = 180;
export const PLANET_SPEED_INCREMENT = 12;
export const UFO_SPEED_INCREMENT = 18;
// SPAWN TIME
export const PLANET_SPAWN_TIME = 1.5;
export const UFO_SPAWN_TIME = 3;
// LIFE
export const INITIAL_LIFE = 3;

export const PLANET_TYPES: PlanetType[] = [
	{ sprite: "mercury", value: 1, color: [200, 200, 200], scale: 0.1 },
	{ sprite: "venus", value: 2, color: [255, 198, 73], scale: 0.27 },
	{ sprite: "earth", value: -1, color: [107, 147, 214], scale: 0.27 },
	{ sprite: "mars", value: 3, color: [193, 68, 14], scale: 0.16 },
	{ sprite: "jupiter", value: 4, color: [216, 202, 157], scale: 0.3 },
	{ sprite: "saturn", value: 5, color: [244, 208, 63], scale: 0.25 },
	{ sprite: "uranus", value: 6, color: [209, 231, 231], scale: 0.19 },
	{ sprite: "neptune", value: 7, color: [91, 93, 223], scale: 0.18 },
];
