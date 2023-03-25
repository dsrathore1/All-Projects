import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mainRoutes from './routes/routes.js';
import connectDB from './Database/connectDB.js';
import Models from "./models/models.js";

dotenv.config({ path: 'config.env' });

const app = express();
const PORT = process.env.PORT || 4004;

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(mainRoutes);

app.get("/", async (req, res) => {
    const allDetails = await Models.find();
    // res.json(allDetails);
    res.send(`<h1>
    ${allDetails.map((ele) => {
        return (
            `<br>My name is ${ele.name} ${ele.lastName},<br> email :- ${ele.email}<br> Num :- ${ele.mobNum}`
        )
    }
    )
        }
    </h1>`)
});

connectDB();

app.listen(PORT, () => {
    console.log(`Your website is running on http://localhost:${PORT}`)
});