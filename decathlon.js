//            100m,    Long Jump, Shot Put, High Jump, 400m,    110m Hurdles, Discus Throw, Pole Vault, Javelin Throw, 1500m
var parameters = {};

parameters['100m'] = {a: 25.4347, b: 18, c: 1.81};
parameters['longjump'] = {a: 0.14354, b: 220, c: 1.4};
parameters['shotput'] = {a: 51.39, b: 1.5, c: 1.05};
parameters['highjump'] = {a: 0.8465, b: 75, c: 1.42};
parameters['400m'] = {a: 1.53775, b: 82, c: 1.81};
parameters['hurdles'] = {a: 5.74352, b: 28.5, c: 1.92};
parameters['discus'] = {a: 12.91, b: 4, c: 1.1};
parameters['pole'] = {a: 0.2797, b: 100, c: 1.35};
parameters['javelin'] = {a: 10.14, b: 7, c: 1.08};
parameters['1500m'] = {a: 0.03768, b: 480, c: 1.85};

function calcTrackPoints(result, athlete, event) {
  return Math.ceil(100 * parameters[event]['a'] * Math.pow((parameters[event]['b'] - result), parameters[event]['c'])) / 100;
}

function calcFieldPoints(result, athlete, event) {
  return Math.ceil(100 * parameters[event]['a'] * Math.pow((result - parameters[event]['b']), parameters[event]['c'])) / 100;
}

function calcPoints(result, athlete, event) {
  var points = 0;
  if ((event === "100m") || (event === "400m") || (event === "1500m") || (event === "hurdles")) {
    points = calcTrackPoints(result, athlete, event);
  } else {
    points = calcFieldPoints(result, athlete, event);
  }
  
  var pointsField = document.getElementById(event + "-points-" + athlete);
  pointsField.value = points;
  
  calcTotal(athlete);
}

function calcTotal(athlete) {
  var points = 0;
  var keys = Object.keys(parameters);
  
  Object.keys(parameters).forEach(function(key, index) {
    var pointsField = document.getElementById(key + "-points-" + athlete);
    points += Number(pointsField.value);
  }, parameters);
  
  var totalPointsField = document.getElementById("total-points-" + athlete);
  totalPointsField.value = points;
}

