import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { DroppedItemList, Close } from './styledComponents';

const DroppableArea = ({ droppedItems, del }) => {
    return (
        <>
            <Droppable droppableId="droppedItems">
                {
                    (provided) => {
                        return (
                            <DroppedItemList 
                                {...provided.droppableProps} 
                                ref={provided.innerRef}
                            >
                                {
                                    droppedItems.map(({id, title}, index) => {
                                        return (
                                            <Draggable 
                                                key={id} 
                                                draggableId={`${id}`} 
                                                index={index}
                                            >
                                                {(provided) => {
                                                    return (
                                                        <>
                                                            <li 
                                                                ref={provided.innerRef} 
                                                                {...provided.draggableProps} 
                                                                {...provided.dragHandleProps}
                                                            >
                                                                {title}
                                                                <Close 
                                                                    onClick={ () => del(id)}
                                                                >
                                                                    &times;
                                                                </Close>
                                                            </li>
                                                        </>
                                                )}}
                                            </Draggable>
                                        )
                                    })
                                }
                            </DroppedItemList>
                        )
                    }
                }
            </Droppable>
        </>
    )
};

export default DroppableArea;
