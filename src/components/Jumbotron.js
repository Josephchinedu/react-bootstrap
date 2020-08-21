import React from 'react';
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';
import styled from 'styled-components';
import booatImage from '../assests/bo.jpeg';

const Styles = styled.div`
    .jumbo{
        background: url(${booatImage} ) no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        heigt: 200px;
        position: relative;
        z-index: -2;
    }

    .overlay{
        background-color: #000;
        opacity: 0.6;
        position: absolute;
        top: 0;
        rigt: 0;
        bottom: 0;
        left: 0; 
        z-index: -1;
    }
`;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
                <h1>Welcome</h1>
                <p>This's react bootstrap website template </p>
            </Container>
        </Jumbo>
    </Styles>
)