import './App.css';
import HomePage from './HomePage';

import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  
  return (
    <>
      <div className="App">
        <Routes>
          <Route path='/' element={<HomePage/>} />
          {/* <Route path='/test' element={<CHeader/>} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
