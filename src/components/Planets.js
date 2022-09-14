//import getList from '../../src/services/Api';
//import { useEffect } from 'react';
import { useEffect, useState } from 'react';
import getList from '../services/Api';

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
    return starWarsData.map((item, index) => {
      // La API no nos devuelve un id para cada personaje, por eso usamos el index que nos da el map
      return (
        <section className="planets__container">
          <div key={index} className="planets__container__list">
            <h4 className="planets__container__list__element">{item.name}</h4>
            <p className="planets__container__list__element">
              {item.population}
            </p>
            <p className="planets__container__list__element">{item.diameter}</p>
            <p className="planets__container__list__element">{item.terrain}</p>
            <p className="planets__container__list__element">{item.films}</p>
          </div>
        </section>
      );
    });
  };

  return (
    <div>
      <section className="planets">
        <ul>{renderPlanets()}</ul>
      </section>
    </div>
  );
}

export default Planets;
