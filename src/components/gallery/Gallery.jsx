import React from 'react'
import './Gallery.css'
import {collection, getDocs, doc} from 'firebase/firestore';
import { auth } from '../../firebase';
import { db } from '../../firebase';
import { Button,  Typography, TextField} from '@mui/material';
import { imgGallery } from '../../constants/constants';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { useNavigate } from 'react-router-dom';
import { TbPhotoFilled} from 'react-icons/tb'
import { FaSearch } from 'react-icons/fa'

export const Gallery = () => {
    const [user, setuser] = React.useState([])
    const [gallery, setGallery] = React.useState([])
    const [ searchTerm, setSearchTerm]= React.useState('')
    
    const navigate =useNavigate()

    const usersCollectionRef = collection(db,'users')
    // console.log(usersCollectionRef.id);

    React.useEffect(()=>{
        setTimeout(()=>{
          setGallery(imgGallery)
        },3000)


        const getUser = async()=>{
          const user_id = auth.currentUser.uid
          const data = await getDocs(usersCollectionRef,user_id)
          console.log(data)
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
      if (source.index == destination.index) return;

      const ReorderedItems = [...gallery]
      const [reorderedItem] = ReorderedItems.splice(source.index, 1);
      ReorderedItems.splice(destination.index, 0, reorderedItem);
      
      setGallery(ReorderedItems)
  }
  const handlelogout=()=>{
    auth.signOut().then(()=>{
      navigate('/')
    })
  }
  const currentDate = new Date()
   const newDate = currentDate.toDateString()
  return (
    <div>
        <Typography variant='h2'
        sx={{
          textAlign:'center',
          padding:'20px 0px',
          fontWeight:'700',
          backgroundColor:"darkblue",
          color:'white'

        }}>
          <TbPhotoFilled/>
          Photo gallery
        </Typography>
        <div className='first-gallerycon'>
          <div className='welcome-search-bar'>
            <Typography variant='h4'>
              Welcome 
                {/* <Typography variant=' h4'>username</Typography> */}
            </Typography>
            <span>
              <TextField 
              label="Search image gallery " type="search" value={searchTerm} 
              onChange={(e)=>setSearchTerm(e.target.value)} sx={{borderRadius:'17px'}} />
              <FaSearch style={{position:'relative',right:'20px',top:'20px'}} onClick={()=>{
                setGallery(preval=> preval.filter(item => item.name == searchTerm))
              }}/>
              <h5>nb:search by card title</h5>
            </span>
          </div>

          <div className='date-btn' style={{marginTop:'20px'}}>
            <span>Date:{newDate}</span>
            <Button onClick={handlelogout} variant='contained' sx={{backgroundColor:'darkblue'}}>logout</Button>
          </div>
        </div>
        <div className='second-gallerycon'>
          <h3 style={{fontSize:'27px'}}>Drag and drop to reorder images</h3>
            
                  <DragDropContext onDragEnd={handleDrag}>
                      <Droppable droppableId='ROOT' type='group'>
                        {(provided)=>(
                          <div {...provided.droppableProps} ref={provided.innerRef} className='grid-container'>
                                {gallery.length > 1 
                                ? 
                                gallery.map((item,index)=>{
                              
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
                                })
                                : <div class="loader-container">
                                    <div class="loader"> </div>
                                    <span className=' font-medium text-blue-500'>loading gallery...</span>
                                  </div> }
                          </div>
                           
                        )}

                      </Droppable>
                  </DragDropContext>
            
              

      

          
        </div>
    </div>
  )
}
