import  api from '../api/index.js';

export const getMemes = () => async(dispatch)=>{
    try{
        const {data} = await api.fetchMemes();
        const action = {type:'FETCH_ALL', payload : data}; // to return an action
        dispatch(action);
    }
    catch(error){
        console.log((error.message));
    }
     
}

export const createMeme = (post) => async(dispatch)=>{
    try{
        console.log("start");
        console.log();
        await api.post("/",{});
        console.log("end");
        // //const action = {type:'CREATE', payload : data}; // to return an action
        // dispatch(action);
    }
    catch(error){
        console.log("aaaaa");
        console.log((error.message));
    }
    
}