

function Airport() {
  this.hangar =  [];
};

Airport.prototype.showHangar = function() {
  // the prototype key word binds this method to the Airport object.
  return this.hangar;
};

Airport.prototype.land = function(plane) {
  this.hangar.push(plane)
  // this function adds a plane to the hangar array when one has landed.
};

Airport.prototype.takeOff = function(plane) {
  this.hangar.filter(function(eachPlane){ return eachPlane != plane })
  // this function 
};
