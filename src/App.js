//Router Component Part
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

//Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

//Components
import Navbar from './components/Navbar';

//Hooks -- user bilgisi "useAuthContext" içinde tutuluyor!
import { useAuthContext } from './hooks/useAuthContext';

function App() {

  const { authIsReady, user } = useAuthContext();

  return (
    <div className='App'>
      {authIsReady && (<BrowserRouter>
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route path='/' element={user ? <Home /> : <Navigate to="/login" />} />
            <Route path='/login' element={!user ? <Login /> : <Navigate to="/" />} />
            <Route path='/signup' element={!user ? <Signup /> : <Navigate to="/" />} />
          </Routes>
        </div>
      </BrowserRouter>)}
    </div>
  );
}

export default App;
