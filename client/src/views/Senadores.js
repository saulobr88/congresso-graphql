import React, { Component } from 'react';
import MediaPolitico from '../components/MediaPolitico';

import { graphql } from 'react-apollo';
import { getSenadores } from '../queries/queries';

class Senadores extends Component {

    constructor(props) {
        super(props);
        this.displayObjs = this.displayObjs.bind(this);
    }

    displayObjs(){
        var data = this.props.data;
        if(data.loading){
            return( <div>Loading ...</div> );
        } else {
            return data.senadores.map( obj => {
                const politico = obj;
                const link = `/senadores/${politico.id}`;
                return(
                    <MediaPolitico key={politico.id} politico={politico} link={link} />
                );
            })
        }
    }

    render() {
        return(
            <div className="content">
                <h1>Senadores</h1>
                { this.displayObjs() }
            </div>
        )
    }
}

export default graphql(getSenadores)(Senadores);