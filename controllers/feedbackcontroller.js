const router = require('express').Router();
const Feedback = require('../db').import('../models/feedback');

/*******************
 *** CREATE****
 *******************/ 

router.post('/create', (req, res) => {
    Feedback.create({
        teacherName: req.body.feedback.teacherName,
        feedback: req.body.feedback.comment,
    })
    .then(
        res.send("Testing the feedback table")
    );
})


module.exports = router;