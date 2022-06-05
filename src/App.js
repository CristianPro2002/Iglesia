import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,
        Routes,
        Route,} from 'react-router-dom';
import Index from './components/Index'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
