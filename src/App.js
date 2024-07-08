import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Tasks from './Components/Tasks';
import AddTask from './Components/AddTask';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Tasks />} />
            <Route path="/addTask" element={<AddTask />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
