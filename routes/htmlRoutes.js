const path = require("path");
const router = require("express").Router();


router.get("/api", function(req, res){
    res.sendFile(path.join(__dirname, "../pages/index.html"))
})

// // anything else goes to main page
// router.get("*", function(req, res){
//     res.sendFile(path.join(__dirname, "../pages/home.html"))
// })

module.exports = router