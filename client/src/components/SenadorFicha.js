import React from 'react';

const SenadorFicha = (props) => {
    return(
        <div>
            Senador Ficha <br />
            ID: {props.politico.id} <br />
            Nome: {props.politico.nome} <br />
            Nome Civil: {props.politico.nomeCivil} <br />
            Partido: {props.politico.siglaPartido}
            { (props.politico.partido) &&
                <span>
                    - {props.politico.partido.nome} 
                </span>
            }
            <br />
            UF: {props.politico.siglaUf} <br />
            Sexo: {props.politico.sexo} <br />
            formaTratamento: {props.politico.formaTratamento} <br />
            urlFoto: {props.politico.urlFoto} <br />
            dataNascimento: {props.politico.dataNascimento} <br />
            ufNascimento: {props.politico.ufNascimento} <br />
            endereco: {props.politico.endereco} <br />
            telefone: {props.politico.telefone} <br />
            fax: {props.politico.fax} <br />
        </div>
    )
};

export default SenadorFicha;