import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Fevarite from "./components/Fevarite";
import { Provider } from "react-redux";
import store from "./store/store";
function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/like" element={<Fevarite />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
