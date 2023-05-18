import { useEffect, useState, useTransition } from 'react';
import axios from 'axios';
import Photo from './Photo';

const Gallery = () => {
    const [photos, setPhotos] = useState([])
    const [isPending, startTranstion] = useTransition();
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(Response => {
                setPhotos(Response.data)
            })
            .then(() => {
                startTranstion(() => { })
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            })
    }, [startTranstion])


    return (
        <>
            {isPending ? (<h1 >Loading... </h1>) : (
                <ul>
                    {photos.map(item => { return <li key={item.id}><Photo picture={item} /></li> })}
                </ul>
            )}
        </>
    )
}

export default Gallery;

