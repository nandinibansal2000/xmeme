import React from 'react';
import {useSelector} from 'react-redux';
import Meme from './meme/meme';
const Memes = () => {
    const content = useSelector((state)=>state.memes);
    console.log(content);
    return (
        <div>
            <h1>Yay All Memes!</h1>
            <Meme />
            <Meme />
        </div>
       
    );
}
export default Memes;
