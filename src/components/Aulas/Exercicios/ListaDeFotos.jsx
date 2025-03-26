import { useState } from "react";
import Foto01 from "../../../assets/pexels-diego-madrigal-162471-6037751.jpg";
import Foto02 from "../../../assets/pexels-jobzky-7925847.jpg";
import Foto03 from "../../../assets/pexels-ken-cheung-3355734-6258535.jpg";
import Foto04 from "../../../assets/pexels-krisof-1252890.jpg";
import Foto05 from "../../../assets/pexels-pixabay-39896.jpg";
import Foto06 from "../../../assets/pexels-pixabay-41162.jpg";
import Foto07 from "../../../assets/pexels-pixabay-41953.jpg";
import Foto08 from "../../../assets/pexels-pixabay-76969.jpg";
import Foto09 from "../../../assets/pexels-pixabay-87009.jpg";

const fotosIniciais = [
  { id: 1, label: "Comprar pão", src: Foto01 },
  { id: 2, label: "Fazer academia", src: Foto02 },
  { id: 3, label: "Estudar React", src: Foto03 },
  { id: 4, label: "Lavar roupa", src: Foto04 },
  { id: 5, label: "Caminhar no parque", src: Foto05 },
  { id: 6, label: "Ler um livro", src: Foto06 },
  { id: 7, label: "Cozinhar algo novo", src: Foto07 },
  { id: 8, label: "Organizar o escritório", src: Foto08 },
  { id: 9, label: "Assistir um filme", src: Foto09 },
];

export const ListaDeFotos = () => {
  const [fotos] = useState(fotosIniciais);
  const [fotoSelecionada, setFotoSelecionada] = useState(null);

  function selecionarFoto(id) {
    const foto = fotos.find((item) => item.id === id);
    setFotoSelecionada(foto);
  }

  function voltarParaLista() {
    setFotoSelecionada(null);
  }

  return (
    <div className="container flex flex-col w-full h-full px-4 pb-4 mx-auto">
      <h1 className="mb-6 text-4xl font-bold text-center text-gray-900">
        Lista de Fotos
      </h1>
      {fotoSelecionada ? (
        <div className="flex flex-col items-center">
          <img
            src={fotoSelecionada.src}
            alt={fotoSelecionada.label}
            className="object-cover rounded-lg shadow-lg "
          />

          <p className="mt-4 text-2xl font-bold">{fotoSelecionada.label}</p>
          <button
            className="px-4 py-2 mt-4 text-white bg-blue-600 rounded-lg"
            onClick={voltarParaLista}
          >
            Voltar
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {fotos.map(({ id, label, src }) => (
            <button key={id} onClick={() => selecionarFoto(id)}>
              <div className="flex flex-col items-center justify-center p-4 bg-white shadow-lg rounded-2xl">
                <img
                  src={src}
                  alt={label}
                  className="object-cover w-full h-48 rounded-lg"
                />
                <p className="mt-2 text-lg font-semibold text-gray-800">
                  {label}
                </p>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
