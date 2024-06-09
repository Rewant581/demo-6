import React from 'react';

const Register = ({ setVisible }) => {
  return (
    <div className="form-container">
      <h2>Register</h2>
      <form>
        <input type="text" placeholder="Username" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
      <button onClick={() => setVisible(null)}>Close</button>
    </div>
  );
};

export default Register;
