import React, {Component} from 'react';
import { Router } from '@reach/router';

import Header from './Components/organisms/Header/';
import Footer from './Components/organisms/Footer/';
import Home from './Components/organisms/Home/';
import Curriculo from './Components/organisms/Curriculo/'

import styled from 'styled-components';

const Wrapper = styled.div`
    max-width: 100%
    height: 100vh;
    margin: 2.5rem 3rem;
    @media (max-width: 414px) {
        margin: 1rem auto;
        max-width: 90%
    }
`

const experience = [
    {
        place: 'Stefanini',
        begin: 'Novembro/2017',
        end: 'Atual',
        role: 'Desenvolvedor Full Stack',
        about: `Trabalhei pela Stefanini na Oi.
Participei do desenvolvimento do projeto Minha Oi 3.0, que visa aumentar a interação do usuário com as plataformas digitais da Oi.
Desenvolvi e dei manutenção em API's RESTFUL utilizando NodeJS. Desenvolvi e dei manutenção nos projetos de Front-End em React`,

        tech: ['Node', 'React', 'Docker', 'Jenkins', 'MongoDB', 'Redis', 'Redux']
    },
    {
        place: 'Operativa',
        begin: 'Agosto/2014',
        end: 'Novembro/2017',
        role: 'Desenvolvedor Pleno',
        about: `Desenvolvimento e manutenção de Web Services em Java para atender as demandas da ANS(Agência Nacional de Saúde). 
                Desenvolvimento e manutenção de sistemas em Java para controle de internações hospitalares.
                Desenvolvimento de Stored Procedures para banco de dados Oracle em um sistema de autorização de procedimentos de planos de saúde.
                Desenvolvimento de uma ferramenta, em Oracle Apex, para controle de escritórios de profissionais de psciologia.
                Responsável por criar e manter o ambiente de nuvem da empresa, onde todos os sistemas da propria empresa e de seus clientes estão hospedados.
                Desenvolvimento de aplicativo Android para gerenciar internações domiciliares e hospitalares utilizando MongoDB para persistir os dados do usuario.
                `,
        tech: ['Node', 'Java', 'MongoDB', 'Amazon AWS', 'Oracle', 'Javascript', 'Android', 'Mobile']
    },
    {
        place: 'Webb Negócios',
        begin: 'Outubro/2013',
        end: 'Agosto/2014',
        role: 'Desenvolvedor de Testes Automáticos',
        about: `Fui responsável por implementar a cultura de testes automatizados com Selenium para a equipe que desenvolveu o sistema de leilões da empresa`,
        tech: ['Selenium', 'Java', 'Testing']
    },
    {
        place: 'PrimeUp!',
        begin: 'Maio/2012',
        end: 'Outubro/2013',
        role: 'Desenvolvedor/Testador de Software',
        about: `Realização de testes funcionais nos sistemas de pós trading da Bolsa de Valores de São Paulo(BM&F Bovespa). Desenvolvimento de testes automáticos para o sistema de pós trading da bolsa de valores durante um periodo de 9 meses alocado em São Paulo. Implementação e manutenção de um sistema de ontologias dentro do SERPRO-RJ`,
        tech: ['Selenium', 'Java', 'Testing']
    },

]
class App extends Component {
    render() {
        return (
            <Wrapper>
                <Header/>
                <Router>
                    <Home path='/'/>
                    <Curriculo stories={experience} path="/curriculo"/>
                </Router>
                <Footer/>
            </Wrapper>
        );
    }
}

export default App;
