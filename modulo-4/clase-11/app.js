const express = require("express");
const app = express();
const path = require("path");

const staticFileRouter = express.static("public");
app.use(staticFileRouter);
//                public/
// http://localhost:3000/images/profile-pics/imagen.jpg

app.listen(3000, () => {
  console.log("Estamos escuchando al puerto 3000");
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});
