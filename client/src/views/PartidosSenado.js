import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from "react-router-dom";

import { graphql } from 'react-apollo';
import { getPartidosSenado } from '../queries/queries';

class PartidosSenado extends Component {

  constructor(props) {
    super(props);

    this.displayObjs = this.displayObjs.bind(this);
  }

  displayObjs(){
    var data = this.props.data;
    if(data.loading){
        return( <tr>
                    <td colSpan='3'>Loading ...</td>
                </tr>
        );
    } else {
        return data.partidosSenado.map( obj => {
            const link = `/partidos-senado/${obj.sigla}`;
            return(
                <tr key={obj.codigo}>
                    <td>{obj.sigla}</td>
                    <td>{obj.nome}</td>
                    <td>
                        <Link to={link}>
                            {obj.senadores.length}
                        </Link>
                    </td>
                </tr>
            );
        })
    }
  }
  
  render() {

    return(
      <div className="content">
          <h1>Partidos do Senado</h1>
            <Table striped bordered condensed hover>
                <thead>
                    <tr>
                        <th>Sigla</th>
                        <th>Nome</th>
                        <th># Senadores</th>
                    </tr>
                </thead>
                <tbody>
                    { this.displayObjs() }
                </tbody>
            </Table>
      </div>
    )
  }
}

export default graphql(getPartidosSenado)(PartidosSenado);