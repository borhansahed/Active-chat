

import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Protected from './components/Protected';
import Register from './components/Register';

function App() {
  return (
   <Routes>
   
   <Route path='/' element={<Protected><Home/></Protected> }></Route>
   <Route path='/login' element={<Login/>} />
   <Route path='/register' element={<Register/>} />

   </Routes>
  );
}

export default App;
