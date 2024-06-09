import logo from './logo.svg';
import './App.css';
import AddBed from './components/AddBed';
import SearchBed from './components/SearchBed';
import DeleteBed from './components/DeleteBed';
import ViewBed from './components/ViewBed';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<AddBed/>} />
    <Route path='/search' element={<SearchBed/>} />
    <Route path='/delete' element={<DeleteBed/>} />
    <Route path='/view' element={<ViewBed/>} />
  </Routes>
  </BrowserRouter>
  );
}

export default App;
