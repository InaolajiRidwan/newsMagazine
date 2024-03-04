import React from "react";

const Navbar = (props) => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-dark sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand text-white ">
          <span className="badge bg-white text-dark fs-5">
            <span className="text-primary">flameTech</span>NewsMag
          </span>
        </a>
        <button
          className="navbar-toggler bg-white "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse text-end justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <button
                className="nav-link text-white bg-dark border-0"
                onClick={() => props.setCategory("technology")}
              >
                Technology
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link text-white bg-dark border-0"
                onClick={() => props.setCategory("business")}
              >
                Business
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link text-white bg-dark border-0"
                onClick={() => props.setCategory("health")}
              >
                Health
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link text-white bg-dark border-0"
                onClick={() => props.setCategory("science")}
              >
                Science
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link text-white bg-dark border-0"
                onClick={() => props.setCategory("sport")}
              >
                Sport
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link text-white bg-dark border-0"
                onClick={() => props.setCategory("entertainment")}
              >
                Entertainment
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
