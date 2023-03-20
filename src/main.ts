import _ from "lodash";
import { getRandomInt, mod } from "./utils";
import gameConfig from "./config.json";
import { DodgerGame, GameGrid } from "./game";

// set config & state

type GameParams = typeof gameConfig;
const gameParams: GameParams = _.cloneDeep(gameConfig);

// function updateInput(element: HTMLInputElement, gameParam: keyof GameParams) {
// 	element.addEventListener("input", () => {
// 		gameParams[gameParam] = Number(element.value);
// 		resetGame();
// 	});
// }

const gameGridElement = document.querySelector("#game-grid") as HTMLElement;
const scoreDisplayElement = document.querySelector("#score") as HTMLElement;
// const noPlayersInput = document.querySelector("#noPlayers") as HTMLInputElement;
// const noEnemiesInput = document.querySelector("#noEnemies") as HTMLInputElement;
// const defaultDelayInput = document.querySelector(
// 	"#defaultDelay"
// ) as HTMLInputElement;

const game = new DodgerGame(gameGridElement, scoreDisplayElement, gameConfig);

game.init();
game.gameState.gameStarted = true;
game.gameLoop();
