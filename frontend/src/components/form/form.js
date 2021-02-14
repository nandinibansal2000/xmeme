import React, {useState} from 'react';
import { TextField, Button } from '@material-ui/core';
import {useDispatch} from 'react-redux';
import { createMeme } from '../../actions/meme';
// function toDataURL(url, callback) {
//     var xhr = new XMLHttpRequest();
//     xhr.onload = function() {
//       var reader = new FileReader();
//       reader.onloadend = function() {
//         callback(reader.result);
//       }
//       reader.readAsDataURL(xhr.response);
//     };
//     xhr.open('GET', url);
//     xhr.responseType = 'blob';
//     xhr.send();
//   }
  
const Form = () => {
    const [memeData, setMemeData] = useState({owner:'',caption : '',imgFile: '' });
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createMeme(memeData));
    }
    // const handleImage = (event) => {
    //     toDataURL(event.target.value, function(dataUrl) {
    //         console.log(dataUrl);
    //         return dataUrl;
    //       })
    // }
    return (
        <form autoComplete = "off" onSubmit = {handleSubmit}>
            <h3>Post a Meme :D</h3>
            <TextField 
                label = "Meme Owner"
                fullWidth
                value = {memeData.owner}
                onChange = {(event) => setMemeData ({... memeData, owner: event.target.value})}
            ></TextField>
            <TextField 
                label = "Caption"
                fullWidth
                value = {memeData.caption}
                onChange = {(event) => setMemeData ({... memeData, caption: event.target.value})}
            ></TextField>
            <TextField 
                label = "Meme Url"
                fullWidth
                value = {memeData.imgFile}
                onChange = {(event) => setMemeData ({... memeData, imgFile:event.target.value})}
            ></TextField>
            <Button  variant = "container" color = "primary" type = "submit" size = "large" fullwidth>Submit</Button>
        </form>
    );
}
export default Form;
