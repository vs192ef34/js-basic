"use strict";

const age = -10;

if (age <= 0) {
  console.log("Incorrect age.");
  return;
}

console.log(`Your age is: ${age}`);

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
