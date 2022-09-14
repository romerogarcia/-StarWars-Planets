import { Link } from 'react-router-dom';
import yoda from '../images/yoda.png';
function Registration() {
  return (
    <>
      <div className="main">
        <section className="main__section">
          <form className="main__section__form">
            <h3 className="main__section__form__title">CREATE YOUR ACCOUNT</h3>
            <div className="input-container">
              <input type="text" name="uname" placeholder="Username" required />
            </div>
            <div className="input-container">
              <input
                type="password"
                name="pass"
                placeholder="Password"
                required
              />
            </div>
            <div className="input-container">
              <input
                type="text"
                name="pass"
                placeholder="First Name"
                required
              />
            </div>
            <div className="input-container">
              <input type="text" name="pass" placeholder="Last Name" required />
            </div>
            <div className="button-container">
              <button className="button">Register</button>
            </div>
            <Link to="/">
              <p className="main__section__form__p">
                Already have an account?{' '}
                <span className="main__section__form__span">Back to Login</span>
              </p>
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
