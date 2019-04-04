// unit tests are written from the programmers perspective. They're made to
// ensure that a particulat method or object performs a specific set of tasks.


'use strict';

describe('Plane', function(){
  var plane;
  var airport;
  beforeEach(function() {
    plane = new Plane();
    airport = jasmine.createSpyObj('airport', ['clearForLanding', 'clearForTakeOff']);

    //this is stubbing the interaction in the plane unit test.
    //stubbing the outgoing interaction from plane to airport.
  });

  it('can land at an airport', function() {
    plane.land(airport);
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  });

  it('can takeoff', function(){
    plane.takeoff(airport);
    expect(airport.clearForTakeOff).toHaveBeenCalled();
  });


});
