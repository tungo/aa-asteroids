function curriedSum(numArgs) {
  const numbers = [];
  function _curriedSum(num) {
      numbers.push(num);
      // console.log(numArgs);
      if (numbers.length === numArgs) {
        let total = 0;
        for(let i = 0; i < numArgs; i++) {
          // console.log(total);
          total += numbers[i];
        }
        return total;
      } else return _curriedSum;
  }
  return _curriedSum;
}

// const sum = curriedSum(4);
// console.log(sum(5)(30)(20)(1));

Function.prototype.curry = function (numArgs) {
  let that = this;
  const args = [];

  function _curry(arg) {
    args.push(arg);

    if (args.length === numArgs) {
      return that.apply(null, args);
    } else {
      return _curry;
    }
  }

  return _curry;
};

let sum = function (num1, num2, num3) {
  return num1 + num2 + num3;
};

let s = sum.curry(3);
console.log(s);

let s1 = s(1);
console.log(s1);

let s2 = s1(2);
console.log(s2);

let s3 = s2(3);
console.log(s3);



// class Cat {
//   constructor(name) {
//     this.name = name;
//   }
//
//   says(sound, person) {
//     console.log(`${this.name} says ${sound} to ${person}!`);
//     return true;
//   }
// }
//
// let cat = new Cat('kitty');
// let cc = cat.says.curry(2);
// console.log(cc('meow')('Alex'));
