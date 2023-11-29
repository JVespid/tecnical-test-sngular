import { useState } from "react";
import Input from "./components/input";
import Output from "./components/output";

function App() {
  const [input, setInput] = useState(0);

  return (
    <>
      <header className="w-full flex justify-around items-end pb-3 text-5xl mb-7">
        <h1 className="">Prueba técnica de SNGULAR</h1>
        <p></p>
      </header>

      <main className="w-full grid place-items-center row-span-3" style={{gridTemplateRows:"auto 1fr"}}>
        <section className="app w-full h-auto mt-3 mb-6">
          <div className="w-full grid grid-cols-7 grid-rows-2 gap-3 ">
            <h2 className="col-start-3 col-span-3 pl-3 text-3xl flex justify-around">ingresa un numero valido <p></p></h2>
            <Input
              className="row-start-2 col-start-3 col-span-3 grid place-items-center m-4"
              setInput={setInput}
            />
          </div>
        </section>
        <section className="show w-full h-full bg-slate-200 p-5 flex flex-col justify-start gap-10">
          <Output value={input} />
        </section>
      </main>
    </>
  );
}

export default App;
