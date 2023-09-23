import { useState } from "react";
export default function App() {
  const [color, setColor] = useState("black");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="  flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            className="outline-none px-4 py-1  text-white shadow-lg rounded-xl "
            style={{ background: "red" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1  text-white shadow-lg rounded-xl"
            style={{ background: "green" }}
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className="outline-none px-4 py-1  text-black shadow-lg rounded-xl"
            style={{ background: "white" }}
            onClick={() => setColor("white")}
          >
            White
          </button>
          <button
            className="outline-none px-4 py-1  text-black shadow-lg rounded-xl"
            style={{ background: "yellow" }}
            onClick={() => setColor("yellow")}
          >
            Yellow
          </button>
          <button
            className="outline-none px-4 py-1  text-white shadow-lg rounded-xl"
            style={{ background: "blue" }}
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className="outline-none px-4 py-1  text-white shadow-lg rounded-xl"
            style={{ background: "orange" }}
            onClick={() => setColor("orange")}
          >
            Orange
          </button>
          <button
            className="outline-none px-4 py-1  text-white shadow-lg rounded-xl"
            style={{ background: "Indigo" }}
            onClick={() => setColor("Indigo")}
          >
            Indigo
          </button>
          <button
            className="outline-none px-4 py-1  text-white shadow-lg rounded-xl"
            style={{ background: "Violet" }}
            onClick={() => setColor("Violet")}
          >
            Violet
          </button>

        </div>
      </div>
    </div>
  );
}
