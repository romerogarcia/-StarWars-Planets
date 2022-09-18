/*function getList() {
  return fetch('https://swapi.dev/api/planets/?page=1')
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

export default getList;*/
