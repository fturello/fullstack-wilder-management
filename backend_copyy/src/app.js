// create express app

const express = require("express");
const cors = require("cors");

const app = express();

// use some application-level middleware

app.use(express.json());
app.use(cors());

// prefix all routes defined in router.js with /api

const router = require("./routers");

app.use("/api", router);

// define a route handler for the default home page

app.get("/", (req, res) => {
	console.log("A new request just hit the API !");
	res.send("Hello dear API client :)");
});

// define a route handler for the default 404 page

app.get("*", (req, res) => {
	res.status(404).json({ message: "Not found !" });
});

module.exports = app;
