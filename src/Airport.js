
'use strict';

function Airport(){
  this.hangar = [];
  this.capacity = 1;
}
Airport.prototype.hangar = function(){ return this.hangar; };

Airport.prototype.clearForLanding = function(plane) {
  if (this.isStormy()){
    throw 'cannot land'}
  else if (this.isFull()){
    throw 'cannot land'
  }
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
Airport.prototype.isFull = function() {
  if(this.capacity === this.hangar.length) {
    return true }
  else {
    return false
  }
}
