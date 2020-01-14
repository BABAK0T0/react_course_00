import React from 'react';
import Brand from './Brand';
import {Container} from './Container';
import {GlobalStyle} from './GlobalStyle';
import {Card} from './Card';
import {Chart} from './Chart';

export default function Dashboard() {
    return (
        <React.Fragment>
            <GlobalStyle />
            <Container>
                <Brand />
                <Chart />
                <Card height={400}>Table goes here</Card>
            </Container>
        </React.Fragment>
    );
}