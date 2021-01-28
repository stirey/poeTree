const router = require('express').Router();
const Emoji = require('../db').import('../models/emoji');

/*******************
 ***EMOJI CREATE****
 *******************/ 

router.post('/create', (req, res) => {
    Emoji.create({
        heart: req.body.emoji.heart,
        smile: req.body.emoji.smile,
        sun: req.body.emoji.sun,
        userId: req.user.id,
        poetryId: req.poetry.id
    })
    .then(
        res.send("Testing the emoji table")
    );
})




module.exports = router;