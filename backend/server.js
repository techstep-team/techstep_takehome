const express = require("express");
const cors = require("cors");
const db = require("./db");
require("dotenv").config({ path: "./.env" });

const app = express();
// handle cors
app.use(cors());

// parse application/json
app.use(express.json());

// Define routes
app.use("/api/routes", require("./routes/hello"));

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Listening on port:${PORT}`));
