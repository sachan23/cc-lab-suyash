var router = require('express').Router();
var auth = require('../middlewares/auth');

const {Marks} = require('../models/user');
router.route('/')
    .get(auth, async(req, res) => {
        var allData = await Marks.find({});
        try {
            if(!req.user){
                return res.redirect('/');
            }
            console.log("d");
            console.log(allData.length);
            res.render('dashboard', {
                isAuthenticated: req.user ? true : false,
                user: req.user,
                ad:allData
            });
        } catch (err) {
            console.log("dashboard err -- ", err);
            return res.send({"success": false, msg: "Server error occurred"});
        }
    })

module.exports = router;