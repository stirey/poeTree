const router = require('express').Router();
let validateSession = require('../middleware/validate-session');
const Announcement = require('../db').import('../models/announcement');

/***************************
 ****CREATE ANNOUNCEMENT****
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

/*************************
 ***UPDATE ANNOUNCEMENT***
 *************************/
router.put('/update/:entryId', validateSession, (req, res) => {
    const updateAnnouncement = {
        teacherName: req.body.announcement.teacherName,
        homework: req.body.announcement.homework,
    }
    const query = { where: { id: req.params.entryId}};

    Announcement.update(updateAnnouncement, query)
    .then((announcement) => res.status(200).json(announcement))
    .catch(err => res.status(500).json({ error: err}))
})

/*************************
 ***DELETE ANNOUNCEMENT***
 *************************/

 router.delete('/delete/:entryId', validateSession, (req,res) => {

    const query = { where: { id: req.params.entryId }}

    Announcement.destroy(query)
    .then(() => res.status(200).json({ message: "Announcement has been removed"}))
    .catch((err) => res.status(500).json({ error: err}));
});




module.exports = router;