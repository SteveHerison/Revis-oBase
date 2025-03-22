import React from "react";

const Estrelas = ({ rate }) => {
  if (rate > 5) rate = 5;
  if (rate < 0) rate = 0;

  const emojis = [" ", "😧", "😢", "😑", "😊", "😁"];

  emojis[2];

  const rateInt = Math.floor(rate);

  const stars = `${emojis[rateInt]}`.repeat(rateInt) + "😶".repeat(5 - rateInt);

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="p-1 text-8xl bg-zinc-800 rounded-xl">
        {rate.toFixed(1)}
      </div>
      <div className="text-5xl">{stars}</div>
    </div>
  );
};

export default Estrelas;
