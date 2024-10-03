import { PlanetType } from "./types/planetType";

export const GAME_WIDTH = 800;
export const GAME_HEIGHT = 600;
export const PLANET_SPEED = 120;
export const UFO_SPEED = 180;
export const PLANET_SPAWN_TIME = 1.5;
export const UFO_SPAWN_TIME = 3;
export const INITIAL_LIFE = 10;

export const PLANET_TYPES: PlanetType[] = [
	{ sprite: "mercury", value: 1, color: [200, 200, 200] }, // Mercury
	{ sprite: "venus", value: 2, color: [255, 198, 73] }, // Venus
	{ sprite: "earth", value: -2, color: [107, 147, 214] }, // Earth
	{ sprite: "mars", value: 3, color: [193, 68, 14] }, // Mars
	{ sprite: "jupiter", value: 4, color: [216, 202, 157] }, // Jupiter
	{ sprite: "saturn", value: 5, color: [244, 208, 63] }, // Saturn
	{ sprite: "uranus", value: 6, color: [209, 231, 231] }, // Uranus
	{ sprite: "neptune", value: 7, color: [91, 93, 223] }, // Neptune
];
