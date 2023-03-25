import express from 'express'
const Router = express.Router();
import { deleteDetail, getDetails, postDetails, updateDetail } from '../controller/controller.js';

Router.get('/get', getDetails);
Router.post('/post', postDetails);
Router.put("/task/:id", updateDetail);
Router.delete("/deleteTask/:newId", deleteDetail)

export default Router;