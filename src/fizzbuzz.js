"use strict";

function canBeDivided(n, dividers) {
  for (let i = 0; i < dividers.length; i++) {
    if (n % dividers[i] !== 0) {
      return false;
    }
  }
  return true;
}

function toFizzBuzzString(n) {
  let fizzPart = "";
  let buzzPart = "";
  let numberPart = n.toString();

  if (canBeDivided(n, [3])) {
    fizzPart = "Fizz";
    numberPart = "";
  }

  if (canBeDivided(n, [5])) {
    buzzPart = "Buzz";
    numberPart = "";
  }

  return `${fizzPart}${buzzPart}${numberPart}`;
}

function fizzbuzz(start, end) {
  const result = [];

  for (let i = start; i <= end; i = i + 1) {
    result.push(toFizzBuzzString(i));
  }

  return result;
}

const result = fizzbuzz(1, 100);

console.log(result.join("\n"));
