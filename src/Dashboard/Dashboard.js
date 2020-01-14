import React from 'react';
import Brand from './Brand';
import {Container} from './Container';
import {GlobalStyle} from './GlobalStyle';
// import {Card} from './Card';
import {Chart} from './Chart';
import {VirtualizedTable} from './Tables';

export default function Dashboard() {
    return (
        <React.Fragment>
            <GlobalStyle />
            <Container>
                <Brand />
                <Chart />
                <VirtualizedTable/>
            </Container>
        </React.Fragment>
    );
}