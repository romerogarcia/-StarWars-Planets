const getList = () => {
  return fetch('https://swapi.dev/api/planets/')
    .then((response) => response.json())

    .then((data) => {
      console.log(data);
      const cleanData = data.results.map((item) => {
        return {
          name: item.name,
          population: item.population,
          diameter: item.diameter,
          terrain: item.terrain,
          films: item.films,
        };
      });
      return cleanData;
    });
};

//EXPORTAR EL SERVICIO FETCH
export default getList;
