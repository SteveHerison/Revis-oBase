import React from "react";
import { students } from "../../../data/dataAlunos";
import UserAvatar from "./assets/user-svgrepo-com.svg";

const Lista = () => {
  return (
    <div className="container w-full h-full mx-auto text-black bg-zinc-50 ">
      <table className="w-full h-full">
        <thead>
          <tr className="h-10 text-white bg-blue-950 ">
            <th className="text-start">Name</th>
            <th>Status</th>
            <th>Grade 1</th>
            <th>Grade 2</th>
            <th>Final Grade</th>
          </tr>
        </thead>
        <tbody>
          {students.map(
            ({ id, status, avatar, name, email, grade1, grade2 }) => {
              const finalGrade = ((grade1 + grade2) / 2).toFixed(2); // Calcula a média
              return (
                <tr key={id} className="border-b border-zinc-900/10">
                  <td className="flex items-center h-full gap-4 px-2">
                    {/* Condição para mostrar 'avatar' ou a imagem */}
                    {avatar ? (
                      <img
                        src={avatar}
                        alt={`Avatar de ${name}`}
                        className="object-cover w-10 h-10 rounded-full"
                      />
                    ) : (
                      <img
                        src={UserAvatar}
                        alt={`Avatar de ${name}`}
                        className="object-cover w-10 h-10 rounded-full"
                      />
                    )}
                    <div className="flex flex-col gap-2">
                      <p> {name}</p>
                      <p> {email}</p>
                    </div>
                  </td>
                  <td>
                    <p
                      className={` py-2 rounded-xl text-center border  ${
                        status === "ativo"
                          ? "bg-green-500 border-green-900"
                          : "bg-red-500 border-red-900"
                      }`}
                    >
                      {status}
                    </p>
                  </td>
                  <td>
                    <p className="text-center">{grade1}</p>
                  </td>
                  <td>
                    <p className="text-center">{grade2}</p>
                  </td>
                  <td>
                    <p className="text-center">
                      {status === "inativo" ? "--" : finalGrade}
                    </p>
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Lista;
