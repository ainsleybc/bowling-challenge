'use strict';

function Game() {
  this._frame = new Frame();
  this._frames = [];
  this._pendingFrames = [];
};

Game.prototype = {
  
  currentFrame: function () {
    return this._frames.length + 1;
  },

  pinsRemaining: function () {
    return this._frame.pinsRemaining();
  },

  bowl: function (pins) {
    if (this.isComplete() && !this.isAllowExtraBowl()) throw new Error('Game has been completed');
    this._addBonuses(pins);
    if (!this.isComplete()) {
      this._frame.bowl(pins);
      this._completeBowl();
    };
  },

  currentRound: function () {
    return this._frame.bowlRound();
  },

  score: function () {
    return this._frames.map(this.frameScore, this).reduce(this._sum, 0);
  },

  frameScore: function (frame) {
    return frame.bowls().reduce(this._sum, 0);
  },

  isAllowExtraBowl: function () {
    return this._frames[this._frames.length - 1].isPendingBonus();
  },

  isComplete: function () {
    return this._frames.length >= 10;
  },

  _completeBowl: function () {
    if (this._frame.isComplete()) {
      this._frames.push(this._frame);
      if (!this.isComplete()) this._frame = new Frame();
    };
  },

  _sum: function (a, b) {
    return a + b;
  },

  _addBonuses: function (pins) {

    this._frames.forEach(function (frame) {
      if (frame.isPendingBonus()) {
        frame.addBonus(pins);
      };
    });

  }

};
