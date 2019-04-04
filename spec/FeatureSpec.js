// Feature tests are from the users perspective, they're made to ensure the
// system is functioning as users are expecting it to.


'use strict'; //this makes our tests completely strict as Javascript likes to
// brush over some errors.

describe('Feature Test:', function() {
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });

  it('planes can be instructed to land at an airport', function() {
    plane.land(airport);
    expect(airport.hangar).toContain(plane);
  });
});
