'use strict';

describe('Game', function () {

  var game;

  beforeEach(function () {
    game = new Game();
  })
  
  describe('frame', function () {
    
    it('starts on the first frame', function () {
      expect(game.currentFrame()).toEqual(1);
    });
    it('moves onto next frame when complete', function () {
      game.roll(7);
      game.roll(3);
      expect(game.currentFrame()).toEqual(2);
    });

  })

  describe('pinsRemaining', function () {
    
    it('returns the remaining pins to knock down', function () {
      expect(game.pinsRemaining()).toEqual(10);
    });
  
  });

  describe('roll', function () {
    
    it('knocks down some pins', function () {
      game.roll(7);
      expect(game.pinsRemaining()).toEqual(3);
    });

  });

  describe('currentRoll', function () {

    it('returns what roll the player is currently on', function () {
      expect(game.currentRoll()).toEqual(1);
    });

  });

  describe('score', function () {

    describe('returns the curent score', function () {

      describe('after the first roll', function () {
        it('returns nothing', function () {
          game.roll(6);
          expect(game.score()).toEqual(0);
        });
      });
      describe('after the second roll', function () {
        it('returns the correct score', function () {
          game.roll(6);
          game.roll(3);
          expect(game.score()).toEqual(9);
        });
      });

    });

  });

});
