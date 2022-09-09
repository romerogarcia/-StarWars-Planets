import { Link } from 'react-router-dom';
function Registration() {
  return (
    <>
      <div className="form">
        <form>
          <div className="input-container">
            <label>Username </label>
            <input type="text" name="uname" required />
          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password" name="pass" required />
          </div>
          <div className="input-container">
            <label>First Name </label>
            <input type="text" name="pass" required />
          </div>
          <div className="input-container">
            <label>Last Name </label>
            <input type="text" name="pass" required />
          </div>
          <div className="button-container">
            <button>Register</button>
          </div>
          <Link to="/">
            <p>Back to Login</p>
          </Link>
        </form>
      </div>
    </>
  );
}

export default Registration;
