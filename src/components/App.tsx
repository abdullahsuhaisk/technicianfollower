import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Provider as JobProvider } from './hooks/JobContext';
import { Header } from './ui/Header/Header';

// React.lazy takes in a single argument, a function that invokes a dynamic import, and returns a regular React Component.
const Home = React.lazy(() => import('./Home/Home'));
const Login = React.lazy(() => import('./Login'));
const QrCodeGenarator = React.lazy(() => import('./QrCodeGenarator'));
const Confirmation = React.lazy(() => import('./Confirmation/Confirmation'));

const Loading = () => <p> Loading ... </p>;

function App() {
  const [userLogged, setUserlogged] = useState<boolean>(false);
  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("username")) {
      setUserlogged(true)
    } else {
      navigate('/login');
    }
  }, [])

  function loginFun(userMail: string) {
    localStorage.setItem('username', userMail);
    setUserlogged(true);
    navigate('/');
  }

  function logout() {
    setUserlogged(false);
    localStorage.clear();
  }

  return (
    <React.Suspense fallback={<Loading />}>
      <div className="container">
        <JobProvider>
          <Header userLogged={userLogged} onLogout={logout} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login onLogin={loginFun} />} />
            <Route path='/settings' element={<QrCodeGenarator />} />
            <Route path='/conf/' element={<Confirmation />} />
          </Routes>
        </JobProvider>
      </div>
    </React.Suspense>
  );
}

export default App;
