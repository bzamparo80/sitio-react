import React from 'react'
import img_banner_1 from "../images/img_banner_1.jpg"
import img_banner_2 from "../images/img_banner_2.jpg"
import img_banner_3 from "../images/img_banner_3.jpg"

const Banner = () => {
  return (
    <div className="container" style={{marginTop:20, marginBottom:20}}>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src={img_banner_1} alt="First slide"/>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={img_banner_2} alt="Second slide"/>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={img_banner_3} alt="Third slide"/>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only"></span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only"></span>
            </a>
        </div>



    </div>
  )
}

export default Banner