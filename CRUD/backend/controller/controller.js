import DB_MODEL from "../models/models.js";

export const getDetails = async (req, res) => {
    try {
        const details = await DB_MODEL.find();
        res.status(200);
        res.json(details);

    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message });
    }
}

export const postDetails = async (req, res) => {
    const details = req.body;
    const newDetail = await DB_MODEL(details);
    try {
        await newDetail.save();

        res.status(201);
        res.json(newDetail);

    } catch (error) {
        console.log(error);

        res.status(404);
        res.json({ message: error.message });
        res.send("<h1>ERROR</h1>")
    }
}

export const updateDetail = async (req, res) => {
    try {
        const oneTask = await DB_MODEL.findOneAndUpdate(
            req.body
        );
        res.send(oneTask);
        console.log({ updated: oneTask });
    } catch (error) {
        console.log(error)
    }
}

export const deleteDetail = async (req, res) => {
    try {
        const deleteTask = await DB_MODEL.findByIdAndDelete({ "_id": req.params.newId });
        res.json({ DeletedTask: deleteTask });
        const allDetailAfterDelete = await DB_MODEL.find();
        console.log({AfterDeleteDetails:allDetailAfterDelete});
    } catch (error) {
        console.log(error)
    }
}