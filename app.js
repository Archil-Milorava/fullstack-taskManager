const express = require("express");
const app = express();
const tasks = require("./routes/tasks");

app.use(express.json())

//routes
app.get("/hello", (req, res) => {
  res.send("hello from task manager");
});

app.use("/api/v1/tasks", tasks);
app.use("/api/v1/tasks/:id", tasks);

const port = 3000;

app.listen(port, () => {
  console.log(`app is listening to server on prt ${port}`);
});
