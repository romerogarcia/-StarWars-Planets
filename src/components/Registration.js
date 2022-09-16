import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import yoda from '../images/yoda.png';
function Registration() {
  //error
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const navigate = useNavigate();

  //error
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // User Login info
  const database = [
    {
      username: 'Luke',
    },
    {
      username: 'Leia',
    },
  ];

  const errors = {
    uname: 'This user already exists',
  };

  const alert = () => {
    swal({
      title: 'Confirming registration',
      icon: 'success',
      button: 'Ok',
      timer: '2000',
    });
  };

  function handleSubmit(event) {
    //Prevent page reload
    event.preventDefault();

    var { uname } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.username === uname.value) {
        // Invalid password
        setErrorMessages({ name: 'uname', message: errors.uname });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      navigate('planets');
      alert();
    }
  }

  return (
    <>
      <div className="main">
        <section className="main__section">
          <form className="main__section__form" onSubmit={handleSubmit}>
            <h3 className="main__section__form__title">CREATE YOUR ACCOUNT</h3>
            <div className="input-container">
              <input type="text" name="uname" placeholder="Username" required />
              {renderErrorMessage('uname')}
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
          <img className="main__imageYoda" src={yoda} alt="Yoda" />
        </div>
      </div>
    </>
  );
}

export default Registration;
