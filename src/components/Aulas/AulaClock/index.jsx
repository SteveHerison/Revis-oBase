import React from "react";

const Clock = () => {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  let greeting = "";

  if (hours >= 0 && hours < 5) {
    greeting = "Boa Madrugada";
  } else if (hours >= 5 && hours < 12) {
    greeting = "Bom dia";
  } else if (hours >= 12 && hours < 18) {
    greeting = "Boa Tarde";
  } else {
    greeting = "Boa Noite";
  }

  const getBackgroundClass = () => {
    if (greeting === "Boa Madrugada")
      return "bg-gradient-to-r from-zinc-950 to-zinc-900";
    if (greeting === "Bom dia")
      return "bg-gradient-to-r from-yellow-400 to-yellow-200";
    if (greeting === "Boa Tarde")
      return "bg-gradient-to-r from-orange-400 to-red-300";
    if (greeting === "Boa Noite")
      return "bg-gradient-to-r from-indigo-800 to-gray-900";
  };

  return (
    <div className={`flex flex-col w-full h-full ${getBackgroundClass()}`}>
      <h1 className="text-4xl text-center">Clock</h1>
      <div className="flex flex-col items-center justify-center w-full h-full gap-4">
        <div className="flex gap-4">
          <p className="p-1 text-9xl bg-zinc-400 rounded-xl">{`${hours}`}</p>
          <p className="p-1 text-9xl bg-zinc-400 rounded-xl">{`${minutes}`}</p>
          <p className="p-1 text-9xl bg-zinc-400 rounded-xl">{`${seconds}`}</p>
        </div>
        <div className="text-4xl">{greeting}</div>
      </div>
    </div>
  );
};

export default Clock;
