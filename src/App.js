import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';

import Formulario from './Componentes/Formulario';
import Badge from './Componentes/Badge';

import firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: 'AIzaSyAaCutV09t0IcMcdYtf2ko0T-EF7fAFDJs',
    authDomain: 'nota-crud-b5193.firebaseapp.com',
    databaseURL: 'https://nota-crud-b5193.firebaseio.com',
    projectId: 'nota-crud-b5193',
    storageBucket: 'nota-crud-b5193.appspot.com',
    messagingSenderId: '321895203432'
  };
  firebase.initializeApp(config);
  

class App extends Component {
  //super para usar this en el construtor, state como estado del componente
  constructor(){
    super();
    this.state={
      tareas:[]
    }
    this.guardarTarea = this.guardarTarea.bind(this);
    this.eliminarTarea = this.eliminarTarea.bind(this);
    this.componentWillMount = this.componentWillMount.bind(this);
    
    
  }

  //se ejecuta luego de q ue los componentes ya fueron renderizados en el DOM
  componentWillMount(){

    //traigo a todos
    firebase.database().ref('/todos').once('value')
    .then((snapshot)=> {
      this.setState ({
        tareas : (snapshot.val()==null?[]:snapshot.val())
      })
    });


    //para cuando se agrega uno
    firebase.database().ref('/todos').on('child_added',(nuevoHijo)=>{
      const todos = firebase.database().ref('/todos').once('value');
    todos.then((snapshot)=> {
      this.setState ({
        tareas : (snapshot.val()==null?[]:snapshot.val())
      })
    });
    })
    
    debugger;
    firebase.database().ref('/todos').on('child_removed',(hijoAgregado)=>{
      const todos = firebase.database().ref('/todos').once('value');
    todos.then((snapshot)=> {
      this.setState ({
        tareas : (snapshot.val()==null?[]:snapshot.val())
      })
    });
    })
  }
  

  
  //le enviamos la funcion al hijo para q lo use en su property
  guardarTarea(tareaNueva){
    firebase.database().ref().child('/todos').push({
      titulo: tareaNueva.titulo,
      responsable: tareaNueva.responsable,
      prioridad : tareaNueva.prioridad,
      descripcion : tareaNueva.descripcion
    });
}
  
  //si vamos a usar una variable del html, usarmos bind(,)
  eliminarTarea(key){
    
    //borramos de la base
    firebase.database().ref('/todos').child(key).remove();

  }


  render() {
    const JSONTareas = this.state.tareas;
    debugger;
    let cuadradosConTareas = <div></div>;
    if(Object.keys(this.state.tareas).length > 0 ){
      cuadradosConTareas = Object.keys(this.state.tareas).map((unaKey,indice)=> {
        return(
          <div key={indice} className="col-md-4">
            <div className="card mt-4 mb-4 text-center">
              <div className="card-header">
                <h5>{JSONTareas[unaKey].titulo}</h5>
                <Badge tipo={JSONTareas[unaKey].prioridad}>{JSONTareas[unaKey].prioridad}</Badge>
              </div>
              <div className="card-body">
                <p>{JSONTareas[unaKey].descripcion}</p>
                <p className="font-weight-bold">{JSONTareas[unaKey].responsable}</p>
              </div>
              <div className="card-footer">
                <button type="button" className="btn btn-danger" 
                onClick={this.eliminarTarea.bind(this,unaKey)}>Borrar</button>
              </div>
            </div>
          </div>
        );
      })
    }
    
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
              <a href="" className="text-white">
                  Tareas <span title="Total de tareas pendientes" className="badge badge-light">{Object.keys(this.state.tareas).length}</span> 
              </a>
              <img src={logo} className="App-logo" alt="logo" />
        </nav>

        <div className="container">
          <div className="row mt-4">
            <div className="col-md-3"><Formulario guardameEsta={this.guardarTarea}/></div>
            <div className="col-md-9"><div className="row">{cuadradosConTareas}</div></div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
