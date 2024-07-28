import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="flex flex-col items-center justify-center h-screen ">
          <div className=" shadow-md rounded-xl px-9 py-2  text-fuchsia-600 bg-gray-300 ">
            <h1 className="text-4xl text-center decoration-wavy py-5">
              Background Changer App
            </h1>
            <p className="text-2xl text-center">
              Color Selected : {color.toUpperCase()} color
            </p>
          </div>
        </div>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
          {/* Test */}
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2">
            <button
              onClick={() => setColor("violet")}
              className="outline-none px-4  py-1 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "violet" }}
            >
              Violet
            </button>
            <button
              onClick={() => setColor("indigo")}
              className="outline-none px-4  py-1 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "indigo" }}
            >
              Indigo
            </button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => setColor("yellow")}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg "
              style={{ backgroundColor: "yellow" }}
            >
              Yellow
            </button>
            <button
              onClick={() => setColor("orange")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "orange" }}
            >
              Orange
            </button>
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("white")}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg "
              style={{ backgroundColor: "white" }}
            >
              White
            </button>
            <button
              onClick={() => setColor("black")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "black" }}
            >
              Black
            </button>
            <button
              onClick={() => setColor("aqua")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "aqua" }}
            >
              Aqua
            </button>
            <button
              onClick={() => setColor("navy")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "navy" }}
            >
              Navy
            </button>
            <button
              onClick={() => setColor("darkgreen")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "darkgreen" }}
            >
              Darkgreen
            </button>
            <button
              onClick={() => setColor("deeppink")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "deeppink" }}
            >
              Deeppink
            </button>
            <button
              onClick={() => setColor("yellowgreen")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "yellowgreen" }}
            >
              yellowgreen
            </button>
            <button
              onClick={() => setColor("teal")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "teal" }}
            >
              Teal
            </button>
          </div>
        </div>
        <div className="fixed flex flex-wrap  top-8 inset-x-0 px-1  justify-center">
          {/* Test */}
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2">
            <button
              onClick={() => setColor("magenta")}
              className="outline-none px-4  py-1 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "magenta" }}
            >
              Magenta
            </button>
            <button
              onClick={() => setColor("grey")}
              className="outline-none px-4  py-1 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "grey" }}
            >
              grey
            </button>
            <button
              onClick={() => setColor("lightcyan")}
              className="outline-none px-4  py-1 rounded-full text-black shadow-lg "
              style={{ backgroundColor: "lightcyan" }}
            >
              lightcyan
            </button>
            <button
              onClick={() => setColor("indianred")}
              className="outline-none px-4  py-1 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "indianred" }}
            >
              indianred
            </button>
            <button
              onClick={() => setColor("gold")}
              className="outline-none px-4  py-1 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "gold" }}
            >
              gold
            </button>

            <button
              onClick={() => setColor("limegreen")}
              className="outline-none px-4  py-1 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "limegreen" }}
            >
              limegreen
            </button>
            <button
              onClick={() => setColor("lightblue")}
              className="outline-none px-4  py-1 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "lightblue" }}
            >
              lightblue
            </button>
            <button
              onClick={() => setColor("khaki")}
              className="outline-none px-4  py-1 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "khaki" }}
            >
              khaki
            </button>
            <button
              onClick={() => setColor("lavender")}
              className="outline-none px-4  py-1 rounded-full text-black shadow-lg "
              style={{ backgroundColor: "lavender" }}
            >
              lavender
            </button>
            <button
              onClick={() => setColor("crimson")}
              className="outline-none px-4  py-1 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "crimson" }}
            >
              crimson
            </button>
            <button
              onClick={() => setColor("chocolate")}
              className="outline-none px-4  py-1 rounded-full text-black shadow-lg "
              style={{ backgroundColor: "chocolate" }}
            >
              chocolate
            </button>
            <button
              onClick={() => setColor("gold")}
              className="outline-none px-4  py-1 rounded-full text-black shadow-lg "
              style={{ backgroundColor: "gold" }}
            >
              gold
            </button>
            <button
              onClick={() => setColor("tomato")}
              className="outline-none px-4  py-1 rounded-full text-black shadow-lg "
              style={{ backgroundColor: "tomato" }}
            >
              tomato
            </button>
            <button
              onClick={() => setColor("olive")}
              className="outline-none px-4  py-1 rounded-full text-black shadow-lg "
              style={{ backgroundColor: "olive" }}
            >
              olive
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
