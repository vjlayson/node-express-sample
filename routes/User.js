//module

const express = require("express");
const { restart } = require("nodemon");
const router = express.Router();

router.get("/fetch", (req,res) => {
    // res.send("List of users")

    // res.json({
    //     "name": "Vanessa",
    //     "email": "vjlayson@gmail.com",
    //     "userName": "vjlayson"
    // });

    console.log(req.query);
    res.send(req.query);
});

// Do it for every http request method
router.post("/insert", (req,res) => {
    // res.json({
    //     "message": "Successful",
    // });

    console.log(req.body)
    res.send(req.body);
});




module.exports = router;