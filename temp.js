const convertF2C = temp => {
  return (temp - 32) * (5 / 9); //+ `Celcius`;
};

const convertC2F = temp => {
  return (temp * 9) / 5 + 32; //+ `Fahrenheit`;
};

module.exports = { convertC2F, convertF2C };
