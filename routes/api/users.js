const express = require('express');
const router = express.Router();

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public 

router.get('/test', (req, res) => { // this isn't going to refere to just /test...it is /api/users/test
    res.json({msg: "Users Works"})
}); 

module.exports = router;