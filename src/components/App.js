import { Route, Routes } from 'react-router-dom';
import '../styles/Main.scss';
import './Login';
import Login from '../components/Login';
import Registration from './Registration';
import Planets from './Planets';
import NotFound from './Notfound';

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
