import React, { useState } from "react";

const Prevent = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState(0);

  function formPrevent(e) {
    e.preventDefault();

    if (!name && !lastName) {
      return alert("Preencha todos os campos");
    }
    setName("");
    setLastName("");
    alert("Cadastrado com sucesso!");
  }
  function matAdd() {
    setNumber((prev) => prev + 1);
  }
  function matSub() {
    setNumber((prev) => prev - 1);
  }

  return (
    <div className="flex flex-col w-full h-full p-4 space-y-4">
      <form className="flex flex-col gap-4" onSubmit={formPrevent}>
        <input
          type="text"
          className="p-2 border rounded-xl"
          placeholder="Dgite aqui"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
        <input
          type="text"
          className="p-2 border rounded-xl"
          placeholder="Dgite aqui"
          value={lastName}
          onChange={({ target }) => setLastName(target.value)}
        />
        <button className="p-2 text-black bg-white rounded-xl" value="submit">
          Cadastrar
        </button>
      </form>

      <div className="flex items-center justify-center w-full h-full">
        <div className="flex flex-col items-center gap-6">
          <p className="text-8xl">{number}</p>
          <div className="flex gap-10">
            <button
              className="p-2 text-6xl bg-amber-300 rounded-xl"
              onClick={matAdd}
            >
              +
            </button>
            <button
              className="p-2 text-6xl bg-amber-300 rounded-xl"
              onClick={matSub}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prevent;
