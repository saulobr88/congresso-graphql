import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { getPartidoCamara } from '../queries/queries';

import MediaPolitico from '../components/MediaPolitico';

class PartidoCamara extends Component {
  
  render() {
    const sigla = this.props.match.params.sigla;
    return(
      <div className="content">
        <h1>Deputados - {sigla}</h1>
        <Query query={getPartidoCamara} variables={{ sigla }}>
            {({ loading, error, data }) => {
                if (loading) return( <div>Loading ...</div> );
                if (error) return `Error!: ${error}`;
                return data.partidoCamara.deputados.map( obj => {
                    const politico = obj;
                    const link = `/deputados/${politico.id}`;
                    return(
                        <MediaPolitico key={politico.id} politico={politico} link={link} />
                    );
                })                    
            }}
        </Query>
      </div>
    )
  }
}

export default PartidoCamara;