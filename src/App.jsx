import { Routes } from 'react-router';
import './App.css';
import Home from './views/Home';
import { BrowserRouter } from 'react-router';
import { Route } from 'react-router';
import InstituicaoEnsino from './views/InstituicaoEnsino';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/instituicaoEnsino' element={<InstituicaoEnsino/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;