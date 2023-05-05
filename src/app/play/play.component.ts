import { Component, Input, OnInit } from '@angular/core';
import { GameService } from '../GameService/GameService.component';
import { Player } from '../GameService/Player';
import { Game } from '../GameService/Game';
@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css', '../app.component.css'],

})

export class PlayComponent{
  playerOne!: string ;
  playerTwo!: string;
  movePlayerOne!: string;
  movePlayerTwo!: string;
  resultOfTheGame!: string | Game;



  public playGame() {
    this.resultOfTheGame = new GameService(new Game(
      new Player(this.playerOne),
      new Player(this.playerTwo),
      this.movePlayerOne,
      this.movePlayerTwo)).resultado;
  }

  public clear() {
    this.playerOne = '';
    this.playerTwo = '';
    this.movePlayerTwo = '';
    this.movePlayerTwo = '';
    this.resultOfTheGame = '';
  }
}
