import { Routes, Route } from 'react-router-dom';
import { Login } from './features/auth/Login';
import { Home } from './pages/Home';
import './App.css';
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Home />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
