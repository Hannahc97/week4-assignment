import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();


app.listen(4000, () => {
    console.log("Server is running on port 4000");
});

app.get("/", (req, res) =>{
    res.json({ message: "This is the root route"})
})

const dbConnectionString = process.env.DATABASE_URL;

export const db = new pg.Pool({
    connectionString: dbConnectionString,});

//Import packages
//Start or configure packages
//tell server to use JSON
//Set up port for the server by listening...
//Set up your database pool
//Create a root route

//======================================================================
//I need a route to READ data from the database

app.get("/comments", async (req, res) => {
    const query = await db.query(`SELECT * FROM guestbook`);
    await res.json(query.rows);
});


//I need a route to CREATE new data in the database : server --> db

app.post("/new-data", async(req, res) =>{
    console.log("Request body:", req.body);
    const data = req.body;
    const query = await db.query(`INSERT INTO guestbook (guest_name, guest_from, rating, comment) VALUES($1, $2, $3, $4)`, [data.formValues.name, data.formValues.origin, data.formValues.rating, data.formValues.comment]); // Ensure the req.body fields match your frontend fields (name, origin, rating, and comment).
    await res.json({
        message: "The data was added successfully", 
        data: query.rows})
});