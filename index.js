const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const tourPlaces = require('./data/place.json');

app.use(cors());

app.get("/", (req, res) => {
  res.send("Travel Guru Server is Running");
});

app.get('/places',(req,res)=>{
    res.send(tourPlaces);
});

app.get('/places/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const place = tourPlaces.find(p=>p.id===id);
    console.log(place);
    res.send(place);
});

app.listen(port, () => {
  console.log("server is running on port", port);
});
