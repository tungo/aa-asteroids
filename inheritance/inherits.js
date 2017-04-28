Function.prototype.inherits = function (superClass) {
  // this === Subclass
  // superClass === SuperClass
  function Surrogate() {}
  Surrogate.prototype = superClass.prototype;

  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};


Function.prototype.inherits2 = function (superClass) {
  this.prototype = Object.create(superClass.prototype);
  this.prototype.constructor = this;
};

function Dog (name) {
  this.name = name;
}

Dog.prototype.bark = function () {
  console.log(this.name + " barks!");
};

function Corgi (name) {
  Dog.call(this, name);
}

Corgi.inherits(Dog);

Corgi.prototype.waddle = function () {
  console.log(this.name + " waddles!");
};

const blixa = new Corgi("Blixa");
blixa.bark();
blixa.waddle();
