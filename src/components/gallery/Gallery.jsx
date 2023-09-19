import React from 'react'
import './Gallery.css'
import {collection, getDoc} from 'firebase/firestore';
import { db } from '../../firebase';

export const Gallery = () => {
    const [user, setuser] = React.useState([])

    const usersCollectionRef = collection(db,'users')

    React.useEffect(()=>{
        const getUser = async()=>{

        }
        getUser()
    },[])
  return (
    <div>
        <h1> Image gallery!!!</h1>
    </div>
  )
}
