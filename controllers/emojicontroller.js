const validateSession = require('../middleware/validate-session');

const router = require('express').Router();
const Emoji = require('../db').import('../models/emoji');
const Poetry = require('../db').import('../models/poetry');

/*******************
 ***EMOJI CREATE BY poetryId****
 *******************/ 
router.post('/create/:poetryId', validateSession, async (req, res) => {
    const query = { where: { id: req.params.poetryId}};
// increment is a static method on model
// 'like' is referring to the like column that can be seen in the poetry model
    const incresult = await Poetry.increment('like', query)
    res.status(200).json(incresult)
    
})

module.exports = router;

// increment method resource
// https://sequelize.org/master/class/lib/model.js~Model.html#static-method-increment
