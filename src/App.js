import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';

import Datos from './todos.json';

class App extends Component {
  //super para usar this en el construtor, state como estado del componente
  constructor(){
    super();
    this.state = {
      tareas : Datos.todos
    }
  }

  render() {
    const cuadradosConTareas = this.state.tareas.map((unaTarea,indice)=> {
      return(
        <div key={indice} className="col-md-4">
          <div className="card mt-4 text-center">
            <div className="card-header">
              <h4>{unaTarea.titulo}</h4>
              <span className="badge badge-pill badge-primary">{unaTarea.prioridad}</span>
            </div>
            <div className="card-body">
              <p>{unaTarea.descripcion}</p>
              <p className="font-weight-bold">{unaTarea.responsable}</p>
            </div>
          </div>
        </div>
      );
    })

    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
              <a href="" className="text-white">
                  Tareas <span class="badge badge-light">{this.state.tareas.length}</span> 
              </a>
              <img src={logo} className="App-logo" alt="logo" />
        </nav>

        <div className="container">
          <div className="row mt-4">
            {cuadradosConTareas}
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
