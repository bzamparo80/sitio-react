import React from 'react'
import card1 from "../images/card1.jpg"
import card2 from "../images/card2.jpg"
import card3 from "../images/card3.jpg"

const ContentHome = () => {
  return (
<div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
    <div className="col">
        <div className="card">
        <img src={card1} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">CESFAM PEDRO DE VALDIVIA</h5>
            <p className="card-text" style={{textAlign:"justify"}}>Fundado en 1988, comenzo a funcionar como una posta dependiente del aquel entonces consultorio O`higgins.</p>
        </div>
        </div>
    </div>
    <div className="col">
        <div className="card">
        <img src={card2} class="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">CESFAM LORENZO ARENAS</h5>
            <p className="card-text" style={{textAlign:"justify"}}>Inicio su funcionamiento en 1958 pero despues de dos años resulto destruido tras el terremoto de 1960.</p>
        </div>
        </div>
    </div>
    <div className="col">
        <div className="card">
        <img src={card3} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">CESFAM DE CURICO</h5>
            <p className="card-text" style={{textAlign:"justify"}}>Trabajadores se suman a paro indefinido de la salud por sueldos impagos. Solo se atenderan urgencias.</p>
        </div>
        </div>
    </div>
    </div>
</div>
  )
}

export default ContentHome