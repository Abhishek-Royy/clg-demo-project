import React from "react";
import Editor from "./Editor";

function Code_Editor() {
  return (
    <>
      <div className="main-wrapper w-full h-auto">
        <div className="main-1 lg:flex  md:flex flex-wrap justify-between items-center px-4 bg-[#2f3640] py-2">
          <div className="left">
            <div className="logo font-bold text-2xl gap-5 text-white text-center flex items-center justify-center ">

              <img
                className="w-12"
                src="https://static.vecteezy.com/system/resources/previews/013/441/088/original/code-symbol-illustration-png.png"
                alt=""
              />
              <p>A Smart code editor by happyCoding family 🤷‍♂️</p>
            </div>
          </div>
        </div>
        <Editor />
 
      </div>

    </>
  );
}

export default Code_Editor;

