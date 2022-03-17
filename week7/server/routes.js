import * as express from 'express'
import config from './config'

import database from './database'

const router = express.Router()

router.get('/api/fabric_store', async (req,res) => {
    try{
        let store = await database.fabric_store.all();
        res.json(store)
    }catch(e){
        console.log(e)
        res.sendStatus(500)
    }
   
})


export default router;

