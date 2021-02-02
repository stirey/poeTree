const validateSession = require('../middleware/validate-session');

const router = require('express').Router();

const Acorns = require('../db').import('../models/user');

/*******************
 ***Acorn CREATE BY userId****
 *******************/ 
router.post('/create/:id', validateSession, async (req, res) => {
    try {
        const query = { where: { id: req.params.userId}};

        const incAcorns = await Acorns.increment('acorns', query)
        res.status(200).json(incAcorns)
    }
    catch(err){res.status(500).json(err)}
})

module.exports=router;