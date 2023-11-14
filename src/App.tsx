import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import SideBar from "./components/SideBar/SideBar";
import Footer from "./components/Footer/Footer";

import "./App.css";
import { ApiProvider } from "./Context/UseContext";

function App() {
  return (
    <ApiProvider >
      <div className="app">
        <Header />
        <Main />
        <Footer />
      </div>
      <SideBar />
    </ApiProvider>
  );
}

export default App;
