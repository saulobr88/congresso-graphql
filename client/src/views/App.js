import React, { Component } from 'react';
import { Media, Button, Row } from 'react-bootstrap';
import logo from '../img/cn.png';
import '../styles/App.css';

class MediaPolitico extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Media className="media">
        <Media.Left>
            <img width={64} height={64} src={this.props.politico.urlFoto} alt={this.props.politico.nome} />
        </Media.Left>
        <Media.Body>
            <Media.Heading>{this.props.politico.nome}</Media.Heading>
            <p>
            {this.props.politico.texto}
            </p>
            <Button className="pull-right" bsStyle="info">Ver Mais</Button>
        </Media.Body>
        <div style={{ marginTop: 25 }}></div>
      </Media>
    );
  }
}

class Deputados extends Component {

  constructor(props) {
    super(props);
    this.state = {
      'deputados': [
        {
          id: 1,
          nome: 'Beltrano Moura',
          urlFoto: 'http://via.placeholder.com/64x64',
          texto: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.'
        },
        {
          id: 2,
          nome: 'Fulano da Silva',
          urlFoto: 'http://via.placeholder.com/64x64',
          texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut condimentum nulla, eget fringilla tellus. Duis rhoncus ornare dictum. Vestibulum sit amet ante eget neque hendrerit dictum. Praesent et efficitur diam, in hendrerit augue. Morbi lobortis eros suscipit metus consequat, non semper lacus tempus. Pellentesque scelerisque risus dolor, et auctor felis aliquam vitae. In at diam quis dolor sodales molestie sit amet semper turpis. Phasellus eget pellentesque nibh. In hac habitasse platea dictumst. Morbi laoreet hendrerit iaculis. Nam dignissim nisi urna, ut tincidunt mi sollicitudin condimentum.'
        }
      ]
    };
  }

  render() {
    return(
      <Row>
        <div className = 'list-group col-md-10 offset-col-2'>
          <h1>Deputados</h1>

          { Object.keys(this.state.deputados).map( key => {
            const dep = this.state.deputados[key];
            return [
                <MediaPolitico key={key} politico={dep} />
              ]
            })
          }
        </div>
        <div className = 'list-group col-md-6 offset-col-2'>
          <h1>Painel 2</h1>
        </div>
      </Row>
    )
  }
}


class Home extends Component {
  render(){
   return (
    <Row>
      <h1>Congresso Nacional com GraphQL</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut condimentum nulla, eget fringilla tellus. Duis rhoncus ornare dictum. Vestibulum sit amet ante eget neque hendrerit dictum. Praesent et efficitur diam, in hendrerit augue. Morbi lobortis eros suscipit metus consequat, non semper lacus tempus. Pellentesque scelerisque risus dolor, et auctor felis aliquam vitae. In at diam quis dolor sodales molestie sit amet semper turpis. Phasellus eget pellentesque nibh. In hac habitasse platea dictumst. Morbi laoreet hendrerit iaculis. Nam dignissim nisi urna, ut tincidunt mi sollicitudin condimentum. Donec vel velit nec magna faucibus pretium a nec diam. Pellentesque in justo dui. Proin tincidunt libero et leo interdum molestie. Morbi ut sapien justo.
        </p>
    </Row>
   );
  }
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showHome: true,
      showDeputados: false,
      showSenadores: false,
      ShowPartidosSenado: false,
      ShowPartidosCamara: false,
      current: 'showHome'
    }

    this.chengeCurrent = this.chengeCurrent.bind(this);
  }

  chengeCurrent(newState) {
    let obj = {};
    if(this.state.current != null) {
      obj[this.state.current] = false;
    }
    obj[newState] = true;
    obj['current'] = newState;
    this.setState(obj);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="main">
          <div className="container">
            <div>
                <ul className = 'list-group col-md-2 offset-col-2'>
                  <li className='list-group-item' onClick={() => { this.chengeCurrent('showHome') }}>Home</li>
                  <li className='list-group-item' onClick={() => { this.chengeCurrent('showDeputados') }}>Deputados</li>
                  <li className='list-group-item'>Partidos da Camara</li>
                  <li className='list-group-item'>Senadores</li>
                  <li className='list-group-item'>Partidos do Senado</li>
                  <li className='list-group-item' onClick={() => { console.log(this.state) }}>Console Log</li>
                </ul>
            </div>

            <div className = 'list-group col-md-10 offset-col-2'>
              { this.state.showHome && <Home />}  
              { this.state.showDeputados && <Deputados />}

            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
