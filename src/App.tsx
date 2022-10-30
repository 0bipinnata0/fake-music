import { Button } from "@mui/material";
import "./App.css";
import { invoke } from "@tauri-apps/api/tauri";
import { listen } from "@tauri-apps/api/event";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    listen("c_event", (event) => {
      console.log('zxcv',event);
    });
  }, []);
  return (
    <div className="App">
      <Button
        onClick={async () => {
          console.info("abc");
          console.log(await invoke("greet", { name: "1234" }));
        }}
      >
        调用命令 & 监听传来的消息
      </Button>
    </div>
  );
}

export default App;
