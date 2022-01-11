import { Chat, AppHeader } from "./components";
import { AppProvider } from "./providers/app";

const App = () => {
  return (
    <AppProvider>
      <AppHeader />
      <Chat />
    </AppProvider>
  );
};

export default App;
