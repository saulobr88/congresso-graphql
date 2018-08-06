import React from 'react';
import { Grid, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from '../views/Home';
import Deputados from '../views/Deputados';
import Deputado from '../views/Deputado';
import PartidosCamara from '../views/PartidosCamara';
import PartidoCamara from '../views/PartidoCamara';
import Senadores from '../views/Senadores';
import Senador from '../views/Senador';
import PartidosSenado from '../views/PartidosSenado';
import PartidoSenado from '../views/PartidoSenado';

const Sidebar = () => {
    return (
        <Router>
            <Grid>
                <Row className="show-grid">
                    <Col sm={2} md={2}>
                        <ListGroup>
                            <ListGroupItem>
                                <Link to="/">Home</Link>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Link to="/deputados">Deputados</Link>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Link to="/partidos-camara">Partidos da Câmara</Link>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Link to="/senadores">Senadores</Link>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Link to="/partidos-senado">Partidos do Senado</Link>
                        </ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col sm={8} md={8}>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/deputados" component={Deputados} />
                        <Route exact path="/deputados/:id" component={Deputado} />
                        <Route exact path="/partidos-camara" component={PartidosCamara} />
                        <Route exact path="/partidos-camara/:sigla" component={PartidoCamara} />
                        <Route exact path="/senadores" component={Senadores} />
                        <Route exact path="/senadores/:id" component={Senador} />
                        <Route exact path="/partidos-senado" component={PartidosSenado} />
                        <Route exact path="/partidos-senado/:sigla" component={PartidoSenado} />
                    </Col>
                </Row>
            </Grid>
        </Router>
    );
}

export default Sidebar;