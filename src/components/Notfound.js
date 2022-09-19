import '../styles/Layout/Notfound.scss';
import Stars from '../images/stars.png';

const NotFoundElement = () => {
  return (
    <>
      <div className="wrapper">
        <div className="text_group">
          <p className="text_404">404</p>
          <p className="text_lost">
            The page you are looking for <br />
            has been lost in space.
          </p>
        </div>
        <div className="window_group">
          <div className="window_404">
            <img className="stars" src={Stars}></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundElement;
