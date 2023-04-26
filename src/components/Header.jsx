import React from 'react'
import logo from "../images/logo.svg"

const Header = () => {
  return (
    <>
        <header style={{color:"white"}}>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <a href=" ">
                    <img src={logo} height="100" alt="No encontrada" />
                </a>

                <h1>Sitio web con React</h1>

                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto">
                        <h4><a className="nav-item nav-link" style={{color: "white"}} href="">Home</a></h4>
                        <h4><a className="nav-item nav-link" style={{color: "white"}} href="">Doctores</a></h4>
                        <h4><a className="nav-item nav-link" style={{color: "white"}} href="">Mensajes</a></h4>
                        <h4><a className="nav-item nav-link" style={{color: "white"}} href="">Acerca De</a></h4>

                    </div>
                </div>


            </nav>
        </header>
    </>
  )
}

export default Header