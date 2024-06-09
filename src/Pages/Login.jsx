import React from 'react';

const Login = ({ setVisible }) => {
  return (
    <div className="form-container">
      <h2>Login</h2>
      <form>
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <button onClick={() => setVisible(null)}>Close</button>
    </div>
  );
};

export default Login;
