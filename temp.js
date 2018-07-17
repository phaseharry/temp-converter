/*
const tempConverter = temp => {
  temp = temp.toLowerCase();
  let num = temp.split(' ')[0] * 1; //assumes entered format of argument is 'number fahrenheit'
  if (temp.search('fahrenheit') >= 0) return convertF2C(num);
  if (temp.search('celsius') >= 0) return convertC2(num);
};

tempConverter takes in a string with a number and fahrenheit or celsius
ex `30 celsius`;
and calls either convertF2C or convertC2F;
*/
const convertF2C = temp => {
  return (temp - 32) * (5 / 9); //+ `Celcius`;
};

const convertC2F = temp => {
  return (temp * 9) / 5 + 32; //+ `Fahrenheit`;
};

module.exports = { convertC2F, convertF2C };
