import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function Login() {
  //error
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = (event) => {
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
      }
    } else {
      // Username not found
      setErrorMessages({ name: 'uname', message: errors.uname });
    }
  };

  return (
    <>
      <header>
        <section>
          <h2>Star Wars Planets</h2>
          <p>
            On this website you can search for the different planets of the Star
            Wars saga through our search engine.
          </p>
        </section>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>Username</label> <input type="text" name="uname" required />
            {renderErrorMessage('uname')}
          </div>
          <div className="input-container">
            <label>Password</label>
            <input type="password" name="pass" />

            {renderErrorMessage('pass')}
          </div>

          <div className="button-container">
            <Link to="/Planets">
              <button>Enter</button>
            </Link>
          </div>
          <Link to="/Registration">
            <p>Registrer</p>
          </Link>
        </form>
      </main>
    </>
  );
}
export default Login;
