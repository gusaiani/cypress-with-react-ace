import React, { useRef } from "react";
import AceEditor from "react-ace";
import { Container } from "./App.styled";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

function App() {
  const reactAceEditor = useRef();

  const handleChange = newValue => {
    console.log("change", newValue, reactAceEditor);
  };

  const handleCursorChange = e => {
    console.log("cursor change", e);
  };
  return (
    <Container>
      <h1>A title</h1>
      <AceEditor
        commands={[
          {
            name: "commandName",
            bindKey: { win: "arrow-down", mac: "arrow-down" },
            exec: () => {
              console.log("🚀, key-binding used");
            }
          },
          {
            name: "save",
            bindKey: {
              win: "Ctrl-enter",
              mac: "Cmd-enter"
            },
            exec: () => {
              console.log("🚀, key-binding used ctrl-enter");
            }
          }
        ]}
        mode="javascript"
        theme="monokai"
        onChange={handleChange}
        onCursorChange={handleCursorChange}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
        fontSize={18}
        setOptions={{
          minLines: 1,
          maxLines: 14,
          showLineNumbers: false
        }}
        showGutter={false}
        style={{
          width: 1000
        }}
        wrapEnabled={true}
      />
    </Container>
  );
}

export default App;
