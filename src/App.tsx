import './App.css'
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  // const APP_TITLE = "Адвокaтське об'єднання \"Македонські та партнери\"";
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
       
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route index element={<Home/>}/>
          <Route path=""></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;
