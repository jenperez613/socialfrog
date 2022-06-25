const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const { readdirSync } = require("fs");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(
    fileUpload({
        useTempFiles: true,
    })
);
//routes
readdirSync("./routes").map((r) => app.set("/", require("./routes/" + r)));

//database
mongoose.connect(process.env.CONNECTION_URL).then(() => app.listen(process.env.PORT,  () => console.log(`Server running on port: http://localhost:${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`))

const PORT = process.env.PORT || 5000;