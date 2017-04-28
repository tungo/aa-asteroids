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

const sum = curriedSum(4);
console.log(sum(5)(30)(20)(1));
