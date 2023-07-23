import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';
import Penggunaan from './Pages/Penggunaan';
import Pembayaran from './Pages/Pembayaran';
import Tagihan from './Pages/Tagihan';
function App() {
  return (
    <Routes>
      <Route path='*' element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/penggunaan" element={<Penggunaan />} />
      <Route path="/tagihan" element={<Tagihan />} />
      <Route path="/pembayaran" element={<Pembayaran />} />
    </Routes>
  );
}

export default App;
