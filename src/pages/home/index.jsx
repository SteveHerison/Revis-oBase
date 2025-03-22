import React from "react";
import Layout from "./layout";
// import Clock from "../../components/Aulas/AulaClock";
import Nota from "../../components/Aulas/AulaNota";
import Lista from "../../components/Aulas/AulaListaTabela";

const Home = () => {
  return (
    <Layout>
      <main className="relative flex items-center justify-center w-full h-full text-white bg-zinc-950">
        {/* <Clock /> */}
        {/* <Nota /> */}
        <Lista />
      </main>
    </Layout>
  );
};

export default Home;
