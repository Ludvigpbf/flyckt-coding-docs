import "@styles/App.css";
import { Outlet } from "react-router-dom";
import Header from "@components/Header";
import Sidepanel from "@components/Sidepanel";

function App() {
  return (
    <>
      <Header />

      <Sidepanel>Buttons</Sidepanel>
      <main className="outlet">
        <Outlet />
      </main>
    </>
  );
}

export default App;
