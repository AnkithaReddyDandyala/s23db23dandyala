var express = require('express');
var makeup_controller = require('../controllers/makeup');
var router = express.Router();

/* GET home page. */
router.get('/', makeup_controller.makeup_view_all_Page );
router.get('/makeup/:id', makeup_controller.makeup_detail);
module.exports = router;
