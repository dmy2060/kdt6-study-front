import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import Clock from "./Clock";
// 한 개 이상 export 작성시
// import {Clock2} from "./Clock"

const root = ReactDOM.createRoot(document.getElementById("root"));
setInterval(() => {
  root.render(
    <React.StrictMode>
      <App />
      {/* <Clock /> */}
    </React.StrictMode>
  );
}, 1000);
