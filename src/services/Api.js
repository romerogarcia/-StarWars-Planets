/*const getList = () => {
  return fetch('https://swapi.dev/api/planets/')
    .then((response) => response.json())

    .then((data) => {
      console.log(data);
      const cleanData = data.results.map((item) => {
        return {
          name: item.results.name,
          population: item.results.population,
          diameter: item.results.diameter,
          terrain: item.results.terrain,
          films: item.results.films,
        };
      });
      return cleanData;
    });
};

//EXPORTAR EL SERVICIO FETCH
export default getList;*/

import axios from 'axios';
const getList = async () => {
  const request = axios.get('https://swapi.dev/api/planets/');
};

export default getList;
