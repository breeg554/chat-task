import React from "react";
import { AppProvider } from "./providers/app";

const App = () => {
  return (
    <AppProvider>
      <p>Hello word</p>
      <p>dasda</p>
    </AppProvider>
  );
};

export default App;
