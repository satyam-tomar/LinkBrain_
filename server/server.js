import express from "express";
import cors from "cors";
import { connectDb } from "./db/mongoDb.js";
import { contactRouter } from "./routes/contact.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}))

// app.get('/', (req, res) => {
//     res.send('Backend is working..');
// })

app.use('/api/v1', contactRouter);

// console.log(process.env.PORT);

const PORT = process.env.PORT || 3000;

async function startServer() {
    try {
        await connectDb();

        app.listen(PORT, () => {
            console.log(`http://localhost:${PORT}`);
        });

    } catch (error) {
        console.error("Server failed to start", error);
    }
}

startServer();