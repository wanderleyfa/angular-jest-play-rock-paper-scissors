import { Game } from "./Game";
import { GameService } from "./GameService.component";
import { Player } from "./Player";

describe('GameService', () => {

  it('testa o empate ', () => {
      let _game = new Game(new Player('Primeiro Jogador'),new Player('Segundo Jogador'), "Rock", "Rock");
      let _GameService = new GameService(_game).resultado;
      expect(_GameService).toBe('Draw');
  });

  it('Rock ganha ', () => {
      let _game = new Game(new Player('Primeiro Jogador'),new Player('Segundo Jogador'), "Rock", "Scissors");
      let _GameService = new GameService(_game).resultado;
      expect(_GameService).toBe('Primeiro Jogador win !');
  });

  it('Scissors Ganha ', () => {
      let _game = new Game(new Player('Primeiro Jogador'),new Player('Segundo Jogador'), "Scissors", "Paper");
      let _GameService = new GameService(_game).resultado;
      expect(_GameService).toBe('Primeiro Jogador win !');
  });

  it('Paper ganha ', () => {
      let _game = new Game(new Player('Primeiro Jogador'),new Player('Segundo Jogador'), "Rock", "Paper");
      let _GameService = new GameService(_game).resultado;
      expect(_GameService).toBe('Segundo Jogador win !');
  });

  it('Scissors perde ', () => {
      let _game = new Game(new Player('Primeiro Jogador'),new Player('Segundo Jogador'), "Scissors", "Rock");
      let _GameService = new GameService(_game).resultado;
      expect(_GameService).toBe('Segundo Jogador win !');
  });
});
