import { Route, Routes } from 'react-router-dom';

import '../styles/App.scss';
import '../styles/Login.scss';
import '../styles/Notfound.scss';
import './Login';
import Login from './Login';
import Registration from './Registration';
import Planets from './Planets';
import NotFound from './Notfound';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Planets" element={<Planets />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
