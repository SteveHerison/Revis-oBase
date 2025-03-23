import React, { useState } from "react";

const EventClick = () => {
  const [click, setClick] = useState(false);

  function IsOpen() {
    setClick(true);
  }
  function IsClose() {
    setClick(false);
  }

  return (
    <div className="container w-full h-full p-2 mx-auto ">
      <div>
        <button
          className="p-1 text-xl bg-purple-950 rounded-xl"
          onClick={IsOpen}
        >
          Click Aqui
        </button>
        {click && (
          <div className="relative p-2 text-orange-400 bg-white">
            <p>Caixa de mensagem aberta</p>
            <button className="absolute top-0 right-2" onClick={IsClose}>
              X
            </button>
          </div>
        )}
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default EventClick;
