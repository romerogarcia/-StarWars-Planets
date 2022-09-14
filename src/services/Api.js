function getList() {
  return fetch('https://swapi.dev/api/planets/')
    .then((response) => response.json())
    .then((response) => {
      const result = response.results.map((item) => {
        return {
          index: item.index,
          name: item.name,
          population: item.population,
          diameter: item.diameter,
          terrain: item.terrain,
          films: item.films,
        };
      });
      return result;
    });
}
//EXPORTAR EL SERVICIO FETCH
//export default getList;

/*import axios from 'axios';
const getList = async () => {
  const request = axios.get('https://swapi.dev/api/planets/');
};*/

export default getList;
