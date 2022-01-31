import React from "react";

import ReactDOM from "react-dom";
import { Example } from "../Example/Example.tsx";

function App() {
  return <Example text="Hello!" />;
}

ReactDOM.render(<App />, document.getElementById("app"));
