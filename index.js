const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const path = require("path");
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(express.static(path.resolve(__dirname, "public")));
app.use("/public", express.static(path.join(__dirname, "public")));

app.use(require("./routes/math.route"));
app.use(require('./routes/user.route'));
app.use(require('./routes/processor.route'));
app.use(require('./routes/cooler.route'));
app.use(require('./routes/comp.route'));

const start = async () => {
    try {
        await mongoose.connect(process.env.MONGO_SERVER);
        console.log("Подключились к базе");
    } catch (error) {
        console.log(error);
    }
};

app.listen(process.env.PORT, () => {
    console.log("Подключились к серверу");
});

start();
