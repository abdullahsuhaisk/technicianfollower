import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider as JobProvider } from './hooks/JobContext';

// React.lazy takes in a single argument, a function that invokes a dynamic import, and returns a regular React Component.
const Home = React.lazy(() => import('./Home'));
const Login = React.lazy(() => import('./Login'));
const QrCodeGenarator = React.lazy(() => import('./QrCodeGenarator'));
const Confirmation = React.lazy(() => import('./Confirmation'));

const Loading = () => <p>Loading ...</p>;

function App() {
  return (
    <React.Suspense fallback={<Loading />}>
      <div className="container">
        <JobProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/settings' element={<QrCodeGenarator />} />
          <Route path='/conf/' element={<Confirmation />} />
        </Routes>
        </JobProvider>
      </div>
    </React.Suspense>
  );
}

export default App;
