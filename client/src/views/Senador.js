import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { getSenador } from '../queries/queries';
import Detalhes from '../components/Detalhes';

class Senador extends Component {

    render() {
        const id = this.props.match.params.id;
        return(
            <div className="content">
                <h1>Senador</h1>
                <Query query={getSenador} variables={{ id }}>
                    {({ loading, error, data }) => {
                        if (loading) return( <div>Loading ...</div> );
                        if (error) return `Error!: ${error}`;
                        return (
                            <Detalhes politico={data.senador} isSenador/>
                        );
                    }}
                </Query>
            </div>
        )
    }
}

export default Senador;