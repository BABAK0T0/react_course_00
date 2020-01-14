import React from 'react';
import {tableRows, tableColumns} from './Data';
import {AutoSizer, Column, Table} from 'react-virtualized';
import 'react-virtualized/styles.css';
import {Card} from './Card';
import styled from 'styled-components';
import { medGrey } from './GlobalStyle';

const ROW_HEIGHT = 48;

const TableCell = styled.div`
    display: flex;
    color: black;
    ${({ align }) => align === 'right' && `flex-direction: row-reverse`}
`

export function ReactVirtualizedTable(props) {
    const {columns} = props;

    const cellRenderer = ({cellData, columnIndex}) => {
        return (
            <TableCell align={columns[columnIndex].numeric ? 'right' : 'left'}>
                {cellData}
            </TableCell>
        );
    }

    const headerRenderer = ({label, columnIndex}) => {
        return (
            <TableCell header align={columns[columnIndex].numeric ? 'right' : 'left'}>
                <span>{label}</span>
            </TableCell>
        );
    }

    return (
        <AutoSizer>
            {({height, width}) => (
                <Table
                    height={height}
                    width={width}
                    headerHeight={ROW_HEIGHT}
                    rowHeight={ROW_HEIGHT}
                    rowCount={tableRows.length}
                    rowGetter={({index}) => tableRows[index]}
                    rowStyle={{
                        borderBottom: `1px solid ${medGrey}`,
                        boxSizing: `border-box`
                    }}
                    gridStyle={{outline: 0}}
                >
                    {
                        columns.map(({dataKey, ...other}, index) => {
                            return <Column 
                                key={dataKey}
                                dataKey={dataKey}
                                {...other}
                                headerRenderer={headerProps => 
                                    headerRenderer({
                                        ...headerProps,
                                        columnIndex: index
                                    })
                                }
                                cellRenderer={cellRenderer}
                            />;
                        })
                    }
                </Table>
            )}
        </AutoSizer>
    );
}

export function VirtualizedTable() {
    return (
        <Card height={400}>
            <ReactVirtualizedTable columns={tableColumns} />
        </Card>
    );
}
