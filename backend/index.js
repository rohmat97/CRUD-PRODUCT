
import db from "./config/database.js";
import express from "express";
import cors from "cors";
import productRoutes from "./routes/index.js";

const app = express()

app.use(cors())
app.use(express.json())
app.use('/products',productRoutes);
app.listen(5000, () => {
    console.log('App listening on port 5000!');
});

try {
    await db.authenticate()
    console.log('db connect');
} catch (error) {
    
    console.log('db not connect', error);
}

