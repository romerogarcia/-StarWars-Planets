function PlanetDetails(props) {
  return (
    <>
      <div className="planets__container__list">
        <tr key={props.item.name}>
          <h4 className="planets__container__list__element uppercase">
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
        </tr>
      </div>
    </>
  );
}

export default PlanetDetails;
