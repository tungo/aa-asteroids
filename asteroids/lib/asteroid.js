const Util = require ("./util.js");
const MovingObject = require ("./moving_object.js");


function Asteroid(options) {
  // options == { pos: [] }
  return MovingObject.call(this, {
    pos: options.pos,
    color: Asteroid.COLOR,
    radius: Asteroid.RADIUS,
    vel: Util.randomVec(5)
  });

}

Asteroid.COLOR = "blue";
Asteroid.RADIUS = 20;

Util.inherits(Asteroid, MovingObject);
