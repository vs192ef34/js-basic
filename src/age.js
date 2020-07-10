"use strict";

const ageIntervals = [
  [-Infinity, 0, "некорректные данные"],
  [0, 1, "младенец"],
  [1, 14, "ребёнок"],
  [14, 18, "тинэйджер"],
  [18, 25, "молодой человек"],
  [25, 41, "человек среднего возраста"],
  [41, 65, "человек предпенсионного возраста"],
  [65, 80, "пожилой человек"],
  [80, 100, "старик"],
  [100, +Infinity, "Дункан МакЛауд"],
];

const workAgeIntervals = [
  [0, 18, "иждивенец"],
  [18, 65, "работающий гражданин"],
  [65, +Infinity, "пенсионер"],
];

function findInterval(ageToCheck, intervals) {
  for (let i = 0; i < intervals.length; i++) {
    const low = intervals[i][0];
    const high = intervals[i][1];

    if (low <= ageToCheck && ageToCheck < high) {
      return intervals[i][2];
    }
  }
}

const age = 70;

const ageMessage = findInterval(age, ageIntervals);
console.log(ageMessage);

const workAgeMessage = findInterval(age, workAgeIntervals);
console.log(workAgeMessage);
