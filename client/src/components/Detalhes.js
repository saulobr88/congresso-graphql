import React from 'react';
import { Tabs, Tab, Grid, Row, Col, Image, Table } from 'react-bootstrap';

const Detalhes = (props) => {
    console.log(props);
    let contadorD=1;
    let contadorA=1;
    return (
        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
            <Tab eventKey={1} title="Dados Básicos">
                <Grid>
                    <Row className="show-grid">
                        <Col sm={2} md={2}>
                            <Image src={props.politico.urlFoto} alt={props.politico.nome} width='110' height='128'/>
                        </Col>
                        <Col sm={6} md={6}>
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
                        </Col>
                    </Row>
                </Grid>
            </Tab>
            { (props.politico.despesas) &&
                <Tab eventKey={3} title="Despesas">
                    <Table striped bordered condensed hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Tipo Despesa</th>
                                <th>Valor do Documento</th>
                                <th>Data</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            props.politico.despesas.map( obj => {
                                let ident = `d_${contadorD}`;
                                contadorD++;
                                return(
                                    <tr key={ident}>
                                        <td>{obj.idDocumento}</td>
                                        <td>{obj.tipoDespesa}</td>
                                        <td>{obj.valorDocumento}</td>
                                        <td>{obj.dataDocumento}</td>
                                    </tr>
                                );
                            })
                        }
                        </tbody>
                    </Table>
                </Tab>
            }
            { (props.politico.autorias) &&
                <Tab eventKey={4} title="Autorias">
                    Autorias
                </Tab>
            }
        </Tabs>
    )
};

export default Detalhes;