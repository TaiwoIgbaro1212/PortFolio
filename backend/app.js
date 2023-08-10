const express = require("express");
const cors = require("cors");
const contactController = require("./controllers/contactController");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post("/contacts", contactController.sendMessage);

const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
