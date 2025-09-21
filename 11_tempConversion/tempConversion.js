const convertToCelsius = function(temp) {
  converted = (temp - 32) * (5 / 9);
  return +(converted.toFixed(1));
};

const convertToFahrenheit = function(temp) {
  converted = (temp * (9 / 5) + 32);
  return +(converted.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
