import express from 'express';
import {getMemes, createMeme} from '../controllers/meme.js';
const router = express.Router();

router.get('/', getMemes);
router.post('/',async (req,res)=>{console.log("api")});

export default router;