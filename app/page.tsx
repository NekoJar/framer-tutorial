"use client";

import { useState } from "react";

import Magnetic from "./components/Magnetic";
import HorizontalScroll from "./components/HorizontalScroll";

export default function Home() {
  const [changeText, setChangeText] = useState(false);

  const onClick = () => {
    setChangeText(!changeText);
  };

  return (
    <main className=" bg-neutral-950">
      <div className="p-64 space-y-4">
        {changeText ? (
          <h1 className="font-bold text-4xl text-white uppercase">
            HI zharfan
          </h1>
        ) : (
          <h1 className="font-bold text-4xl text-white uppercase">
            Halo zharfan
          </h1>
        )}
        <div className="flex items-center">
          <Magnetic>
            <button
              onClick={onClick}
              className="bg-white text-black rounded-xl p-4"
            >
              halooo
            </button>
          </Magnetic>
        </div>
      </div>
      <HorizontalScroll>
        <div className="p-64 bg-black text-white flex items-center justify-center">
          a
        </div>
        <div className="p-64 bg-black text-white flex items-center justify-center">
          b
        </div>
        <div className="p-64 bg-black text-white flex items-center justify-center">
          c
        </div>
        <div className="p-64 bg-black text-white flex items-center justify-center">
          a
        </div>
        <div className="p-64 bg-black text-white flex items-center justify-center">
          b
        </div>
        <div className="p-64 bg-black text-white flex items-center justify-center">
          c
        </div>
        <div className="p-64 bg-black text-white flex items-center justify-center">
          a
        </div>
        <div className="p-64 bg-black text-white flex items-center justify-center">
          b
        </div>
        <div className="p-64 bg-black text-white flex items-center justify-center">
          c
        </div>
        <div className="p-64 bg-black text-white flex items-center justify-center">
          a
        </div>
        <div className="p-64 bg-black text-white flex items-center justify-center">
          b
        </div>
        <div className="p-64 bg-black text-white flex items-center justify-center">
          c
        </div>
        <div className="p-64 bg-black text-white flex items-center justify-center">
          a
        </div>
        <div className="p-64 bg-black text-white flex items-center justify-center">
          b
        </div>
        <div className="p-64 bg-black text-white flex items-center justify-center">
          c
        </div>
        <div className="p-64 bg-black text-white flex items-center justify-center">
          a
        </div>
        <div className="p-64 bg-black text-white flex items-center justify-center">
          b
        </div>
        <div className="p-64 bg-black text-white flex items-center justify-center">
          c
        </div>
      </HorizontalScroll>
      <div className="bg-black text-white items-center justify-center flex p-64">
        {" "}
        WOW
      </div>
    </main>
  );
}
