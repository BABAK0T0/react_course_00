import React from 'react';
import Brand from './Brand';
import {Container} from './Container';
import {GlobalStyle} from './GlobalStyle';
import {Card} from './Card';

export default function Dashboard() {
    return (
        <React.Fragment>
            <GlobalStyle />
            <Container>
                <Brand />
                <Card height={400}>Chart goes here</Card>
                <Card height={400}>Table goes here</Card>
            </Container>
        </React.Fragment>
    );
}