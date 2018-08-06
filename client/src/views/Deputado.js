import React, { Component } from 'react';
import { getDeputado } from '../queries/queries';
import { Query } from 'react-apollo';
import Detalhes from '../components/Detalhes';

class Deputado extends Component {

    render() {
        const id = this.props.match.params.id;
        return(
            <div className="content">
                <h1>Deputado</h1>
                <Query query={getDeputado} variables={{ id }}>
                    {({ loading, error, data }) => {
                    if (loading) return null;
                    if (error) return `Error!: ${error}`;
                    return (
                        <Detalhes politico={data.deputado} isDeputado/>
                    );
                    }}
                </Query>
            </div>
        )
    }
}

//export default graphql(getDeputado)(Deputado);
export default Deputado;