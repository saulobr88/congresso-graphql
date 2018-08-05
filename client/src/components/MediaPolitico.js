import React from 'react';
import { Media, Image } from 'react-bootstrap';
import { Link } from "react-router-dom";

const MediaPolitico = (props) => {
    return (
    <Media className="media">
        <Media.Left>
            <Image src={props.politico.urlFoto} alt={props.politico.nome} width='110' height='128'/>
        </Media.Left>
        <Media.Body>
            <Media.Heading>
                <Link to={props.link} >
                    {props.politico.nome}
                </Link>
            </Media.Heading>
            <p>
            Nome: {props.politico.nomeCivil} <br />
            Partido: {props.politico.siglaPartido} <br />
            UF: {props.politico.siglaUf} <br />
            Sexo: {props.politico.sexo} <br />
            </p>
        </Media.Body>
        <div style={{ marginTop: 25 }}></div>
    </Media>
    );
}

export default MediaPolitico;