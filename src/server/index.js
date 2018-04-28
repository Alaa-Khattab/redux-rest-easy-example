const express = require('express');
const axios = require('axios');
const app = express()
const port = 3000;

app.use(express.static('public'))

app.get('/', function (req, res) {
  axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&tags=soccer&api_key=b42d2fb8253ae35e4579a7d85d39db30&per_page=10&page=3&format=json`)
  .then((response)=>{
    res.json(response.data.split('(')[1].split(')')[0])

  })
  .catch((err)=>{console.log(err);})
})

app.listen(port,()=>{
  console.log(`Server is running on ${port} port`);
})
