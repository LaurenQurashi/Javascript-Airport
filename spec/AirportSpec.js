
describe('Airport', function() {

  var airport;
  var plane;
  // similar to an instance variable initialization.

  beforeEach(function() {
    airport = new Airport()
    // creates a new object before each test.
  });

  it('starts with no planes in the hangar', function() {
    expect(airport.showHangar()).toEqual([]);
  });

  it('adds a plane to the hangar with land()', function() {
    airport.land();
    expect(airport.showHangar()).toContain(plane);
  });

  it('removes a plane from the hangar with takeOff()', function() {
    airport.takeOff();
    expect(airport.showHangar()).not.toContain(plane);
  });

});
