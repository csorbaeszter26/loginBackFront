import React, {useContext} from 'react'
import {Outlet, Link} from "react-router-dom";
import { AuthContext } from '../contexts/AuthContext';

function Layout() {

    const {kijelentkezes_fv} =useContext(AuthContext)

  return (
    <div className="container">
      <header className="App-header">
        <h1>React login és regisztráció</h1>
      </header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link activate" to="/">Kezdőlap </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link activate" to="/bejelentkezes">Bejelentkezés</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link activate" to="/regisztracio">Regisztracio</Link>
            </li>
          </ul>
          <button onClick={kijelentkezes_fv} className="btn btn-primary">Kijelentkezés</button>
        </div>
      </nav>
      <article>
        <Outlet />
      </article>
      <footer>

      </footer>
    </div>
  )
}

export default Layout
