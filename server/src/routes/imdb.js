const axios = require("axios");
var express = require('express');
var router = express.Router();

router.get("/search/:searchValue", (req, res) =>{
    axios.get("https://www.omdbapi.com/?page=1&apikey=88ec6c42&s=" + req.params.searchValue).then((response)=>{
        console.log(response.data.Search);
        res.json(response.data.Search);        
    });
});
    
module.exports = router;