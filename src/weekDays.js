"use strict";

const localeRu = 0;
const localeEn = 1;

// ========================================================================

const weekDayNumber = 3;
const translationLocale = localeRu;

//=========================================================================

const weekDayNamesTranslations = [
  [
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
    "воскресенье",
  ],
  [
    "воскресенье",
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
  ],
];

// ***********************************************************************

const weekDayNames = weekDayNamesTranslations[translationLocale];

let weekDayName = null;

if (weekDayNumber >= 0 && weekDayNumber < weekDayNames.length) {
  weekDayName = weekDayNames[weekDayNumber];
}

//=========================================================================

if (weekDayName !== null) {
  console.log(`День с номером ${weekDayNumber} это ${weekDayName}`);
} else {
  console.log("Неправильный номер дня недели");
}
