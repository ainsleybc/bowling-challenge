'use strict';

function Game() {
  this._frame = new Frame();
  this._frames = [];
};

Game.prototype.currentFrame = function () {
  return this._frames.length + 1;
}

Game.prototype.pinsRemaining = function () {
  return this._frame.pinsRemaining();
};

Game.prototype.roll = function (pins) {
  this._frame.roll(pins);
  this._completeRoll();
};

Game.prototype.currentRoll = function () {
  return this._frame.rollNumber();
};

Game.prototype._completeRoll = function () {

  if (this._frame.isComplete()) {
    this._frames.push(this._frame);
    this._frame = new Frame();
  };  

};

Game.prototype.score = function () {
  return this._frames.map(this.frameScore ,this).reduce(this._sum, 0);
};

Game.prototype.frameScore = function (frame) {
  return frame.rolls().reduce(this._sum, 0);
};

Game.prototype._sum = function (a, b) {
  return a + b;
};