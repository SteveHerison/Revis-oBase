import React, { useState } from "react";

export const ListaDeTarfas = () => {
  const [list, setList] = useState([
    { id: 1, label: "Tarefa de exemplo", checked: false },
  ]);
  const [task, setTask] = useState("");

  function handleAddTask() {
    if (task.trim() !== "") {
      setList([...list, { id: list.length + 1, label: task, checked: false }]);
      setTask("");
    }
    return;
  }

  function handleDeletTask(id) {
    setList(list.filter((item) => item.id !== id));
  }

  function toggleItem(id) {
    setList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  }

  return (
    <div className="flex flex-col h-full p-4">
      <h1 className="pb-4 text-4xl text-center">Lista de Tarefas</h1>
      <div className="flex flex-col space-y-6">
        <div className="flex gap-4 p-4 bg-blue-950 rounded-xl">
          <input
            type="text"
            className="p-2 border rounded-xl"
            placeholder="O que deseja fazer ?"
            value={task}
            onChange={({ target }) => setTask(target.value)}
          />
          <button onClick={handleAddTask}>Adicionar</button>
        </div>
        <div>
          <div className="w-full h-full p-2 ">
            <p className="pb-4 text-xl text-center">{`${list.length} Itens na lista `}</p>
            <ul className="flex flex-col gap-4">
              {list.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between p-2 bg-blue-950 rounded-xl"
                >
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="w-5 h-5"
                      checked={item.checked}
                      onClick={() => toggleItem(item.id)}
                    />
                    {item.label}
                  </div>
                  <button
                    className="p-1 bg-red-600 rounded-xl"
                    onClick={() => handleDeletTask(item.id)}
                  >
                    Deletar
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
