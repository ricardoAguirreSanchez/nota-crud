import React, { Component } from 'react';

class Badge extends Component {
    constructor(){
        super();
        this.state = {
            tipoBadge : ''

        }
    }
    
    render() {
      if(this.props.tipo === 'medio'){
        return (<span className="badge badge-pill badge-warning">{this.props.tipo}</span>);
      }else if(this.props.tipo === 'bajo'){
        return (<span className="badge badge-pill badge-info">{this.props.tipo}</span>);
      }else{
        return (<span className="badge badge-pill badge-danger">{this.props.tipo}</span>);
      }
   }
}

export default Badge;