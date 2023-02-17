import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Coin from './Components/Coin';
import './App.css';
import Search from './Components/Search'


function App() {
  
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
        <Route path='/' element={<Search/>} />

          <Route path='CoinPage/:id' element={<Coin/>} />
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
