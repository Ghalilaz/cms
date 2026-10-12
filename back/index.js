const express = require("express");
const env = express();
env.config();
const PORT = process.env.PORT 

const app = express();
 app.get("/", (req, res) => {
    res.send("Hello from backend");
 });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});