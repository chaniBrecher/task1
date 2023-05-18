import logo from './logo.svg';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import Gallery from './Gallery';
import Buttonn from './Buttonn';

function App() {

 return (
    <div className="App">
     <Routes>
       <Route path='/' element={<Buttonn/>}/>
       <Route path='gallery' element={<Gallery />} /> 
     </Routes>
    </div>
 );

}

export default App;
