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
