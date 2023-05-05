import { Game } from "./Game";
import { GameService } from "./GameService.component";
import { Player } from "./Player";

describe('GameService', () => {

  it('test the draw', () => {
      let _game = new Game(new Player('First Player'),new Player('Second Player'), "Rock", "Rock");
      let _GameService = new GameService(_game).resultado;
      expect(_GameService).toBe('Draw');
  });

  it('rock wins ', () => {
      let _game = new Game(new Player('First Player'),new Player('Second Player'), "Rock", "Scissors");
      let _GameService = new GameService(_game).resultado;
      expect(_GameService).toBe('First Player win !');
  });

  it('Scissors wins ', () => {
      let _game = new Game(new Player('First Player'),new Player('Second Player'), "Scissors", "Paper");
      let _GameService = new GameService(_game).resultado;
      expect(_GameService).toBe('First Player win !');
  });

  it('Paper wins ', () => {
      let _game = new Game(new Player('First Player'),new Player('Second Player'), "Rock", "Paper");
      let _GameService = new GameService(_game).resultado;
      expect(_GameService).toBe('Second Player win !');
  });

  it('Scissors lose ', () => {
      let _game = new Game(new Player('First Player'),new Player('Second Player'), "Scissors", "Rock");
      let _GameService = new GameService(_game).resultado;
      expect(_GameService).toBe('Second Player win !');
  });
});
