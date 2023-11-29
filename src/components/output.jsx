import { useEffect } from "react";

import { useCalc, Fibonacci, Triangular, Primo } from "../hooks/useCalc";
import { useState } from "react";

export default function Output({ value }) {
  const [valCalc, setValCalc] = useState(0);
  const [valFibonacci, setValFibonacci] = useState(0);
  const [valTriangular, setValTriangular] = useState(0);
  const [valPrimo, setValPrimo] = useState(0);

  useEffect(() => {
    if (typeof value != "number") {
      return;
    }
    setValCalc(useCalc(value));
    setValFibonacci(Fibonacci(value));
    setValTriangular(Triangular(value));
    setValPrimo(Primo(value));
  }, [value]);

  return (
    <>
      <div>
        Output={">"} {valCalc}
      </div>

      <div className="operation-1">
        {`x = (2 * Fibonacci(${value})) + (3 * Triangular(${value})) + (7 * NumeroPrimo(${value}))`}
      </div>
      <div className="operation-2">
        {`x = (2 * ${valFibonacci}) + (3 * ${valTriangular}) + (7 * ${valPrimo})`}
      </div>
      <div className="operation-3">
        {`x = (${2 * valFibonacci}) + ( ${3 * valTriangular}) + ( ${
          7 * valPrimo
        })`}
      </div>
      <div className="operation-4">
        {`x = ${valCalc}`}
      </div>
    </>
  );
}
