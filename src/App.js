import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import AddBus from './components/AddBus';
import SearchBus from './components/SearchBus';
import DeleteBus from './components/DeleteBus';
import ViewAllBus from './components/ViewAllBus';

function App() {
  return (


    <BrowserRouter>

      <Routes>
        <Route path='/' element={<AddBus />} />
        <Route path='/search' element={<SearchBus />} />
        <Route path='/delete' element={<DeleteBus />} />
        <Route path='/view' element={<ViewAllBus />} />
      </Routes>


    </BrowserRouter>
  );
}

export default App;
