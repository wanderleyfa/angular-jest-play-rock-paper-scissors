import { Player } from "./Player";

export class Game {

  playerOne: Player;
  playerTwo: Player;
  movePlayerOne: string | undefined;
  movePlayerTwo: string | undefined;

  constructor(playerOne: Player, playerTwo: Player, movePlayerOne: string, movePlayerTwo: string) {
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.movePlayerOne = movePlayerOne;
    this.movePlayerTwo = movePlayerTwo;
  }

}