const express = require('express');
const app = express();

app.use((req, res, next) =>{
  console.log(req.method, req.path);
  next();
});

app.get('/', (req, res, next) => {
  res.send("HELLO WORLD");
});













app.listen(3000, () => console.log("App listening on 3000"));