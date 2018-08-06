import React from 'react';
import { Tabs, Tab, Grid, Row, Col, Image, Table } from 'react-bootstrap';

import DeputadoFicha from './DeputadoFicha';
import SenadorFicha from './SenadorFicha';
import Autoria from './Autoria';

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
                        { (props.isDeputado) &&
                            <DeputadoFicha politico={props.politico} />
                        }
                        { (props.isSenador) &&
                            <SenadorFicha politico={props.politico} />
                        }
                        </Col>
                    </Row>
                </Grid>
            </Tab>
            { (props.politico.despesas) &&
                <Tab eventKey={3} title="Despesas">
                    <div>Total de { props.politico.despesas.length }</div>
                    <hr />
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
                    <div>Total de { props.politico.autorias.length }</div>
                    <hr />
                    {
                        props.politico.autorias.map( obj => {
                            let ident = `d_${contadorA}`;
                            contadorA++;
                            return(
                                <Autoria key={ident} autoria={obj}/>
                            );
                        })
                    }
                </Tab>
            }
        </Tabs>
    )
};

export default Detalhes;