const router = require('express').Router();
const Announcement = require('../db').import('../models/announcement');

/***************************
 *** CREATE ANNOUNCEMENT****
 ***************************/ 

router.post('/create', (req, res) => {
    Announcement.create({
        teacherName: req.body.announcement.teacherName,
        homework: req.body.announcement.homework,
    })
    .then(
        res.send("Testing the announcement table")
    );
})


module.exports = router;