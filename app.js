const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./connection/connection");
require('dotenv').config()

app.use(express.static('./public'))
app.use(express.json());

app.use("/api/v1/tasks", tasks);
app.use("/api/v1/tasks/:id", tasks);

const port = 3000;

const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`app is listening to server on prt ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
