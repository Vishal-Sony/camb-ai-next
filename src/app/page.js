import App from "./App.jsx";
import { DataContextProvider } from "./dataContext.jsx";
export default function Home() {
  return (
    <DataContextProvider>
    <App />
  </DataContextProvider>
  );
}
