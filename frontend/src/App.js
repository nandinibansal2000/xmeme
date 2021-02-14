import React, {useEffect} from 'react';
import {Container, AppBar, Typography} from '@material-ui/core';
import memeImg from './images/memeImg.png';
import Memes from './components/memes/memes';
import Form from './components/form/form';
import useStyles from './styles';
import {useDispatch} from 'react-redux';

import {getMemes} from './actions/meme';

const App = ()  =>{
  const style = useStyles();
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getMemes());
  },[dispatch]);
  return (
    <Container maxwidth = "lg">
      <AppBar className = {style.appBar} position = "static" color = "inherit">
        <img src = {memeImg} alt = "XMeme" height = "80" width = "100"/>
        <Typography  className = {style.heading} variant = "h3" align = "center">XMeme Stream</Typography>  
      </AppBar>
      <Form />
      <Memes />
    </Container>
  );
}

export default App;
