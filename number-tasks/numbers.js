function findGreatestCommonDivisor(firstNumber, secondNumber) {
  let dividend = Math.abs(firstNumber);
  let divisor = Math.abs(secondNumber);
  while (divisor !== 0) {
    const remainder = dividend % divisor;
    dividend = divisor;
    divisor = remainder;
  }
  const greatestCommonDivisor = dividend;
  return greatestCommonDivisor;
}

function areCoprime(firstNumber, secondNumber) {
  const greatestCommonDivisor = findGreatestCommonDivisor(firstNumber, secondNumber);
  const isCoprime = greatestCommonDivisor === 1;
  return isCoprime;
}

function isNaturalNumberPrime(number) {
  if (!Number.isInteger(number) || number < 2) {
    return false;
  }
  const rootOfNumber = Math.floor(Math.sqrt(number));
  for (let divisor = 2; divisor <= rootOfNumber; divisor++) {
    const isDivisible = number % divisor === 0;
    if (isDivisible) {
      return false;
    }
  }
  return true;
}

function findDivisors(number) {
  const divisors = [];
  for (let candidate = 1; candidate <= number; candidate++) {
    const isDivisor = number % candidate === 0;
    if (isDivisor) {
      divisors.push(candidate);
    }
  }
  return divisors;
}

function isFibonacciNumber(number) {
  let previousFibonacci = 0;
  let currentFibonacci = 1;
  while (currentFibonacci < number) {
    const nextFibonacci = previousFibonacci + currentFibonacci;
    previousFibonacci = currentFibonacci;
    currentFibonacci = nextFibonacci;
  }
  const isZero = number === 0;
  const isFoundInSequence = currentFibonacci === number;
  const isFibonacci = isZero || isFoundInSequence;
  return isFibonacci;
}

function calculateDoubleFactorial(number) {
  let result = 1;
  const step = 2;
  for (let factor = number; factor > 1; factor -= step) {
    result *= factor;
  }
  return result;
}

function calculateDigitSum(number) {
  const digits = String(Math.abs(number)).split("");
  let digitSum = 0;
  for (const digit of digits) {
    digitSum += Number(digit);
  }
  return digitSum;
}

function findNumbersDivisibleByDigitSum(rangeStart, rangeEnd) {
  const matchingNumbers = [];
  for (let number = rangeStart; number <= rangeEnd; number++) {
    const digitSum = calculateDigitSum(number);
    if (digitSum === 0) {
      continue;
    }
    const isDivisibleByDigitSum = number % digitSum === 0;
    if (isDivisibleByDigitSum) {
      matchingNumbers.push(number);
    }
  }
  return matchingNumbers;
}

console.log("1.1. Взаимно простые числа");
console.log("8 и 15:", areCoprime(8, 15));
console.log("12 и 18:", areCoprime(12, 18));
console.log("1.2. Простое число");
console.log("17:", isNaturalNumberPrime(17));
console.log("18:", isNaturalNumberPrime(18));
console.log("1.5. Делители числа");
console.log("12:", findDivisors(12));
console.log("1.9. Число Фибоначчи");
console.log("13:", isFibonacciNumber(13));
console.log("14:", isFibonacciNumber(14));
console.log("1.10. Двойной факториал");
console.log("6!! =", calculateDoubleFactorial(6));
console.log("7!! =", calculateDoubleFactorial(7));
console.log("1.15. Делимость на сумму цифр");
console.log("от 10 до 30:", findNumbersDivisibleByDigitSum(10, 30));