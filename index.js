const express = require("express");
const app = express();
const port = 3000;
const hostName = "localhost";

//middleware
app.use(express.json());

const userRoutes = require("./routes/User");

app.use("/users",userRoutes);
app.listen(port, hostName, () => {
    console.log("Server started");
});

