const express = require("express");
const userRouter = require("./routes/UserRoutes");

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use("/api/users", userRouter);

app.listen(PORT, () => console.log("Server is running on "+ PORT));

module.exports = app;