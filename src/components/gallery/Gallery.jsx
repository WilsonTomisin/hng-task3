import React from 'react'
import './Gallery.css'
import {collection, getDocs, doc} from 'firebase/firestore';
import { auth } from '../../firebase';
import { db } from '../../firebase';
import { Button, Box, Typography, Grid} from '@mui/material';
import { imgGallery } from '../../constants/constants';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

export const Gallery = () => {
    const [user, setuser] = React.useState([])
    const [gallery, setGallery] = React.useState(imgGallery)

    const usersCollectionRef = collection(db,'users')
    console.log(usersCollectionRef.id);

    React.useEffect(()=>{
      
        const getUser = async()=>{
          const user_id = auth.currentUser.uid
          const data = await getDocs(usersCollectionRef)
          // data.docs.
          setuser(data.docs.map((doc)=>(
              {...doc.data(), id: doc.id}
          )))
          // console.log(user_id);
        }
        getUser()
    },[])
    const handleDrag=(results)=>{
      const {source, destination} = results
      if (!destination) return ;
      if (source.index == destination.index)  return;

      const ReorderedItems = [...gallery]
      const [reorderedItem] = ReorderedItems.splice(source.index, 1);
      ReorderedItems.splice(destination.index, 0, reorderedItem);
      
      setGallery(ReorderedItems)
  }
  return (
    <div>
        <Typography variant='h2'
        sx={{
          textAlign:'center',
          padding:'20px 0px'
        }}>
          Photo gallery
        </Typography>
        <div className='first-gallerycon'>
          <Typography variant='h4'>Welcome 
              <Typography variant=' h4'>username</Typography>
          </Typography>

          <div>
            <span>Date:12-09-2023</span>
            <Button>logout</Button>
          </div>
        </div>
        <div className='second-gallerycon'>
          <h3>Drag and drop to reorder images</h3>
            
                  <DragDropContext onDragEnd={handleDrag}>
                      <Droppable droppableId='ROOT' type='group'>
                        {(provided)=>(
                          <div {...provided.droppableProps} ref={provided.innerRef} className='grid-container'>
                                {gallery.map((item,index)=>{
                              
                                  const id = index.toString()
                                  return(
                                  <Draggable  draggableId={id} index={index}>
                                    {(provided)=>(
                                        <div  
                                        className='grid-item'
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}>
                                            <img src={item.src} alt={`${item.name} image`} className='item-img'/>
                                            <div className='grid-item-innercon'>
                                              <Typography variant='h4'> {item.name}</Typography>
                                              <Typography variant='body2'>
                                                {item.text}
                                              </Typography>
                                            </div>
                                        </div>
                                    )}
                                  </Draggable>
                                  )
                                })}
                          </div>
                           
                        )}

                      </Droppable>
                  </DragDropContext>
            
              

      

          
        </div>
    </div>
  )
}
