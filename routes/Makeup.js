var express = require('express');
var makeup_controller = require('../controllers/makeup');
var router = express.Router();

const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    res.redirect("/login");
}

/* GET home page. */
router.get('/', makeup_controller.makeup_view_all_Page );
/* GET detail vehicles page */
router.get('/detail', makeup_controller.makeup_view_one_Page);
/* GET create vehicle page */
router.get('/create', secured, makeup_controller.makeup_create_Page);
/* GET create update page */
router.get('/update', secured, makeup_controller.makeup_update_Page);
/* GET delete costume page */
router.get('/delete', secured, makeup_controller.makeup_delete_Page);
module.exports = router;
