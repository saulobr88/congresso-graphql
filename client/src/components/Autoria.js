import React from 'react';

const Autoria = (props) => {
    const autoria = props.autoria;
    return(
        <div>
            Materia de ID {autoria.id} <br />
            Nome da Casa: {autoria.nomeCasa} <br />
            <div style={{ textAlign: 'justify', marginTop: '1em' }}>
                Ementa: {autoria.ementa} 
            </div>
            <br />
            Indicador Tramitando: {autoria.indicadorTramitando} <br />
            <hr />
        </div>
    )
};

export default Autoria;