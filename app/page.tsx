"use client";

import Image from "next/image";
import Magnetic from "./components/Magnetic";
import { useState } from "react";

export default function Home() {
  const [changeText, setChangeText] = useState(false);

  const onClick = () => {
    setChangeText(!changeText);
  };

  return (
    <main className="p-64 bg-neutral-950">
      <div className="space-y-4">
        {changeText ? (
          <h1 className="font-bold text-4xl text-white uppercase">
            Ini zharfan
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
    </main>
  );
}
