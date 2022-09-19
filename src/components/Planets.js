import { useEffect, useState } from 'react';
import PlanetDetails from './PlanetDetails';

function Planets() {
  const [starWarsData, setStarWarsData] = useState(null);

  useEffect(() => {
    fetch('https://swapi.dev/api/planets/?page=1')
      .then((res) => res.json())
      .then((data) => setStarWarsData(data));
  }, []);

  const handleNext = (event) => {
    const urlNext = starWarsData && starWarsData.next;
    event.preventDefault();

    fetch(urlNext)
      .then((res) => res.json())
      .then((data) => setStarWarsData(data));
  };

  const handlePrevious = (event) => {
    const urlPrevious = starWarsData && starWarsData.previous;
    event.preventDefault();

    fetch(urlPrevious)
      .then((res) => res.json())
      .then((data) => setStarWarsData(data));
  };

  return (
    <div>
      <section className="planets">
        <h1 className="planets__title">Star Wars Planets</h1>
        {starWarsData && (
          <div className="planets__container">
            {starWarsData.results.map((item) => (
              <PlanetDetails item={item} />
            ))}

            <div className="planets__container__containerButtons">
              <button
                className="planets__container__containerButtons__button"
                onClick={handlePrevious}
                disabled={!starWarsData.previous}
              >
                Previous
              </button>
              <button
                className="planets__container__containerButtons__button"
                onClick={handleNext}
                disabled={!starWarsData.next}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default Planets;
