const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.status(200).send('Welcome to Rad5 Academy Graduation page')
})










module.exports = router;