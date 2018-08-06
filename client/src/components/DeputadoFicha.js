import React from 'react';

const DeputadoFicha = (props) => {
    return(
        <div>
            Deputado Ficha <br />
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
            siglaUf: {props.politico.siglaUf} <br />
            urlFoto: {props.politico.urlFoto} <br />
            idLegislatura: {props.politico.idLegislatura} <br />
            dataUltimoStatus: {props.politico.dataUltimoStatus} <br />
            nomeEleitoral: {props.politico.nomeEleitoral} <br />
            condicaoEleitoral: {props.politico.condicaoEleitoral} <br />
            cpf: {props.politico.cpf} <br />
            urlWebsite: {props.politico.urlWebsite} <br />
            redeSocial: {props.politico.redeSocial} <br />
            dataNascimento: {props.politico.dataNascimento} <br />
            dataFalecimento: {props.politico.dataFalecimento} <br />
            ufNascimento: {props.politico.ufNascimento} <br />
            municipioNascimento: {props.politico.municipioNascimento} <br />
            escolaridade: {props.politico.escolaridade} <br />
        </div>
    )
};

export default DeputadoFicha;