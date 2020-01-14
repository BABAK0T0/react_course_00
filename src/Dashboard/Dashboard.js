import React from 'react';
import Brand from './Brand';
import {Container} from './Container';
import {GlobalStyle} from './GlobalStyle';

export default function Dashboard() {
    return (
        <>
            <GlobalStyle />
            <Container>
                <Brand />
            </Container>
        </>
    );
}