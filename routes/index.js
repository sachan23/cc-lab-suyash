var router = require('express').Router();
const authCtrl = require('../controllers/authCtrl');
const auth = require('../middlewares/auth');
const {Marks} = require('../models/user');

router.route('/')
    .get(auth, async(req, res) => {
        var allData = await Marks.find({});
        try {
            if(req.user){
                return res.render('dashboard', {
                    allData:allData
                });
            }
            return res.render('index', {
                isAuthenticated: req.user ? true : false,
                allData:allData
            });
        } catch (err) {
            console.log("index home err -- ", err);
            return res.send({'success': false, "msg": "Server error occurred"});
        }
    });



module.exports = router;