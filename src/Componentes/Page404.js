import React, { Component } from 'react';
import '../App.css'
//esto es para evitar usar tag <a>
import { Link } from 'react-router-dom';

class Page404 extends Component {
  render() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="error-template">
                        <h1>
                            Oops!</h1>
                        <h2>
                            404 Not Found</h2>
                        <div className="error-details">
                            Lo sentimos, ocurrio un error, la pagina buscada no existe!
                        </div>
                        <div className="error-actions">
                            <Link to='/' className="btn btn-primary btn-lg">Ir a la pagina princial</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Page404;