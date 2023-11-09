var makeup = require("../models/makeup");

// List of all makeup
exports.makeup_list = async function (req, res) {
    try {
        themakeup = await makeup.find();
        res.send(themakeup);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// for a specific makeup.
exports.makeup_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: makeup detail: ' + req.params.id);
};

// Handle makeup create on POST.
exports.makeup_create_post = async function (req, res) {
    console.log(req.body)
    let document = new makeup();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.brand = req.body.brand;
    document.id = req.body.id;
    document.price = req.body.price;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle makeup delete form on DELETE.
exports.makeup_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: makeup delete DELETE ' + req.params.id);
};

// Handle makeup update form on PUT.
exports.makeup_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: makeup update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.makeup_view_all_Page = async function (req, res) {
    try {
        themakeup = await makeup.find();
        res.render('makeup', { title: 'makeup Search Results', results: themakeup });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};