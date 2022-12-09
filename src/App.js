import './App.css';
import Button from '@mui/material/Button';
import { Routes, Route } from 'react-router-dom';
import Tasks from './todo-component/Tasks';
function App() {
  return (
   <Routes>
     <Route path="/" element={<Tasks/>}/>
   </Routes>
  );
}

export default App;
