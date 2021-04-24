import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

// import React, { useEffect, useState } from 'react'
// import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({category}) => {
    // const [images, setImages] = useState([]);
    // useEffect(() => {
    //     getGifs(category)
    //         .then(( img )=> setImages(img));
    // }, [category]);

    const {data:images, loading}  = useFetchGifs(category);
    
    return (
        <>
            <h2 style={styleH2}> {category} </h2>
            {loading && <h3 className="animate__animated animate__flash animate__slower	3s" style={styleCar}>Cargando....</h3>}
            <div className="card-grid">
                {
                    images.map(img => 
                        (<GifGridItem key={img.id} {...img} />)
                    )
                }
            </div>
        </>
    )
}

const styleH2 = {
    color:'#FF5733'
};

const styleCar = {
    color:'grey'
};

