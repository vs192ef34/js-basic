"use strict";

const age = 0;

// lets try to categorize person by age
/*
-Infinity - 0 - некорректные данные
0 - 1 - младенец
1 - 14 - ребёнок
14 - 18 - тинэйджер
18 - 25 - молодой человек
25 - 41 - человек среднего возраста
41 - 65 - человек предпенсионного возраста
65 - 80 - пожилой человек
80 - 100 - старик
100 - +Infinity - Дункан МакЛауд
*/

if (age < 0) {
  console.log("Некорректный возраст");
  return;
} else {
  console.log("Попробуем поискать более вменяемый вариант решения");
  // if (age >= 0 && age < 1) {
  //   console.log("младенец");
  // } else {
  //   if (age >= 1 && age < 14) {
  //     console.log("ребёнок");
  //   } else {
  //     // and ...
  //   }
  // }
}

// define week day name by its number
const weekDayNumber = 2;
let weekDayName = "";
let weekDayNumberIsCorrect = true;

if (weekDayNumber < 0 || weekDayNumber > 6) {
  console.log("Неправильный номер дня недели");
}

if (weekDayNumber === 0) {
  console.log("понедельник");
}

if (weekDayNumber === 1) {
  console.log("вторник");
}

if (weekDayNumber === 2) {
  console.log("среда");
}

switch (weekDayNumber) {
  case 0:
    weekDayName = "понедельник";
    break;
  case 1:
    weekDayName = "вторник";
    break;
  case 2:
    weekDayName = "среда";
    break;
  case 3:
    weekDayName = "четверг";
    break;
  case 4:
    weekDayName = "пятница";
    break;
  case 5:
    weekDayName = "суббота";
    break;
  case 6:
    weekDayName = "воскресенье";
    break;
  default:
    weekDayNumberIsCorrect = false;
    break;
}

if (weekDayNumberIsCorrect) {
  console.log(`День с номером ${weekDayNumber} это ${weekDayName}`);
} else {
  console.log("Неправильный номер дня недели");
}

switch (weekDayNumber) {
  case 0:
  case 1:
  case 2:
  case 3:
  case 4:
    console.log("рабочий день");
    break;
  case 5:
  case 6:
    console.log("выходной день");
    break;
  default:
    console.log("Неправильный номер дня недели");
    break;
}

const weekDayNamesRu = [
  "понедельник",
  "вторник",
  "среда",
  "четверг",
  "пятница",
  "суббота",
  "воскресенье",
];

const weekDayNamesEn = [
  "воскресенье",
  "понедельник",
  "вторник",
  "среда",
  "четверг",
  "пятница",
  "суббота",
];

const weekDayNames = weekDayNamesEn;

if (weekDayNumber >= 0 && weekDayNumber < weekDayNames.length) {
  weekDayName = weekDayNames[weekDayNumber];
} else {
  weekDayName = null;
}

if (weekDayName !== null) {
  console.log(`День с номером ${weekDayNumber} это ${weekDayName}`);
} else {
  console.log("Неправильный номер дня недели");
}

if (weekDayNumber >= 0 && weekDayNumber < weekDayNames.length) {
  console.log(
    `День с номером ${weekDayNumber} это ${weekDayNames[weekDayNumber]}`
  );
} else {
  console.log("Неправильный номер дня недели");
}

const i = 5;

if (i < 0 || i > 6) {
  console.log("bad data");
} else {
  if (i >= 0 && i <= 4) {
    console.log("work");
  }
  if (i >= 5 && i <= 6) {
    console.log("holiday");
  }
}

console.log(`Your age is: ${age}`);

if (age > 0) {
  if (age >= 18) {
    const yearsTillRetirement = 65 - age;
    console.log("You are Adult");
    if (yearsTillRetirement > 0) {
      console.log(`Years till retirement ${yearsTillRetirement}`);
    } else {
      console.log(`You are probably dead ;))))`);
    }
  } else {
    console.log("You are Teenager");
    console.log("You are too young for retirement!!! :)");
  }
}

console.log("Arrays");

const arr = [12, 13, 14, 15, 16, 17];

for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  console.log(element);
}
