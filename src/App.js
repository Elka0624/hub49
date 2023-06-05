import { Routes, Route } from 'react-router-dom';
import './App.css';
import CreatePassword from './pages/createPassword/CreatePassword';
import ForgetPassword from './pages/forgetPassword/ForgetPassword';
import Login from './pages/login/Login';
import RecoveryLink from './pages/RecoveryLink/RecoveryLink';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/forgetPassword' element={<ForgetPassword />} />
        <Route path='/recoveryLink' element={<RecoveryLink />} />
        <Route path='/createPassword' element={<CreatePassword />} />
      </Routes>
    </div>
  );
}

export default App;
