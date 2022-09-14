import { Route, Routes } from 'react-router-dom';
//import { useEffect, useState } from 'react';
import '../styles/App.scss';
import '../styles/Layout/Login.scss';
import '../styles/Layout/Notfound.scss';
import '../styles/Layout/Registration.scss';
import '../styles/Layout/Planets.scss';
import './Login';
import Login from '../components/Login';
import Registration from './Registration';
import Planets from './Planets';
import NotFound from './Notfound';
//import getList from '../services/Api';

function App() {
  /*const [dataList, setDataList] = useState([]);

  useEffect(() => {
    getList().then((data) => {
      setDataList(data);
    });
    console.log(getList);
  }, []);*/

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
