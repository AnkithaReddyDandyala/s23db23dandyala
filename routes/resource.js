var express = require('express');
var router = express.Router();

// Require controller modules.
var api_controller = require('../controllers/api');
var makeup_controller = require('../controllers/makeup');

/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// makeup ROUTES ///
// POST request for creating a Costume.
router.post('/makeup', makeup_controller.makeup_create_post);
// DELETE request to delete Costume.
router.delete('/makeup/:id', makeup_controller.makeup_delete);
// PUT request to update Costume.
router.put('/makeup/:id', makeup_controller.makeup_update_put);
// GET request for one Costume.
router.get('/makeup/:id', makeup_controller.makeup_detail);
// GET request for list of all Costume items.
router.get('/makeup', makeup_controller.makeup_list);
module.exports = router;