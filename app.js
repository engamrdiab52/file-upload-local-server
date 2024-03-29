const express = require('express')
const app = express()
const fileUpload = require('express-fileupload')

app.use(fileUpload());

app.post('/upload',(req, res)=>{
    let sampleFile;
    let uploadPath;
  
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.');
    }
    sampleFile = req.files.sampleFile;
    uploadPath = __dirname + '/uploads/' + sampleFile.name;
  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv(uploadPath, function(err) {
    if (err)
      return res.status(500).send(err);

    res.send('File uploaded!');
  });

})


app.listen(3000,()=>{
    console.log("listening on port 3000");
})