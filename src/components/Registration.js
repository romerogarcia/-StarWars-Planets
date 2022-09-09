import { Link } from 'react-router-dom';
import yoda from '../images/yoda.png';
function Registration() {
  return (
    <>
      <div className="main">
        <section className="main__section">
          <h3 className="main__section__title">
            Do you want to be part of our community?
          </h3>
          <form className="main__section__form">
            <div className="input-container">
              <label>
                <strong>Username</strong>{' '}
              </label>
              <input type="text" name="uname" required />
            </div>
            <div className="input-container">
              <label>
                <strong>Password</strong>{' '}
              </label>
              <input type="password" name="pass" required />
            </div>
            <div className="input-container">
              <label>
                <strong>First Name </strong>
              </label>
              <input type="text" name="pass" required />
            </div>
            <div className="input-container">
              <label>
                <strong>Last Name</strong>{' '}
              </label>
              <input type="text" name="pass" required />
            </div>
            <div className="button-container">
              <button className="button">Register</button>
            </div>
            <Link to="/">
              <p className="main__section__form__p">Back to Login</p>
            </Link>
          </form>
        </section>

        <div>
          <img className="main__imageYoda" src={yoda} alt="Image Yoda" />
        </div>
      </div>
    </>
  );
}

export default Registration;
