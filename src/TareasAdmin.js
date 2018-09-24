import React, { Component } from 'react';
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



class TareasAdmin extends Component{
    
    constructor(){
        super();
        this.saveTarea = this.saveTarea.bind();
        this.saveTareasDefault = this.saveTareasDefault.bind();
    }

    
    //guarda datos de una tarea
    saveTarea(titulo, responsable, prioridad, descripcion) {
        firebase.database().ref().child('/todos').push().set({
            titulo: titulo,
            responsable: responsable,
            prioridad : prioridad,
            descripcion : descripcion
        });
    }

    saveTareasDefault(){
        this.saveTarea('Problemas III','Juan','baja','Ejercicios del 1 al 10');
        this.saveTarea('Test ','Juan','baja','Ejercicios del 1 al 10');
        this.saveTarea('Problemas ','Juan','baja','Ejercicios del 1 al 10');
        this.saveTarea('Problemas ','Juan','baja','Ejercicios del 1 al 10');
    }

    render() {
    return (<div className="App">
        <h1 className="h1">Welcome to React</h1>
    </div>);
    }

}

export default TareasAdmin;
