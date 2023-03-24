import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mainRoutes from './routes/routes.js';
import connectDB from './Database/connectDB.js';

dotenv.config({ path: 'config.env' });

const app = express();
const PORT = process.env.PORT || 4004;

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(mainRoutes);

app.get("/", (req, res) => {
    res.send("<h1>Hello World</h1>");
});

connectDB();

app.listen(PORT, () => {
    console.log(`Your website is running on http://localhost:${PORT}`)
});