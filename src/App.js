import React from "react";
import { Provider } from "react-redux";

import Sidebar from "./components/Sidebar";
import Video from "./components/Video";
import store from "./store";

function App() {
  return (
    <div>
      <h1 style={{ width: "100%", textAlign: "center" }}>ReactJS com Redux</h1>
      <hr style={{ marginBottom: 5 }} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <Provider store={store}>
          <Video style={{ marginLeft: 2 }} />
          <Sidebar style={{ marginRigth: 2 }} />
        </Provider>
      </div>
    </div>
  );
}

export default App;
