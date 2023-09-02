const express = require ('express')
const app = express()
const port = 3000;

const message ="Hello world from express!";

app.get("/", (req,res) => {
    res.send(message);
});

app.listen(port, () => {
    console.log("Sender application is listening on port ${port}");
})