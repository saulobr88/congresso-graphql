import React from 'react';

const Home = () => {
    return(
        <div className="content">
            <h1>Congresso Nacional com GraphQL</h1>
            <p style={{ textAlign: 'justify', marginTop: '1em' }}>
            Projeto e Implementação de Sistemas Distribuídos do curso de Bacharelado em Ciência da Computação - UFRPE 2018.1
            <br />
            <br />
            O seguinte projeto possui o objetivo de aumentar a transparência e
            disponibilizar à população, informações importantes sobre as atividades dos políticos e
            candidatos. Fornecendo dados oficiais coletados a partir das bases de dados abertos 
            do&nbsp; 
            <a href="https://www.congressonacional.leg.br/" target="_blank" rel="noopener noreferrer">
            Congresso Nacional
            </a>
            , incluindo&nbsp;
            <a href="https://dadosabertos.camara.leg.br/" target="_blank" rel="noopener noreferrer">
            Câmara
            </a>
            &nbsp;e&nbsp; 
            <a href="https://www25.senado.leg.br/web/senadores" target="_blank" rel="noopener noreferrer">
            Senado</a>.&nbsp;
            <br />
            <br />
            Implementando a especificação&nbsp;
            <a href="https://graphql.org/" target="_blank" rel="noopener noreferrer">
            GraphQL
            </a>&nbsp;
            e possíbilitando maior acessibilidade sem aumentar os 
            custos computacionais envolvidos (Processamento, Armazenamento, Transferência).
            </p>
            <p>
                Repositório do projeto:&nbsp;
                <a href="https://github.com/saulobr88/congresso-graphql" target="_blank" rel="noopener noreferrer">
                https://github.com/saulobr88/congresso-graphql
                </a>
            </p>
        </div>
    );
}

export default Home;