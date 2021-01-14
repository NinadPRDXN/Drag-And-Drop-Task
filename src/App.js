import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Wrapper, Heading2, DragDrop } from './components/styledComponents';
import { DragDropContext } from 'react-beautiful-dnd';
import Blogs from './components/Blogs';
import DroppableArea from './components/DroppableArea';
import uuid from 'react-uuid';

const App = () => {
  const [posts, updatePosts] = useState([]);
  const [droppedItems, setDropItems] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        updatePosts(response.data);
      })
  }, []);

  const handleOnDragEnd = (result) => {
    const {destination, source} = result;
        if ( !destination ) {
            return;
        }

        if (source.droppableId === destination.droppableId) {
            const [reorderedItem] = droppedItems.splice(source.index, 1);
            droppedItems.splice(destination.index, 0, reorderedItem);
        
            setDropItems(droppedItems);
        } else {
            const [ dataToTransfer ] =  posts.slice(source.index, (source.index + 1));
            setDropItems((oldData) => {
                return [...oldData, { id: uuid(), title: dataToTransfer.title }];
            });
        }
  }

  const del = (id) => {
    setDropItems((oldData) => {
        return oldData.filter((val) => {
            return val.id !== id;
        });
    });
  }

  return (
    <>
      <Wrapper>
        <Heading2>-Drag and Drop-</Heading2>
        <DragDrop>
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Blogs posts={posts}/>
            <DroppableArea droppedItems={droppedItems} del={del} />
          </DragDropContext>
        </DragDrop>
      </Wrapper>
    </>
  );
}

export default App;
