import express from 'express'
import { ObjectId } from 'mongodb';
const Router = express.Router();
import { getDetails, postDetails } from '../controller/controller.js';
import DB_MODEL from '../models/models.js';

Router.get('/get', getDetails);
Router.post('/create', postDetails);
Router.put("/task/:id", async (req, res) => {
    try {
        const oneTask = await DB_MODEL.findOneAndUpdate(
            req.body
        );
        // res.send(oneTask);
        res.json({ task: oneTask })
    } catch (error) {
        console.log(error)
    }
});

Router.delete("/deleteTask/:newId", async (req, res) => {
    try {
        const deletedTask = await DB_MODEL.findByIdAndDelete({ '_id': new ObjectId(req.params.newId) });
        // res.send(deletedTask);
        res.json(deletedTask);

        const details = await DB_MODEL.find();
        res.json(details);

    } catch (error) {
        console.log(error)
    }
});

export default Router;