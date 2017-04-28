Function.prototype.myBind = function (object) {
  const bindArguments = Array.from(arguments).slice(1);
  let that = this;

  return function () {
    that.apply(object, bindArguments.concat(Array.from(arguments)));
  };
};


Function.prototype.myBind2 = function (...callArguments) {
  let that = this;
  const bindArguments = callArguments.slice(1);
  return function (...newArguments) {
    that.apply(callArguments[0], bindArguments.concat(newArguments));
  };
};


class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

const markov = new Cat("Markov");
const breakfast = new Cat("Breakfast");

markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// bind time args are "meow" and "Kush", no call time args
markov.says.myBind2(breakfast, "meow", "Kush")();
// Breakfast says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "me"
markov.says.myBind2(breakfast)("meow", "a tree");
// Breakfast says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
markov.says.myBind2(breakfast, "meow")("Markov");
// Breakfast says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
const notMarkovSays = markov.says.myBind2(breakfast);
notMarkovSays("meow", "me");
// Breakfast says meow to me!
// true
