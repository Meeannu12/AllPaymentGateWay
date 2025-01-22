const express = require("express");
const planetPayOutRouter = require("./router/planet.routes");

const app = express();
const PORT = 2000;

app.use(express.json());

app.use('/planetPayOut', planetPayOutRouter )

app.listen(PORT, () => {
  console.log(`Server Started at ${PORT}`);
});
