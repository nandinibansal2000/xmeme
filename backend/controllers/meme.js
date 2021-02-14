import postMemeMessage from '../models/postMemeSchema.js';

export const getMemes = async(req, res) => {
    try{
        const allMemes = await postMemeMessage.find();
        // console.log(allMemes);
        res.status(200).json(allMemes);
    }
    catch(error){
        res.status(404).json({message: error.message});
    }
};
export const createMeme = async(req, res) => {
    const meme = req.body;
    console.log("mmm",req.body);
    const newMeme = new postMemeMessage(meme);
    try{
        await newMeme.save();
        res.send(201).json(newMeme);
    }catch(error){
        res.status(409).json({message: error.message});
    }

}