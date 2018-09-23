import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';

import Datos from './todos.json';
import Formulario from './Componentes/Formulario';

class App extends Component {
  //super para usar this en el construtor, state como estado del componente
  constructor(){
    super();
    this.state = {
      tareas : Datos.todos
    }
    this.guardarTareaNueva = this.guardarTareaNueva.bind(this);
    this.eliminarTarea = this.eliminarTarea.bind(this);
    
  }

  //le enviamos la funcion al hijo para q lo use en su property
  guardarTareaNueva(tareaNueva){
    this.setState({
      tareas : this.state.tareas.concat([tareaNueva])
    })
  }
  
  //si vamos a usar una variable del html, usarmos bind(,)
  eliminarTarea(index){
    //Cada vez q se modiifca un estado corre el render devuleta
    this.setState({
      tareas : this.state.tareas.filter((unaTarea,i)=>{
        return i !== index
      })
    })
  }


  render() {
    const cuadradosConTareas = this.state.tareas.map((unaTarea,indice)=> {
      return(
        <div key={indice} className="col-md-4">
          <div className="card mt-4 mb-4 text-center">
            <div className="card-header">
              <h5>{unaTarea.titulo}</h5>
              <span className="badge badge-pill badge-primary">{unaTarea.prioridad}</span>
            </div>
            <div className="card-body">
              <p>{unaTarea.descripcion}</p>
              <p className="font-weight-bold">{unaTarea.responsable}</p>
            </div>
            <div className="card-footer">
              <button type="button" className="btn btn-danger" 
              onClick={this.eliminarTarea.bind(this,indice)}>Borrar</button>
            </div>
          </div>
        </div>
      );
    })

    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
              <a href="" className="text-white">
                  Tareas <span className="badge badge-light">{this.state.tareas.length}</span> 
              </a>
              <img src={logo} className="App-logo" alt="logo" />
        </nav>

        <div className="container">
          <div className="row mt-4">
            <div className="col-md-3"><Formulario guardameEsta={this.guardarTareaNueva}/></div>
            <div className="col-md-9"><div className="row">{cuadradosConTareas}</div></div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
