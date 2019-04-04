'use strict';

describe('Airport', function(){
  var airport;
  var plane;
  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpyObj('plane',['land']);
  });

  it('has no planes by default', function(){
    expect(airport.hangar).toEqual([]);
  });

  it('can clear planes for landing', function(){
    airport.clearForLanding(plane);
    expect(airport.hangar).toEqual([plane]);
  });

  it('can clear plane for takeoff', function(){
    plane.land(airport)
    airport.clearForTakeOff();
    expect(airport.hangar).toEqual([])

  })

  it('returns a type of weather' , function(){
    expect(airport.isStormy()).toEqual(false)
  });

  it('prevent takeoff when stormy', function() {
    spyOn(airport, 'isStormy').and.returnValue(true)
    expect(function(){
      airport.clearForTakeOff(plane)}).toThrow('cannot takeoff')

  })


});
