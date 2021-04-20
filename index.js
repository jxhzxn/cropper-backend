const express = require("express");
const https = require("https");
// const request = require("request");
const app = express();
const PORT = 8080;
const fetch = require('node-fetch');
const axios = require('axios');
// const config = require('./config');
// var date;
// // const firebase = require('./db');

// const fs = require('fs');
// const { response } = require('express');

// var firebase = require("firebase/app");
// require("firebase/auth");
// require("firebase/firestore");
// var admin = require("firebase-admin");
// var db = admin.database();
// var ref = db.ref("server/saving-data/fireblog");





// var admin = require("firebase-admin");



//   var firebaseConfig = {
//     apiKey: "AIzaSyAFyMV6ma3SMRjobh-4MAvhZHw2bB_jsYw",
//     authDomain: "croppertest.firebaseapp.com",
//     projectId: "croppertest",
//     storageBucket: "croppertest.appspot.com",
//     messagingSenderId: "992085727943",
//     appId: "1:992085727943:web:8d81119c2815db26243ce2"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);

//   var admin = require("firebase-admin");

//     var serviceAccount = require("path/to/serviceAccountKey.json");

//     admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL: "https://croppertest-default-rtdb.firebaseio.com"
//     });

 


// firebase.initializeApp
// ({
//   apiKey: "AIzaSyARgxogmsBLLFtmTvwUYPw4MiwnHQFsK-c",
//   authDomain: "cropper2021-3cc54.firebaapp.com",
//   databaseURL: "https://cropper2021-3cc54.firebaseio.com",
//   storageBucket: "cropper2021-3cc54.appspot.com",
// //   messagingSenderId: "xxx"
// });



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

// app.get('/testing/:test',  (req, res) => {

//     // var url = `https://cropper2021-3cc54-default-rtdb.firebaseio.com/Diseases_names.json`;

//     // console.log("hiiii");

//     // fetch(url)
//     // .then(res => res.json())
//     // .then(data => {
//     //     console.log(data)
//     //     res.send(data);
//     // })
//     // .catch(err => {
//     //     res.send(err);
//     // });

//     firebase.database().ref("")

//     var usersRef = ref.child("test");
//         usersRef.set({
//         alanisawesome: {
//             date_of_birth: "June 23, 1912",
//             full_name: "Alan Turing"
//         },
//         gracehop: {
//             date_of_birth: "December 9, 1906",
//             full_name: "Grace Hopper"
//         }
//     });
// });

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
    // fetch(url)
    // .then(res => res.json())
    // .then(data => {
    //     res.send({ data });
    //     date = data;
    //     console.log(date.name);
    // })
    // .catch(err => {
    //     res.send(err);
    // });
});


app.listen(
    PORT,
    console.log("Listening on 8080")
);

// app.listen(3000, '0.0.0.0', function() {
//     console.log('Listening to port:  ' + 3000);
// });









// const options = {
//     method: 'GET',
//     uri: 'https://cropper2021-3cc54-default-rtdb.firebaseio.com/Diseases/Apple___Apple_scab.json'
// }

// app.use(express.json())

// app.get('/jxhzxn', (req, res) => {

//     url = 'https://cropper2021-3cc54-default-rtdb.firebaseio.com/Diseases/Apple___Apple_scab'
//     const response = fetch(url)
//     const json = response.json
//     console.log(json)

//     // res.status(200).send({
//     //     jxhzxn: "hi",
//     //     age: 21,
//     //     name: "jahzan"
//     // })
// })

// app.post('/jxhzxn/:id', (req, res) =>{
//     const {id} = req.params;

//     // app.get('https://cropper2021-3cc54-default-rtdb.firebaseio.com/Diseases/Apple___Apple_scab', (res) => {
//     // res.send({
//     //     output: "output"
//     //     })
//     // })

//     https(options).then(response => {
//         console.log(response);
//     }, error => {
//         console.log(error);
//     });

//     // res.send({
//     //     output: `we got your request ${id}`
//     // })
// })
