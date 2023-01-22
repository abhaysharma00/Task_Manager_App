console.log("Task Manager App");
const connectDB = require("./db/connect");
const Express = require("express");
const app = Express();
const tasks = require("./routes/tasks");

const port = process.env.PORT || 3000;
// dotenv
// it is used to keep secret variable secret
require("dotenv").config();

// middleware
app.use(Express.static("./public"));
// in order to serve static files we use this
app.use(Express.json());
// if we dont use it we wont see the data in req.data( )

// routes
app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});

app.use("/api/v1/tasks", tasks);
// another method is by using app.use()

// app.use( pass a function to not found)
app.get("*", (req, res) => {
  res.status(404).send("Route does not exist");
});

// listening

// .then method was not working so i tried this one
const start = async () => {
  try {
    await connectDB(process.env.mongo_url);
    app.listen(port, console.log(`listening at port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};
start();
