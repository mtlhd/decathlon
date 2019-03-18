//            100m,    Long Jump, Shot Put, High Jump, 400m,    110m Hurdles, Discus Throw, Pole Vault, Javelin Throw, 1500m
parameters = new Array{};

parameters['100m'] = new Array {a: 25.4347, b: 18, c: 1.81};
parameters['LongJump'] = new Array {a: 0.14354, b: 220, c: 1.4};
parameters['ShotPut'] = new Array {a: 51.39, b: 1.5, c: 1.05};
parameters['HighJump'] = new Array {a: 0.8465, b: 75, c: 1.42};
parameters['400m'] = new Array {a: 1.53775, b: 82, c: 1.81};
parameters['Hurdles'] = new Array {a: 5.74352, b: 28.5, c: 1.92};
parameters['Discus'] = new Array {a: 12.91, b: 4, c: 1.1};
parameters['Pole'] = new Array {a: 0.2797, b: 100, c: 1.35};
parameters['Javelin'] = new Array {a: 10.14, b: 7, c: 1.08};
parameters['1500m'] = new Array {a: 0.03768, b: 480, c: 1.85};

function calcTrackPoints(result, athlete, event) {
  return Math.ceil(100 * parameters[event]['a'] * Math.pow((parameters[event]['b'] - result), parameters[event]['c'])) / 100;
}

function calcFieldPoints(result, athlete, event) {
  return Math.ceil(100 * parameters[event]['a'] * Math.pow((result - parameters[event]['b']), parameters[event]['c'])) / 100;
}

function calcPoints(result, athlete, event, form) {
  points = 0;
  if ((event === "100m") || (event === "400m") || (event === "1500m") || (event === "hurdles")) {
    points = calcTrackPoints(result, athlete, event);
  } else {
    points = calcFieldPoints(result, athlete, event);
  }
  
  form.element[event + '-points-' + athlete].value = points;
}
