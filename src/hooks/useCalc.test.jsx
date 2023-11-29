import { test, describe, expect } from "vitest";
import { useCalc, Fibonacci, Primo, Triangular } from "./useCalc.js";

const resultsTest = [0, 19, 25, 43, 57, 90, 114, 159, 199, 252, 324];
const inputsTest = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

describe("useCalc", () => {
  inputsTest.forEach((i, index) => {
    test(`numero ingresado => ${i}, numero esperado => ${resultsTest[index]}`, () => {
      expect(useCalc(i)).toBe(resultsTest[index]);
    });
  });
});

describe("Fibonacci", () => {
  test(`Función de Fibonacci `, () => {
    expect(Fibonacci(8)).toBe(21);
  });
});

describe("Primo", () => {
  test(`Función de Primo `, () => {
    expect(Primo(30)).toBe(29);
  });
});

describe("Triangular", () => {
  test(`Función de Triangular `, () => {
    expect(Triangular(5)).toBe(15);
  });
});
