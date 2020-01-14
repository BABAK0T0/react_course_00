import React, {useContext} from 'react';
import {tableRows, tableColumns} from './Data';
import {AutoSizer, Column, Table} from 'react-virtualized';
import 'react-virtualized/styles.css';
import {Card} from './Card';
import styled from 'styled-components';
import { medGrey, brandColor } from './GlobalStyle';
import {ThemeContext} from './Dashboard';

const ROW_HEIGHT = 48;

const TableCell = styled.div`
    display: flex;
    color: ${({header, dark}) => dark ? (header ? brandColor : 'white') : 'black'};
    ${({ align }) => align === 'right' && `flex-direction: row-reverse`}
`

export function ReactVirtualizedTable(props) {
    const {columns, dark} = props;

    const cellRenderer = ({cellData, columnIndex}) => {
        return (
            <TableCell dark={dark} align={columns[columnIndex].numeric ? 'right' : 'left'}>
                {cellData}
            </TableCell>
        );
    }

    const headerRenderer = ({label, columnIndex}) => {
        return (
            <TableCell dark={dark} header align={columns[columnIndex].numeric ? 'right' : 'left'}>
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
                        borderBottom: `1px solid ${dark ? 'grey' : medGrey}`,
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
    const [theme, setTheme] = useContext(ThemeContext);
    const dark = theme === 'dark';
    return (
        <Card height={400} dark={dark}>
            <ReactVirtualizedTable columns={tableColumns} dark={dark}/>
        </Card>
    );
}
