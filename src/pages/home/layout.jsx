import React from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import { Selection } from "../../data/dataRouter";

const Layout = ({ children }) => {
  return (
    <main className="flex flex-col w-full h-full ">
      <Header />
      <main className="flex h-full">
        {/* <Navbar /> */}
        {children}
      </main>
      <div className="flex items-center justify-between gap-4 p-2">
        {Selection.map(({ id, title }) => (
          <ul key={id}>
            <li>
              <button className="p-2 text-black bg-white rounded-xl">
                {title}
              </button>
            </li>
          </ul>
        ))}
      </div>
    </main>
  );
};

export default Layout;
