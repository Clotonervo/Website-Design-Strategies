const express = require('express');
const bodyParser = require("body-parser");
// const multer = require('multer')


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static('public'));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/test', {
  useNewUrlParser: true
});


app.listen(4000, () => console.log('Server listening on port 4000!'));


// Configure multer so that it will upload to '/public/images'
// const upload = multer({
//   dest: './public/images/',
//   limits: {
//     fileSize: 10000000
//   }
// });

// Create a scheme for items in the museum: a title and a path to an image.
const itemSchema = new mongoose.Schema({
  title: String,
  amount: Number,
  income: Boolean,
  date: String,
});

// Create a model for items in the museum.
const Item = mongoose.model('Item', itemSchema);

// Upload a photo. Uses the multer middleware for the upload and then returns
// the path where the photo is stored in the file system.
// app.post('/api/photos', upload.single('photo'), async (req, res) => {
//   // Just a safety check
//   if (!req.file) {
//     return res.sendStatus(400);
//   }
//   res.send({
//     path: "/images/" + req.file.filename
//   });
// });

// Create a new item in the museum: takes a title and a path to an image.
app.post('/api/all', async (req, res) => {
  const item = new Item({
    title: req.body.title,
    amount: req.body.amount,
    income: req.body.income,
    date: req.body.date,
  });
  console.log(item);
  try {
    await item.save();
    res.send(item);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});


// Get a list of all of the items in the museum.
app.get('/api/all', async (req, res) => {
  try {
    let items = await Item.find();
    res.send(items);
  } catch (error) {
    console.log("this is a problem")
    console.log(error);
    res.sendStatus(500);
  }
});


app.delete('/api/all/:id', async (req,res) =>{
  try {
    console.log(req.params.id);
    await Item.deleteOne({
      _id: req.params.id
    });
    // let items = await Item.find();
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.put('/api/all/:id', async (req, res) => {
  try {
    var item = await Item.findOne({
      _id: req.params.id
    });

    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});