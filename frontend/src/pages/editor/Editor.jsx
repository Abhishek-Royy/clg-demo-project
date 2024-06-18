import React, { useCallback, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { javascript } from "@codemirror/lang-javascript";

import Result from "./Result"

function Editor() {
  const [html_edit, setHtmlEdit] = useState("");
  const [css_edit, setCssEdit] = useState("");
  const [js_edit, setJsEdit] = useState("");

  // HTML
  const onChangeHtml = useCallback((value) => {
    setHtmlEdit(value);
  }, []);

  // CSS
  const onChangeCss = useCallback((value) => {
    setCssEdit(value);
  }, []);

  // JS
  const onChangeJs = useCallback((value) => {
    setJsEdit(value);
  }, []);

  const srcEdit = `
  <html>
  <body>${html_edit}</body>
  <style>${css_edit}</style>
  <script>${js_edit}</script>
  </html>
  `;

  return (
    <>
    <div className="main-body w-full h-auto bg-[#1e272e] p-2">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        {/* html */}
        <div className="bg-[#282c34] p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2 text-white">HTML</h2>
          <CodeMirror
            className="text-xl border-gray-700 border"
            value={html_edit}
            height="300px"
            theme="dark"
            extensions={[html()]}
            onChange={onChangeHtml}
          />
        </div>

        {/* css */}
        <div className="bg-[#282c34] p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2 text-white">CSS</h2>
          <CodeMirror
            className="text-xl border-gray-700 border"
            value={css_edit}
            height="300px"
            theme="dark"
            extensions={[css()]}
            onChange={onChangeCss}
          />
        </div>

        {/* js */}
        <div className="bg-[#282c34] p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2 text-white">JS</h2>
          <CodeMirror
            className="text-xl border-gray-700 border"
            value={js_edit}
            height="300px"
            theme="dark"
            extensions={[javascript()]}
            onChange={onChangeJs}
          />
        </div>
      </div>
    </div>
    <Result srcCode={srcEdit}/>
    </>
  );
}

export default Editor;

