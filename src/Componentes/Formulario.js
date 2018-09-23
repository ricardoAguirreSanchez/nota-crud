import React, { Component } from 'react';

class Formulario extends Component {
    constructor(){
        super();
        this.state = {
            titulo : "",
            responsable : "",
            prioridad : "",
            descripcion : ""

        }
        this.guardarTarea = this.guardarTarea.bind(this);
        this.cargarValor = this.cargarValor.bind(this);
    }

    guardarTarea(e){
        //con esto le pido q no refresque la pagina
        e.preventDefault();
        //con esto puedo usar la funcion qrecibi de property
        this.props.guardameEsta(this.state);
    }

    cargarValor(e){
        const { name , value } = e.target;
        this.setState({
            [name] : value
        })
    }

  render() {
    return (
        <div className="card mt-4 text-center">
            <div className="card-header">
            <h5>Tarea Nueva</h5>
            </div>
            <form className="card-body" onSubmit={this.guardarTarea}>
                <div className="form-group">
                    <input type="text" placeholder="Titulo" name="titulo" 
                    className="form-control" onChange={this.cargarValor}/>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Responsable" name="responsable" 
                    className="form-control" onChange={this.cargarValor}/>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Descripcion" name="descripcion" 
                    className="form-control" onChange={this.cargarValor}/>
                </div>
                <div className="form-group">
                    <select type="text" placeholder="Prioridad" name="prioridad" 
                    className="form-control" onChange={this.cargarValor}>
                        <option>media</option>
                        <option>baja</option>
                        <option>alta</option>
                    </select>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Guardar</button>
                </div>
                
            </form>
      </div>
    );
  }
}

export default Formulario;