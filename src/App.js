import './App.css';
import Quote from './Components/Quote';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import TakingAction from './Components/TakingAction';

function App() {
  

  return (
    <Router>
    <>
      <Routes>
      <Route path='/' element={<Quote/>}/>
      <Route path='/actions' element={<TakingAction/>}/>
      </Routes>    
    </>
    </Router>
  )
}

export default App;



//prop drilling react