import React, { Component } from 'react';
import styled from 'styled-components';
import Cell from '../cell';
import HeaderCell from '../headerCell';
import { Draggable } from 'react-beautiful-dnd';

const Conteiner = styled.div`
    box-sizing: border-box;

    width: 100%;  
    background-color: #edeef0
`;


class Column extends Component {

    render() {

        const { columnName, columnData, keyForColumn, idForColumn, index, idRows } = this.props;
        const data = columnData.map((item, index) => {
            return <Cell
                data={item}
                key={index}
                index={index}
                columnName={columnName}
                idRows={idRows}
            />
        });

        return (
            <Draggable key={keyForColumn} draggableId={idForColumn} index={index}>
                {(provided) => (
                    <Conteiner
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        <HeaderCell 
                            data={columnName}
                        />
                        {data}
                    </Conteiner>
                )}
            </Draggable>
        )
    };
}


export default Column;