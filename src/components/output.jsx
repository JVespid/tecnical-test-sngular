import { useEffect } from "react";

import { useCalc, Fibonacci, Triangular, Primo } from "../hooks/useCalc";
import { useState } from "react";

export default function Output({ value }) {
  const [valFormat, setValFormat] = useState("");
  const [valCalc, setValCalc] = useState(0);
  const [valFibonacci, setValFibonacci] = useState(0);
  const [valTriangular, setValTriangular] = useState(0);
  const [valPrimo, setValPrimo] = useState(0);

  const formatNumbers = (number) => {
    return new Intl.NumberFormat("es-MX", {
      style: "decimal",
      maximumFractionDigits: 2,
    }).format(number);
  };

  useEffect(() => {
    if (typeof value != "number") {
      return;
    }
    setValFormat(value);

    setValCalc(useCalc(value));
    setValFibonacci(Fibonacci(value));
    setValTriangular(Triangular(value));
    setValPrimo(Primo(value));
  }, [value]);

  return (
    <>
      <div className="flex justify-center items-center p-5 m-5 flex-col">
        <span
          className="w-max  text-center pl-5 pr-5 pb-1 pt-1 border border-green-600 rounded text-green-700 text-xl shadow-lg bg-slate-100"
          style={
            valCalc === -1
              ? {
                  minWidth: "7rem",
                  border: "solid 1px rgb(185, 28, 28)",
                  color: "rgb(185, 28, 28)",
                }
              : { minWidth: "7rem" }
          }
        >
          {valCalc}
        </span>
        {valCalc == -1 ? (
          <p className="text-red-700">
            ingresa un valor valido y dentro de los limites
          </p>
        ) : null}
      </div>
      <div className="operations grid grid-cols-9 grid-rows-3 items-center gap-2">
        <div className="operation-1 w-full h-auto p-3 text-center row-start-1 col-start-3 col-span-5 shadow-lg hover:cursor-text hover:scale-125 border border-slate-400 transition-transform rounded">
          {`x = (2 * Fibonacci(${valFormat})) + (3 * Triangular(${valFormat})) + (7 * NumeroPrimo(${valFormat}))`}
        </div>
        <div className="operation-2 w-full h-full p-3 text-center row-start-2 col-start-4 col-span-3 shadow-lg hover:cursor-text hover:scale-125 border border-slate-400  transition-transform rounded">
          {`x = (2 * ${valFibonacci}) + (3 * ${valTriangular}) + (7 * ${valPrimo})`}
        </div>
        <div className="operation-3 w-full h-full p-3 text-center row-start-3 col-start-4 col-span-3 shadow-lg hover:cursor-text hover:scale-125 border border-slate-400  transition-transform rounded">
          {`x = ${2 * valFibonacci} + ${3 * valTriangular} + ${7 * valPrimo}`}
        </div>
        <div className="operation-4 w-full h-full p-3 text-center row-start-4 col-start-5 shadow-lg hover:cursor-text hover:scale-125 border border-slate-400  transition-transform rounded">{`x = ${valCalc}`}</div>
      </div>
    </>
  );
}
