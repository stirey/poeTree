const router = require('express').Router();
const Emoji = require('../db').import('../models/emoji');

/*******************
 ***EMOJI CREATE****
 *******************/ 

router.post('/create', (req, res) => {
    Emoji.create({
        heart: req.body.emoji.heart,
        smile: req.body.emoji.smile,
        sun: req.body.emoji.sun
    })
    .then(
        res.send("Testing the emoji table")
    );
})


module.exports = router;