import React ,{useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAddCategorie = () => {
    //     //#1
    //     // setCategories([...categories, 'hola']);

    //     //#2
    //     //Recibe la informacion de el estado inicial y se lo pasa al Callback
    //     setCategories((cats) => [...cats, 'hola']);
    // }

    return (
        <>
           <h1 style={styleH1}>GifExpertApp</h1>
           <AddCategory setCategories={setCategories} />
           {/* <button onClick={ () => handleAddCategorie() } >Add Categorie</button> */}
           {
               categories.map((category) => (<GifGrid key={category} category={category} />))
           }
        </>
    )
}

const styleH1 = {
    textAlign:'center',
    color:'grey',
    fontFamily:'arial',
};

export default GifExpertApp;
