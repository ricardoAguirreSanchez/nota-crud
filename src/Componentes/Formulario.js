import React, { Component } from 'react';

class Formulario extends Component {
    constructor(){
        super();
        this.state = {
            titulo : '',
            responsable : '',
            prioridad : '',
            descripcion : ''

        }
        this.guardarTarea = this.guardarTarea.bind(this);
        this.cambioInput = this.cambioInput.bind(this);
    }

    guardarTarea(e){
        e.preventDefault();
        //con esto puedo usar la funcion qrecibi de property
        this.props.guardameEsta(this.state);
        document.getElementById("create-course-form").reset();
        

    }

    cambioInput(e){
        //para tomar los metodos name y value del e.target
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
            <form id="create-course-form" className="card-body" onSubmit={this.guardarTarea}>
                <div className="form-group">
                    <input type="text" placeholder="Titulo" name="titulo" 
                    className="form-control" onChange={this.cambioInput}/>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Responsable" name="responsable" 
                    className="form-control" onChange={this.cambioInput}/>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Descripcion" name="descripcion" 
                    className="form-control" onChange={this.cambioInput}/>
                </div>
                <div className="form-group">
                    <select type="text" placeholder="Prioridad" name="prioridad" 
                    className="form-control" onChange={this.cambioInput}>
                        <option>-</option>
                        <option>medio</option>
                        <option>bajo</option>
                        <option>alto</option>
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