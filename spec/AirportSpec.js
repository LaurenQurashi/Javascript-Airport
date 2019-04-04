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

  it('prevents landing when stormy', function(){
    spyOn(airport, 'isStormy').and.returnValue(true)
    expect(function(){
      airport.clearForLanding(plane)}).toThrow('cannot land')
  })

  it('prevents landing when full', function(){

    airport.clearForLanding(plane)
    console.log(airport)
    expect(function(){
    airport.clearForLanding(plane)}).toThrow('cannot land')
  });



  it('has a default capacity if nothing passed in', function(){
    airport = new Airport()
    expect(airport.capacity).toEqual(1)
  })



  it('has default capacity of value passed in', function(){
    airport = new Airport(5)
    expect(airport.capacity).toEqual(5)

  //
   })

});
