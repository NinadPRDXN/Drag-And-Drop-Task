import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { PostList } from './styledComponents';

const Blogs = ({ posts }) => {
    return (
        <>
            <Droppable droppableId="blogs" isDropDisabled={true}>
                {
                    (provided) => {
                        return (
                            <PostList {...provided.droppableProps} ref={provided.innerRef}>
                                {posts.map(({id, title}, index) => {
                                    return (
                                            <Draggable 
                                                key={id} 
                                                draggableId={`${id}`} 
                                                index={index}
                                            >
                                                {(provided, snapshot) => {
                                                    return (
                                                        <>
                                                            <li 
                                                                ref={provided.innerRef} 
                                                                {...provided.draggableProps} 
                                                                {...provided.dragHandleProps}
                                                            >
                                                                {title}
                                                            </li>
                                                            {snapshot.isDragging &&
                                                            (<li>{title}</li>)}
                                                        </>
                                                )}}
                                            </Draggable>
                                        )
                                })}
                            </PostList>
                        );
                    }
                }
            </Droppable>
        </>
    )
}

export default Blogs
