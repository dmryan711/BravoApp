const express = require("express");
const router = express.Router();

// @route POST api/files/upload
router.post("/upload", (req,res) =>{

    let fileText = JSON.stringify(req.body);

    let allLinesOfFile = fileText.split(/\\r\\n|\n/);
    let headers = allLinesOfFile[0].split(',');
    headers[0] = headers[0].substring(2,headers[0].length);
    console.log(headers);


    return res.status(200).json({facets: headers})


});

module.exports = router;