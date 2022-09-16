import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import swal from 'sweetalert';

function Login() {
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
      password: 'Skywalker',
    },
    {
      username: 'Leia',
      password: 'Skywalker',
    },
  ];

  const errors = {
    uname: 'invalid username',
    pass: 'invalid password',
  };

  const alert = () => {
    swal({
      title: 'Welcome, registered user!',
      icon: 'success',
      button: 'Ok',
      timer: '2000',
    });
  };

  function handleSubmit(event) {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: 'pass', message: errors.pass });
      } else {
        setIsSubmitted(true);
        alert();
        navigate('Planets');
      }
    } else {
      // Username not found
      setErrorMessages({ name: 'uname', message: errors.uname });
    }
  }

  return (
    <div className="login">
      <section className="sectionLogin">
        <img className="sectionLogin__logo" src={logo} alt="Yoda" />
        <p className="sectionLogin__p">
          On this website you can search for the different planets of the Star
          Wars saga through our search engine.
        </p>
      </section>

      <form className="login__form" onSubmit={handleSubmit}>
        <h3 className="login__form__title">SIGN IN</h3>
        <div className="input-container">
          <input
            type="text"
            name="uname"
            placeholder="Username"
            autoComplete="on"
            required
          />
          {renderErrorMessage('uname')}
        </div>
        <div className="input-container">
          <input
            type="password"
            name="pass"
            placeholder="Password"
            autoComplete="on"
            required
          />

          {renderErrorMessage('pass')}
        </div>

        <div className="button-container">
          <button className="button">Enter</button>
        </div>
        <Link to="/Registration">
          <p className="login__form__p">Registrer</p>
        </Link>
      </form>
    </div>
  );
}
export default Login;
