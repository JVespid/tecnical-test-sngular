import { useState } from "react";

/**
 * @param {Function} param0
 * @returns {import('react').ReactHTMLElement}
 */
export default function Input({ setInput, className }) {
  const [error, setError] = useState(false);
  /**
   * @param {React.ChangeEvent<HTMLInputElement>} e
   */
  const changeInput = (e) => {
    e.target.value= e.target.value.replace(" ", "-")
    if (!/^\d+$/.test(e.target.value) && e.target.value != "") {
      setInput(0);
      setError(true);
      return;
    }
    const valueInt = parseInt(e.target.value == "" ? "0" : e.target.value);
    setInput(valueInt);
    setError(false);
  };

  return (
    <>
      <div className={className}>
        <input
          type="text"
          onChange={changeInput}
          className={`border-black border-solid border-2 rounded text-green-700 p-1 text-center w-1/2`}
          style={
            error
              ? {
                  border: "solid 2px rgb(185, 28, 28)",
                  color: "rgb(185, 28, 28)",
                }
              : {}
          }
        />
        {error && <p className="text-red-700">ingresa un valor valido</p>}
      </div>
    </>
  );
}
