function PlanetDetails(props) {
  return (
    <>
      <div className="planets__container__list">
        <h4 className="planets__container__list__element uppercase">
          {props.item.name}
        </h4>

        <p className="planets__container__list__element">
          Population - {props.item.population}
        </p>

        <p className="planets__container__list__element">
          Diameter - {props.item.diameter}
        </p>

        <p className="planets__container__list__element">
          Terrain - {props.item.terrain}
        </p>

        <a
          className="planets__container__list__element"
          href={props.item.films}
        >
          Films
        </a>
      </div>
    </>
  );
}

export default PlanetDetails;
