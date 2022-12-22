import logo from './logo.svg';
import './App.css';
import NavBar from './component/frame/NavBar';
import { getAllBar } from './API/barAPI';
import BarList from './component/barList';
import {Route, Routes, useParams} from 'react-router-dom';
import BarProductList from './component/frame/barInfo/barProductList';

function App() {

  
 //   <Provider store={store}>


  return (
    <div className='App'>
 
        <NavBar/>
        <Routes>
          <Route path="/" element={<BarList/>}/>
            <Route path='/BarInfo/:id' element={<BarProductList/>}/>
        
        </Routes>
   
    </div>
  );
}

export default App;