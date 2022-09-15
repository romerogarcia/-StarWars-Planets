function PlanetDetails(props) {
  return (
    <>
      z
      <div>
        <div className="planets__container__list">
          <h4 className="planets__container__list__element">
            {props.item.name}
          </h4>

          <p className="planets__container__list__element">
            {props.item.population}
          </p>

          <p className="planets__container__list__element">
            {props.item.diameter}
          </p>

          <p className="planets__container__list__element">
            {props.item.terrain}
          </p>

          <a
            className="planets__container__list__element"
            href={props.item.films}
          >
            Films
          </a>
        </div>
      </div>
    </>
  );
}

export default PlanetDetails;
