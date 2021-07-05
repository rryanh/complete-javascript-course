// Remember, we're gonna use strict mode in all scripts now!
`use strict`;

// const x = 23;
// const calcAge = birth => 2037 - birth
// console.log(calcAge(x));
// console.log();

const tempSensor1 = [1, -3, 2, 4, 'error', 9, -8, -2, -4, -2, 8, 44, 3, 65];
const tempSensor2 = [1, -3, 2, 4, 'error', 9, -8, -2, -4, -2, 8, -44, 3, 22];
const calcTempMaxMinAmp = temps => {
  let max = -Infinity;
  let min = Infinity;
  temps.forEach(element => {
    element.forEach(element => {
      max = element > max ? element : max;
      min = element < min ? element : min;
    });
  });

  return max - min;
};

console.log(calcTempMaxMinAmp([tempSensor1, tempSensor2]));
