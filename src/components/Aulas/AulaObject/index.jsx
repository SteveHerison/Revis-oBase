import React, { useState } from "react";

export const Objets = () => {
  const [fullName, setFullName] = useState({
    name: "dfds",
    lastName: "dsfdsaf",
  });

  function handleName() {
    const fullNmaeClone = { ...fullName };
    fullNmaeClone.name = "sda";
    setFullName(fullNmaeClone);
  }
  return (
    <div>
      <input
        type="text"
        value={fullName.name}
        onChange={({ target }) => setFullName(target.value)}
      />
      <input
        type="text"
        value={fullName.lastName}
        onChange={({ target }) => setFullName(target.value)}
      />
      <p>{`Meu nome completo é`}</p>
      <button onClick={handleName}>Limpar Caixa</button>
    </div>
  );
};
