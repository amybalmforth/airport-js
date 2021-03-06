// class Airport
//
//   DEFAULT_CAPACITY = 20
//
//   attr_reader :planes
//   attr_accessor :capacity
//
//   def initialize(capacity=DEFAULT_CAPACITY)
//     @capacity = capacity
//     @planes = []
//   end
//
//   def land(plane)
//     raise "cannot land the plane: airport at capacity!" if full?
//     raise "cannot land the plane: weather is stormy!" if stormy?
//     @planes << plane
//   end
//
//   def take_off(plane)
//     raise "cannot take off: weather is stormy!" if stormy?
//     @planes
//   end
//
//   def stormy?
//     rand(1..6) > 4
//   end
//
//   def full?
//     @planes.length >= @capacity
//   end
// end

function Plane() {

};

function Airport() {
  this.capacity = 2;
  this.hanger = [];
};
Airport.prototype.isFull = function() {
  if (airport.hanger.length >= airport.capacity) {
    return true;
  } else {
    return false;
  }
};
Airport.prototype.land = function(plane) {
  if (airport.isFull) {
    return "cannot land the plane: airport at capacity!";
  } else {
    airport.hanger.push(plane);
    return plane;
  }
};
Airport.prototype.takeOff = function(plane) {
  airport.hanger.pop();
  return plane;
};
