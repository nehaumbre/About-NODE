import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello World!!!!</h1>");
});
app.listen(port, () => console.log(`server is up at port ${port}!`));
//netstat -ano | findstr "LISTENING"
