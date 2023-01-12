import React from "react";
import { Link } from "react-router-dom";
import "../../styles/index.css";

export const Segmento = () => {
  return (
    <React.Fragment>
      <section className="section-products mb-2">
        <div className="container">
          <div className="containersegmento d-flex justify-content-center">
            <h1 className="display-6 text-bold text-center">
              ¿Qué encontrarás en haztuoferta?
            </h1>
          </div>
          <br></br>
          <div className="containersegmento d-flex justify-content-center">
            <p className="lead text-bold text-center">
              Encontrarás todo tipo de productos con opción a intercambio y
              precios ajustados al mercado
            </p>
          </div>

          <br></br>
          <br></br>
          <div className="row">
            <div className="col-md-6 col-lg-4 col-xl-3">
              <Link className="seccion-link" to="/ventas">
                <div className="seccion">
                  <div className="image">
                    <span className="img-card">
                      <img src="http://via.placeholder.com/640x360" />
                    </span>
                  </div>
                  <div className="seccion-inner text-center pt-5">
                    <div className="header text-center">
                      <h2 className="">PRODUCTOS EN VENTA</h2>
                      <h3>!Vende tu Producto!</h3>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <Link
                className="seccion-link"
                to="/Oferts"
                // preventScrollReset={true}
              >
                <div className="seccion">
                  <div className="image">
                    <span className="img-card">
                      <img src="http://via.placeholder.com/640x360" />
                    </span>
                  </div>
                  <div className="seccion-inner text-center pt-5">
                    <div className="header text-center">
                      <h2 className="">OFERTAS DE COMPRA</h2>
                      <h3>!Haz una Oferta!</h3>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <Link className="seccion-link" to="/intercambios">
                <div className="seccion">
                  <div className="image">
                    <span className="img-card">
                      <img src="http://via.placeholder.com/640x360" />
                    </span>
                  </div>
                  <div className="seccion-inner text-center pt-5">
                    <div className="header text-center">
                      <h2 className="">INTERCAMBIOS</h2>
                      <h3>!Propón un Trueque!</h3>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <Link className="seccion-link" to="/subastas">
                <div className="seccion">
                  <div className="image">
                    <span className="img-card">
                      <img src="http://via.placeholder.com/640x360" />
                    </span>
                  </div>
                  <div className="seccion-inner text-center pt-5">
                    <div className="header text-center">
                      <h2 className="">SUBASTAS</h2>
                      <h3>!Subasta tu Producto!</h3>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
