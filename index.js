const express = require("express");
const https = require("https");
const app = express();
const PORT = 8080;
const fetch = require('node-fetch');
const axios = require('axios');

app.get('/:leaf', function (req, res) {
    const {leaf} = req.params;
    var url = `https://cropper2021-3cc54-default-rtdb.firebaseio.com/Diseases/${leaf}.json`;
     
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get('/all/:test',  (req, res) => {
    console.log("hiiii");

    var url = `https://cropper2021-3cc54-default-rtdb.firebaseio.com/Diseases_names.json`;

    console.log("hiiii");

    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        res.send(data);
    })
    .catch(err => {
        res.send(err);
    });
});

app.get('/image', function (req, res) {

    const imageObject = req.body;
    const data = null;

    var url = "http://10.0.2.2:5000/api/test";

    axios
        .post(url,imageObject
        .then((response)=>{
            data = JSON.stringify(response.data);
            const defectName = data.replace(/['"]+/g, "");
            console.log(defectName);
            res.send(defectName);
        })
        .catch((err) => {
            console.log("err=>" + JSON.stringify(err));
        })
    )
});


// app.listen(
//     PORT,
//     console.log("Listening on 8080")
// );

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });