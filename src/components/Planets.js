//import getList from '../../src/services/Api';
//import { useEffect } from 'react';
import { useEffect, useState } from 'react';
import getList from '../services/Api';
import PlanetDetails from './PlanetDetails';

function Planets() {
  const [starWarsData, setStarWarsData] = useState([]);
  //const [searchName, setSearchName] = useState('');

  /* useEffect(() => {
    // Dentro de useEffect llamamos a la API
    getList().then((response) => {
      // Cuando la API responde guardamos los datos en el estado para que se vuelva a renderizar el componente
      setStarWarsData(response);
      console.log('funsiona');
      console.log(starWarsData);
    });
    // Aquí ponemos un array vacío porque solo queremos que se llame a la API la primera vez
  }, []);*/

  useEffect(() => {
    // Llamamos a la API pasando por parámetros el searchName
    getList().then((response) => {
      // Cuando la API responde guardamos los personajes en el estado
      setStarWarsData(response);
    });
  }, []);

  /*const handleSearchName = (ev) => {
    // Cuando la usuaria cambia el input guardamos su valor en el estado
    setSearchName(ev.target.value);
  };*/

  const renderPlanets = () => {
    // Pintamos el listado de personajes respondido por la API
    return starWarsData.map((item) => {
      // La API no nos devuelve un id para cada personaje, por eso usamos el index que nos da el map
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
