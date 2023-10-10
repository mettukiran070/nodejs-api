const express = require("express");
const mongoose = require("mongoose")
const userRouter = require("./routes/UserRoutes");

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/users", userRouter);

mongoose.connect(
    "mongodb://root:example@localhost:27017",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("connected successfully"))
  .catch((err) => console.log("unable to connect :: ", err))

app.listen(PORT, () => console.log("Server is running on "+ PORT));

module.exports = app;