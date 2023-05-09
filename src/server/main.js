import express from "express";
import ViteExpress from "vite-express";
import bodyParser from "body-parser";

// App

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Server

ViteExpress.listen(app, 3010, () =>
    console.log("Server is listening on port 3010...")
);
