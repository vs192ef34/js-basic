"use strict";

const weekDayNamesRu = [
  "понедельник",
  "вторник",
  "среда",
  "четверг",
  "пятница",
  "суббота",
  "воскресенье",
];

let list = "<ol>\n";

for (let i = 0; i < weekDayNamesRu.length; i = i + 1) {
  list = list + `<li>${weekDayNamesRu[i]}</li>\n`;
}

list = list + "</ol>";

console.log(list);

console.log("+++++++++++++++++++++++++++++++++++++++++++++");

let sum = 0;

const a = [1, 2, 5, 7, 3, 90, 45, 34];

for (let i = 1; i < a.length; i = i + 1) {
  if (a[i] % 2 === 0) {
    sum = sum + a[i];
  }
}

console.log(sum);

sum = 0;

for (let i = 2; i < 16; i = i + 2) {
  sum = sum + i;
}

console.log(sum);

const arr = [];

for (let i = 0, j = 2; i < 40; i = i + 1, j = j + 2) {
  arr[i] = j;
}

console.log(arr);

let sum1 = 0;
let count1 = 0;

let sum2 = 0;
let count2 = 0;

let sum3 = 0;

for (let i = 0; i < a.length; i = i + 1) {
  if (a[i] % 2 === 0) {
    sum1 = sum1 + a[i];
    count1 = count1 + 1;
  } else {
    sum2 = sum2 + a[i];
    count2 = count2 + 1;
  }
  sum3 = sum3 + a[i];
}

console.log(sum1, sum2, sum3);
console.log((sum1 / sum3) * 100, (sum2 / sum3) * 100);

console.log(sum1 / count1);
console.log(sum2 / count2);
console.log(sum3 / a.length);

let i = 0;
while (i < a.length) {
  console.log(`a[${i}] = ${a[i]}`);
  i = i + 1;
}

i = 0;
do {
  console.log(`a[${i}] = ${a[i]}`);
  i = i + 1;
} while (i < a.length);
