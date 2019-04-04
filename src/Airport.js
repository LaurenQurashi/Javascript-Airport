
'use strict';

function Airport(){
  this.hangar = [];
}
Airport.prototype.hangar = function(){ return this.hangar; };

Airport.prototype.clearForLanding = function(plane) {
  this.hangar.push(plane);
};

Airport.prototype.clearForTakeOff = function(plane) {
  if (this.isStormy()){
    throw 'cannot takeoff'}
  {this.hangar.pop()};
};

Airport.prototype.isStormy = function() {
  return false
}
// As an air traffic controller
// To ensure safety
// I want to prevent takeoff when weather is stormy
