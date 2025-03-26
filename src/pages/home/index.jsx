import React from "react";
import Layout from "./layout";
// import Clock from "../../components/Aulas/AulaClock";
import Nota from "../../components/Aulas/AulaNota";
import Lista from "../../components/Aulas/AulaListaTabela";
import EventClick from "../../components/Aulas/AulaEventos/EventClick";
import Prevent from "../../components/Aulas/AulaPreventDefault/Prevent";
import { Objets } from "../../components/Aulas/AulaObject";
import { ListaDeTarfas } from "../../components/Aulas/AulaListaDeTarefas";
import { ListaDeFotos } from "../../components/Aulas/Exercicios/ListaDeFotos";

const Home = () => {
  return (
    <Layout>
      <main className="relative flex items-center justify-center w-full h-full text-white bg-zinc-950">
        {/* <Clock /> */}
        {/* <Nota /> */}
        {/* <Lista /> */}
        {/* <EventClick /> */}
        {/* <Prevent /> */}
        {/* <Objets /> */}
        {/* <ListaDeTarfas /> */}
        <ListaDeFotos />
      </main>
    </Layout>
  );
};

export default Home;
