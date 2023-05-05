import { Injectable } from '@angular/core';
import { Game } from './Game';


export class GameService {
  resultado : any;
  constructor(game: Game) {
   this.resultado =game.playerTwo.name + " win !";

    if (game.movePlayerOne === game.movePlayerTwo) {
      this.resultado = "Draw";
    }

    if (game.movePlayerOne === "Rock" && game.movePlayerTwo === "Scissors") {
      this.resultado = game.playerOne.name + " win !";
    }

    if (game.movePlayerOne === "Scissors" && game.movePlayerTwo === "Paper") {
      this.resultado = game.playerOne.name + " win !";
    }

    if (game.movePlayerOne === "Paper" && game.movePlayerTwo === "Rock") {
      this.resultado = game.playerOne.name + " win !";
    }

  }

}