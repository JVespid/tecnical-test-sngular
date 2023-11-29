/**
 * @param {Number} num
 * @returns {Number}
 */
export function useCalc(num) {
  if (num == 0) return 0;
  if (num >= 1475) return -1;

  return 2 * Fibonacci(num) + 3 * Triangular(num) + 7 * Primo(num);
  // num = 1 => (2*(1))   + (3*(1))  + (7*(2)) = 19
  // num = 2 => (2*(1))   + (3*(3))  + (7*(2)) = 25
  // num = 3 => (2*(2))   + (3*(6))  + (7*(3)) = 43
  // num = 4 => (2*(3))   + (3*(10)) + (7*(3)) = 57
  // num = 5 => (2*(5))   + (3*(15)) + (7*(5)) = 90
  // num = 6 => (2*(8))   + (3*(21)) + (7*(5)) = 114
  // num = 7 => (2*(13))  + (3*(28)) + (7*(7)) = 159
  // num = 8 => (2*(21))  + (3*(36)) + (7*(7)) = 199
  // num = 9 => (2*(34))  + (3*(45)) + (7*(7)) = 252
  // num = 10 => (2*(55)) + (3*(55)) + (7*(7)) = 324
}

/**
 * @param {Number} num
 * @returns {Number}
 */
export function Fibonacci(num) {
  if (num == 0) return 0;
  let result = 0,
    last1 = 0,
    last2 = 1;
  if (num == 1) return 1;

  for (let i = 2; i <= num; i++) {
    result = last1 + last2;
    last1 = last2;
    last2 = result;
  }
  return result;
}
/**
 * @param {Number} n
 * @returns {Number}
 */
export function Triangular(n) {
  return (n * (n + 1)) / 2;
}

/**
 * @param {Number} num
 * @returns {Number}
 */
export function Primo(num) {
  if (num == 0) return 0;
  if (num <= 2) return 2;
  for (let i = num; i > 2; i--) {
    if (esPrimo(i)) {
      return i;
    }
  }
  return 2;
}
/**
 * @param {Number} num
 * @returns {Boolean}
 */
function esPrimo(num) {
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  for (let i = 3; i * i <= num; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}
