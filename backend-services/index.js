const express = require("express");
const cors = require("cors");
const routes = require("./routes/todoRoutes");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
