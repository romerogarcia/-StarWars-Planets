import { useEffect, useState } from 'react';
import getList from '../services/Api';
import PlanetDetails from './PlanetDetails';

function Planets() {
  const [starWarsData, setStarWarsData] = useState([]);

  useEffect(() => {
    getList().then((response) => {
      setStarWarsData(response);
    });
  }, []);

  const renderPlanets = () => {
    return starWarsData.map((item) => {
      return (
        <div>
          <PlanetDetails item={item} />
        </div>
      );
    });
  };

  return (
    <div>
      <section className="planets">
        <h3 className="planets__title"> Planet Details </h3>
        <div className="planets__container">{renderPlanets()}</div>
      </section>
    </div>
  );
}

export default Planets;
