import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from "react-router-dom";

import { graphql } from 'react-apollo';
import { getPartidosCamara } from '../queries/queries';

class PartidosCamara extends Component {

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
        return data.partidosCamara.map( obj => {
            const link = `/partidos-camara/${obj.sigla}`;
            return(
                <tr key={obj.id}>
                    <td>{obj.sigla}</td>
                    <td>{obj.nome}</td>
                    <td>
                        <Link to={link}>
                            {obj.deputados.length}
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
          <h1>Partidos da Câmara</h1>
            <Table striped bordered condensed hover>
                <thead>
                    <tr>
                        <th>Sigla</th>
                        <th>Nome</th>
                        <th># Deputados</th>
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

export default graphql(getPartidosCamara)(PartidosCamara);