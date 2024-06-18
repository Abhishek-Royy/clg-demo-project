import React from "react";

import PythonPDF from "../assets/notes/Python.pdf";

function Demo() {
  return (
    <div>
      <a href={PythonPDF} download>
        <h1>Click here to download</h1>
      </a>
    </div>
  );
}

export default Demo;
