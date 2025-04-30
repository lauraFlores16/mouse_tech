import React, { useState } from 'react';
import '../styles/Login.css';

function Login() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de autenticación
    console.log('Intentando iniciar sesión con:', credentials);
  };

  return (
    <div className="login-container">
      <div className="login-form-wrapper">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="login-button">Iniciar Sesión</button>
        </form>
        <div className="login-footer">
          <p>¿No tienes una cuenta? <a href="#register">Regístrate</a></p>
          <p><a href="#forgot-password">¿Olvidaste tu contraseña?</a></p>
        </div>
      </div>
    </div>
  );
}

export default Login;